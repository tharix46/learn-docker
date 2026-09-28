FROM node:14.17.3-alpine3.14

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY --chown=node:node server.js .

USER node

CMD ["node", "server.js"]