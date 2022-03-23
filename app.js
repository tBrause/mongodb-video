const http = require("http");

const mongodb = require("mongodb");
/*
const MongoClient = mongodb.MongoClient;

const connection = "mongodb://root:secret@http://localhost:27017/admin";

MongoClient.connect(connection, { autoReconnect: true }, (err, database) => {
  //
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
});
*/

/*
const { MongoClient } = require("mongodb");
const url = "localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "tutorial.products";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // the following code examples can be pasted here...

  return "done.";
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

*/

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
