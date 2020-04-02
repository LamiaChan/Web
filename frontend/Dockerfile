FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN [ "npm", "install", "-g", "react-script" ]

#RUN npm install
RUN [ "npm", "install" ]

COPY ./ /app/


# for prod
#RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
