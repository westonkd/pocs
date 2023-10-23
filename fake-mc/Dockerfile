FROM ruby:3.1-bullseye as base

RUN apt-get update -qq && apt-get install -y build-essential apt-utils

# Node
RUN apt-get install -y ca-certificates curl gnupg
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update
RUN apt-get install nodejs -y


RUN apt install nano

RUN npm install --global yarn

WORKDIR /docker/app

RUN gem install bundler

COPY Gemfile* ./

RUN bundle install

ADD . /docker/app

ARG DEFAULT_PORT 3131

EXPOSE ${DEFAULT_PORT}
EXPOSE 3035

CMD [ "bundle","exec", "puma", "config.ru"]