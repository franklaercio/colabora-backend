FROM node:16.18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate
RUN apt-get update -y \
  && apt-get install -y openssl

COPY . .

CMD ["npm", "run", "start"]
