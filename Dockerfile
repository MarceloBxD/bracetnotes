FROM node:14.17.0-alpine3.13

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3030

CMD ["npx", "expo", "start"]