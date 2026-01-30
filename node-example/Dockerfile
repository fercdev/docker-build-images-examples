FROM node:22-alpine

ARG APP_ENV

ENV APP_ENV=${APP_ENV}

WORKDIR /app

COPY . .

RUN npm i --production

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --retries=2 \
    CMD wget -qO-  http://localhost:3000/health || exit 1

CMD [ "npm", "start" ]