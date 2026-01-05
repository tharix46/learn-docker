FROM node:18.9.1

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 5050

CMD ["npm", "start"]

