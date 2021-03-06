# VI puzzle

[![Tests](https://github.com/RoySegall/vi/actions/workflows/test-front.yaml/badge.svg)](https://github.com/RoySegall/vi/actions/workflows/test-front.yaml)

![img.png](./pictures/welcome.png)
![img.png](./pictures/game.png)

## Setting up development

It's pretty simple, take a look:

### Backend
First, make sure you have a mongo DB instance running. If not, you can mongod DB atlas which is easy to set up.

Then, Go to the `backend` folder and run:
```bash
npm i
cp .env.example .env
```

In the `.env` you need to set the mongo DB URI, the collection name, and the port as you want. Next:
```bash
npm run dev
```

### Frontend
Go to the `frontend` and run:
```bash
npm i
cp .env.development.example .env.development
```

Set the address of the backend in the `REACT_APP_BACKEND_ADDRESS` variable and run:
```bash
npm start
```

That's it. You are ready to start solving the puzzle 🍕🚀

### Tests
For now, we have tests for the front end:

```bash
cd frontend
npm run test
```

If you are lazy, like me, you can wait to the CI to wait if the test has passed or not.

## Docker
You can use docker to test it. Just run:

```bash
docker-compose up -d
```

After everything is ready go to http://localhost:3000 and you are ready to rock!
