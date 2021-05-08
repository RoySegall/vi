FROM node:14.16.1

WORKDIR /app
ADD . /app

RUN npm i && npm install -g serve && npm run build

ENTRYPOINT ["serve", "-s", "build", "-l", "80"]
