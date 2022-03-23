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

// Update ausführen
collection.updateMany(
  { name: "Apfel" },
  { $set: { name: "Apfel rot" } },
  { upsert: true },
  (err) => {
    if (err) {
      console.log("Verbindungsfehler: ", err.message);
      process.exit(1);
    }

    console.log("Update wurde ausgeführt");

    client.close();
  }
);
