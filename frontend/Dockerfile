FROM node:lts-alpine as build-stage

WORKDIR /srv/www/lamiachan/frontend

COPY package*.json /srv/www/lamiachan/frontend/

RUN [ "npm", "install" ]

RUN [ "npm", "install", "bootstrap" ]

COPY ./ /srv/www/lamiachan/frontend/

CMD [ "npm", "start" ]
