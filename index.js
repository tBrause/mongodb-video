// mongodb-Modul einbinden
const { MongoClient } = require("mongodb");

// Verbindungsdaten
const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

// Verbindung initialisieren
const client = new MongoClient(url);

// Verbindung öffnen
if (client.connect()) {
  console.log("Connected successfully to server");
}

// Datenbank auswählen
const dbName = "tutorial";
const db = client.db(dbName);

// Collection auswählen
const collectionName = "products";
const collection = db.collection(collectionName);

// alternative : findOne
// Ausgabe aller Daten
collection.find().toArray((err, documents) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }

  console.log(documents);

  client.close();
});

/*
// Ausgabe nach Suchmuster
collection
  .find({
    price: { $lt: 1 },
  })
  .toArray((err, documents) => {
    if (err) {
      console.log(err.message);
      process.exit(1);
    }

    console.log(documents);

    client.close();
  });
*/

/*
collection.findOne(
  {
    category: "Obst",
  },
  (err, document) => {
    if (err) {
      console.log(err.message);
      process.exit(1);
    }

    console.log(document);

    client.close();
  }
);
*/
