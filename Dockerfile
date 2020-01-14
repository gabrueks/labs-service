FROM node:10.16.3

WORKDIR /usr/src/app/labs

COPY package.json ./

RUN npm install --production

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

CMD ["npm", "start"]

EXPOSE 8080
