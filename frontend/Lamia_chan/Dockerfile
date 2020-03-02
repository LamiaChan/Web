FROM node:lts-alpine as build-stage
RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm audit fix
COPY . /app/