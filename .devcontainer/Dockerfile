FROM node:24-alpine3.21

# Instalar bash para las features que lo necesiten
RUN apk add --no-cache bash

WORKDIR /app
COPY ../package*.json ./
RUN npm install -g npm@latest && npm cache clean --force && rm -rf /root/.npm /root/.cache && npm install
COPY ../ ./

CMD ["npm", "run", "dev"]
