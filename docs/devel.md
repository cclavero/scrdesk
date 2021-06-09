# ScoresDesk: Developing notes

## Languages

1. nodejs

- https://github.com/nvm-sh/nvm

$ nvm install v14.17.0
$ nvm use v14.17.0
$ nvm version
v14.17.0
$ node --version
v14.17.0
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

$ npm run build && mv build ../build/dist

$ cd ../app
$ go mod init github.com/cclavero/scrdesk/app
$ go mod tidy
$ go run main.go

3. Clean Go (09-06-2021)

4. Reject 'create-react-app' (09-06-2021)

$ cd ui
$ npm run eject
