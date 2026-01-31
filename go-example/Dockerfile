# Paso 1: build
FROM golang:1.21 AS builder

WORKDIR /src

COPY main.go .

RUN go mod init go-sample && go build -o app .

#Paso 2: runtime
FROM alpine:3.22

WORKDIR /app

COPY --from=builder /src/app .

CMD [ "./app" ]