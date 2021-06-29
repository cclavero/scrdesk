# ScoresDesk: Developing notes

## Languages

1. nodejs

- https://github.com/nvm-sh/nvm

$ nvm install v14.17.1
$ nvm use v14.17.1
$ nvm version
v14.17.1
$ node --version
v14.17.1
$ npm --version
6.14.13
$ npx --version
6.14.13

2. go

- https://github.com/moovweb/gvm

$ gvm install go1.16
$ gvm use go1.16
$ go version
go version go1.16 linux/amd64

## Log

1. React (06-06-2021)

- https://github.com/facebook/create-react-app#creating-an-app
- https://create-react-app.dev/docs/running-tests/
- https://codeburst.io/how-to-use-a-test-reporter-with-create-react-app-6c779f71f62
- https://create-react-app.dev/docs/getting-started/

$ npm init react-app ui
$ cd ui
$ npm test
$ npm start
$ npm run build

2. Go + React (06-06-2021)

- https://dev.to/codehakase/building-a-web-app-with-go-gin-and-react-5ke
- https://github.com/codehakase/golang-gin

$ npm run build && mv build ../build/ui/dist

$ cd ../app
$ go mod init github.com/cclavero/scrdesk/app
$ go mod tidy
$ go run main.go

3. Clean Go (09-06-2021)

4. Makefile (09-06-2021)

- https://create-react-app.dev/docs/getting-started/

$ make run

5. ui: Update (09-06-2021)

$ npm i jest-junit

6. ui: Clean & React Bootstrap with Material Design (12-06-2021)

- https://www.npmjs.com/package/mdbreact/v/5.0.1
- https://mdbootstrap.com/docs/react/getting-started/installation/
- https://stackoverflow.com/questions/43636667/unmet-peer-dependency-with-react

$ make run-ui

$ npm install mdbreact@5.0.1
$ npm run clean
$ npm run check
$ npm ls react

7. ui: Consume Go API + setState (18-06-2021)

- https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347
- https://reactjs.org/docs/react-component.html
- https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/

8. all: Update Makefile with all the targets (20-06-2021)

$ make

 Project tasks:

	 # Help task --------------------------------------------------
	 help			Print project tasks help
	
	 # UI tasks ---------------------------------------------------
	 test-ui		Execute all tests for UI
	 build-ui		Build UI for prod
	 ci-ui			CI for UI
	 run-ui			Run UI in dev mode
	
	 # App tasks --------------------------------------------------
	 test-app		Execute all tests for App
	 lint-app		Execute lint task for App
	 build-app		Build App
	 ci-app			CI for App
	
	 # Global tasks -----------------------------------------------
	 ci			CI for UI & App
	 run			Build UI and run App in dev mode
	
	 # Docker tasks -----------------------------------------------
	 docker-build 		Build App docker image
	 docker-start		Start the App docker container
	 docker-stop		Stop the App docker container

9. ui + app: Print app version (23-06-2021)

- https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin
- https://www.calhoun.io/using-the-service-object-pattern-in-go/

10. ui + app: UI api service + Login form (26-06-2021)

- https://www.pluralsight.com/guides/how-to-pass-data-between-react-components
- https://www.robinwieruch.de/local-storage-react

$ curl -vvv -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"admin"}' http://localhost:8000/app/login

