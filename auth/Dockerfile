FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install --force
RUN npm run build

CMD [ "npm", "start" ]
