const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "to do db";
const client = new MongoClient(url, {useUnifiedTopology: true });

var _db;

function connectToDB(callback) {
    // Use connect method to connect to the server
    client.connect(function (err) {
        console.log("Connected successfully to server");
        _db = client.db(dbName);
        callback(err)
    });
}

const findDocuments = async () => {
    //Get the documents collection
    const collection = _db.collection("to-do-collection");
    //Find some documents
    try {
    const results = await collection.find({}).toArray();
    return results
    } catch (error) {
        throw new Error(error)
    }
};
