# Build ui

FROM node:14.17-alpine AS ui-builder

WORKDIR /usr/src/ui

COPY ui/package*.json ./
COPY ui/.npmrc .
COPY ui/public ./public
COPY ui/src ./src

RUN npm install && \
    npm run build;

# Build app

FROM golang:1.16 AS app-builder

ARG APP_VERSION

WORKDIR /go/src/github.com/cclavero/scrdesk/app

COPY app/. ./

RUN GO111MODULE=on CGO_ENABLED=0 GOOS=linux GOARCH=amd64 && \
    go mod download -x && \
    go build -a -installsuffix cgo -v -ldflags "-extldflags '-static' -w -s -X main.version=${APP_VERSION}" -o app main.go;

# Build image

# TEMPORAL
#FROM scratch
FROM alpine:latest  

RUN apk --no-cache add ca-certificates
#COPY --from=app-builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

WORKDIR /root

COPY --from=ui-builder /usr/src/ui/build ./ui/
COPY --from=app-builder /go/src/github.com/cclavero/scrdesk/app/app .

EXPOSE 8000

CMD ["./app"] 
