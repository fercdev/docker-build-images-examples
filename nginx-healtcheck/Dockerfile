FROM nginx:alpine

LABEL maintainer="fernando"
LABEL app="nginx-healthcheck-example"

COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --retries=2 \
    CMD wget -qO-  http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]