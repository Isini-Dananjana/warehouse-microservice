FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8090

ENTRYPOINT ["node","index.js"]