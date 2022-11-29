var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect();
    var database = client.db("allcontinents");
    database.dropDatabase()
    database = client.db("allcontinents");
    const continents = database.collection("continents");
    const result = await continents.insertOne({name:"Евразия"});
    console.log(`${result} documents were inserted`);
  } 
  finally {
    await client.close();
  }
}
run()
