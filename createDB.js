var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect();
    var database = client.db("allcontinents");
    database.dropDatabase()
    database = client.db("allcontinents");
    const allcontinents = database.collection("continents");
    const result = await allcontinents.insertMany(data);
    console.log(`${result} documents were inserted`);
  }
  finally {
    await client.close();
  }
}
run()