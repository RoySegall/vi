import express from 'express';
import lodash from 'lodash';
import bodyParser from 'body-parser';
import cors from 'cors';

import {config} from 'dotenv';

const {shuffle} = lodash;
const app = express();

import {getMongoClient, getResults, createResult} from "./db.js";

config();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

let client;

app.get('/numbers', (req, res) => {
  res.send({
    numbers: shuffle([...Array.from({length: 16}).keys()])
  })
});

app.post('/result', async (req, res) => {

  // todo: consider use a validation library.
  const {name, movesNumber, duration} = req.body;
  const {ops: [document]} = await createResult(client, {name, movesNumber, duration});
  res.json({result: document});
});

app.get('/results', async (req, res) => {
  // Get all the results.
  const results = await getResults(client);
  res.send({results});
});

app.listen(port, async () => {
  client = await getMongoClient();
  console.log(`Example app listening at http://localhost:${port}`)
});

process.on('exit', async () => {
  await client.close();
});
