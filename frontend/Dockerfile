FROM node:lts-alpine as build-stage

WORKDIR /srv/www/lamiachan/frontend

COPY package*.json /srv/www/lamiachan/frontend/

RUN [ "npm", "install" ]

RUN [ "npm", "install", "react-bootstrap" ]

RUN [ "npm", "install", "react-redux" ]

RUN ["npm", "install", "--save", "redux", "react-redux"]

COPY ./ /srv/www/lamiachan/frontend/

CMD [ "npm", "start" ]
