FROM node:12.16.1-alpine
COPY . /app/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/package.json
RUN npm install -g @vue/cli
RUN npm install
RUN npm audit fix

