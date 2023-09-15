# syntax=docker/dockerfile:1.6.0
FROM node:current-bullseye

ENV APP_HOME "/usr/src/app/"
ENV APP_PORT 5173

RUN apt update

COPY . $APP_HOME

WORKDIR $APP_HOME
RUN yarn install

EXPOSE $APP_PORT
