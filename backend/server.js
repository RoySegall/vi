import express from 'express';
import lodash from 'lodash';
import bodyParser from 'body-parser';
import {getMongoClient, getResults, createResult} from "./db.js";
const {shuffle, isEmpty, some} = lodash;
const app = express()
const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let client;

app.get('/numbers', (req, res) => {
  res.send({
    numbers: shuffle([...Array.from({length: 16}).keys()])
  })
});

app.post('/result', async (req, res) => {

  // todo: consider use a validation library.
  const {name, moves, time} = req.body;

  const {ops: [document]} = await createResult(client, req.body);
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
