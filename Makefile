
# Env & Vars --------------------------------------------------------

# Project
include .env
export $(shell sed 's/=.*//' .env)

# go env
go_path = PATH=${PATH}:~/go/bin GOPATH=~/go 
go_env = $(go_path) GO111MODULE=on

# Tasks -------------------------------------------------------------

## # Help task --------------------------------------------------

## help			Print project tasks help
help: Makefile
	@echo "\n Project tasks:\n";
	@sed -n 's/^##/	/p' $<;
	@echo "\n";

##
## # UI tasks ---------------------------------------------------

## test-ui		Execute all tests for UI
test-ui:
	@echo "\n> Tests for UI\n";

	cd ui && \
		mkdir -p ../$(build_ui_path)/report && \
	    rm -rf ../$(build_ui_path)/.has-test-error ../$(build_ui_path)/report/junit.xml ../$(build_ui_path)/report/coverage && \
		npm test || touch ../$(build_ui_path)/.has-test-error;

	cd ui && \
		mv coverage ../$(build_ui_path)/report/coverage;

	test ! -e $(build_ui_path)/.has-test-error;

## build-ui		Build UI for prod
build-ui:
	@echo "\n> Build for UI (prod)\n";

	cd ui && \
		mkdir -p ../$(build_ui_dist_path) && \
		rm -rf ../$(build_ui_path)/.has-build-error ../$(build_ui_dist_path) && \
		npm run build || touch ../$(build_ui_path)/.has-build-error;

	cd ui && \
		mv build ../$(build_ui_dist_path);

	test ! -e $(build_ui_path)/.has-build-error;	
	
## ci-ui			CI for UI
ci-ui: test-ui build-ui

## run-ui			Run UI in dev mode
run-ui:
	@echo "\n> Run UI (dev)\n";

	cd ui && \
		npm start;

##
## # App tasks --------------------------------------------------

## test-app		Execute all tests for App
test-app:
	@echo "\n> Tests for App\n";

	$(go_env) go get gotest.tools/gotestsum \
		github.com/t-yuki/gocover-cobertura;

	cd app && \
		mkdir -p ../$(build_app_path)/report && \
		rm -rf ../$(build_app_path)/report/tests.* ../$(build_app_path)/report/coverage.* ../$(build_app_path)/.has-test-error;

	$(go_env) cd app && \
		go test -v -failfast -count=1 -p 1 -coverprofile=../$(build_app_path)/report/coverage.out -json \
			-tags="test" ./... 2>&1 > ../$(build_app_path)/report/tests.out || touch ../$(build_app_path)/.has-test-error;

	$(go_env) cd app && \
		cat ../$(build_app_path)/report/tests.out && \
		$(go_path) gotestsum --junitfile ../$(build_app_path)/report/tests.xml --raw-command cat ../$(build_app_path)/report/tests.out;

	$(go_env) cd app && \
		go tool cover -html=../$(build_app_path)/report/coverage.out -o ../$(build_app_path)/report/coverage.html && \
		$(go_path) gocover-cobertura < ../$(build_app_path)/report/coverage.out > ../$(build_app_path)/report/coverage.xml;

	test ! -e $(build_app_path)/.has-test-error;	

## lint-app		Execute lint task for App
lint-app:
	@echo "\n> Lint for App\n";

	$(go_env) go get github.com/golangci/golangci-lint/cmd/golangci-lint@v1.25.0;

	cd app && \
		rm -rf ../$(build_app_path)/report/lint.* ../$(build_app_path)/.has-lint-error;

	$(go_env) cd app && \
		$(go_path) golangci-lint run ./... 2>&1 > ../$(build_app_path)/report/lint.out || touch ../$(build_app_path)/.has-lint-error; 

	cd app && \
		cat ../$(build_app_path)/report/lint.out;

	test ! -e $(build_app_path)/.has-lint-error;

## build-app		Build App
build-app:
	@echo "\n> Build App\n";

	cd app && \
		mkdir -p ../$(build_app_path)/bin && \
		rm -rf ../$(build_app_path)/bin/app;

	$(go_env) cd app && \
		rm -rf ../$(build_app_path)/bin/ui && \
		cp -rf ui ../$(build_app_path)/bin/ui && \
		go build -a -v -o ../$(build_app_path)/bin/app main.go;

## ci-app			CI for App
ci-app: test-app lint-app build-app

##
## # Global tasks -----------------------------------------------

## ci			CI for UI & App
ci: ci-ui ci-app

## run			Build UI and run App in dev mode
run: build-ui
	@echo "\n> Run UI (prod) & App (dev)\n";

	$(go_env) cd app && \
		go run -ldflags="-X main.Version=$(APP_VERSION)" main.go;

##
## # Docker tasks -----------------------------------------------

## docker-build 		Build App docker image
docker-build:
	@echo "\n> Build App docker image\n";
	@echo "- Version: '$(APP_VERSION)'\n";

	docker build -f ./build/docker/Dockerfile --build-arg APP_VERSION=$(APP_VERSION) \
		--rm --tag scrdesk-app:$(APP_VERSION) .;

## docker-start		Start the App docker container
# Exec: docker run -it --name scrdesk-app-local --rm scrdesk-app:1.0-beta /bin/bash
docker-start:
	@echo "\n> Start App docker container\n";

	docker run -d -p 8000:8000 --rm --name scrdesk-app-local scrdesk-app:$(APP_VERSION);

## docker-stop		Stop the App docker container
docker-stop:
	@echo "\n> Stop App docker container\n";

	docker stop scrdesk-app-local;
