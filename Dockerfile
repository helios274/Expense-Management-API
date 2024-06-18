FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate --schema=./src/prisma/schema.prisma

RUN npx prisma migrate deploy --schema=./src/prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "start"]
