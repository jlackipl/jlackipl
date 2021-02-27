FROM node:12 as base

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

FROM base as dev

RUN npm install -g @vue/cli

EXPOSE 8080

CMD [ "npm", "run", "serve" ]