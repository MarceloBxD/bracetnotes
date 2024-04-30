FROM node:14.17.0-alpine3.13

WORKDIR /app

COPY package*.json /app

RUN yarn install

COPY . /app 

CMD ["npx", "expo", "start"]