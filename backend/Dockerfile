FROM node:14.16.1

WORKDIR /app
ADD . /app

RUN npm i && npm install pm2 -g && npm run build

CMD ["pm2-runtime", "src/server.js"]
