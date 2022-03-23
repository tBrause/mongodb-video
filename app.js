const http = require("http");

const mongodb = require("mongodb");

//const MongoClient = mongodb.MongoClient;

// FUNZT

const { MongoClient } = require("mongodb");
const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const client = new MongoClient(url);

// Database Name
const dbName = "tutorial";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("products");

  //console.log(collection);

  // the following code examples can be pasted here...

  collection.find().toArray((err, documents) => {
    if (err) {
      console.log(err.message + " gggg");
      process.exit(1);
    }

    //console.log(documents);

    documents.close();
  });

  return "done.";
}

main()
  .then(output())
  .catch(console.error)
  .finally(() => client.close());

function output() {
  // ...
  console.log;
}

/*
const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html;  charset=utf-8",
  });
  res.write(`hello world ${req.method} ${req.url}`);
  res.end();
});

server.listen(`3000`, function () {
  // ...
});
*/
