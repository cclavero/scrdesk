#!/bin/bash

test:
	cd ui && \
	    rm -rf ../build/ui/junit.xml ../build/ui/coverage && \
		npm test && \
		mv coverage ../build/ui/coverage;

run:
	cd ui && \
		rm -rf ../build/ui/dist && \
		npm run build && \
		mv build ../build/ui/dist;
	cd app && \
		go run main.go;

run-ui:
	cd ui && \
		npm start;