# estapa 1: unzip and build
FROM node:20-alpine AS builder

WORKDIR /app

ADD proyecto.tar.gz /app
# ci = clean install 
RUN npm ci --only=production || npm i --production


# etapa2: runtime
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 5000

CMD [ "node", "index.js" ]