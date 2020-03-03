FROM node:lts-alpine

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./app/

RUN npm install -g @vue/cli

RUN npm i @vue/cli-service

RUN npm i @vue/cli-plugin-babel     

RUN npm install --save vue vue-router vuex

RUN npm i vue-template-compiler

RUN npm install --save axios

# устанавливаем зависимости проекта
RUN npm install

COPY . /app/

