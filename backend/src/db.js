import mongodb from 'mongodb';
const {MongoClient} = mongodb;

export async function getMongoClient() {
  const {MONGO_URI, DB_NAME} = process.env;
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  return client.db(DB_NAME);
}

export async function getResults(client) {
  return await client
    .collection("results")
    .find()
    .sort({duration: 1, movesNumber: 1})
    .limit(10)
    .toArray();
}

export async function createResult(client, result) {
  return await client.collection("results").insertOne(result);
}
