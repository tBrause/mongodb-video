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

// Neue Daten
const insertData = {
  name: "Birne",
  price: "0.90",
  categorie: "Obst",
};

collection.insertOne(insertData, (err) => {
  if (err) {
    console.log("Verbindungsfehler: ", err.message);
    process.exit(1);
  }

  console.log("Insert wurde ausgeführt");

  client.close();
});
