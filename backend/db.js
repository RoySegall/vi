import mongodb from 'mongodb';
const {MongoClient} = mongodb;

export async function getMongoClient() {
  // todo: get from env.
  const uri = "mongodb+srv://roy:6sgqxixud8sQi6L@cluster0.axcwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  await client.connect();
  // todo: get db name from env.
  return client.db("vi");
}

export async function getResults(client) {
  // todo: order by time and get the latest 10.
  const cursor = client.collection("results").find();
  return await cursor.toArray();
}

export async function createResult(client, result) {
  return await client.collection("results").insertOne(result);
}
