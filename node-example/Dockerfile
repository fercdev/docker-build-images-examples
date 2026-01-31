# STAGE 1: builder
FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

RUN npm i --production


# STAGE 2: runtime
FROM node:22-alpine

COPY --from=builder /app ./

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --retries=2 \
    CMD wget -qO-  http://localhost:3000/health || exit 1

CMD [ "npm", "start" ]