require("dotenv").config();

const sdk = require("node-appwrite");

const client = new sdk.Client();

client
  .setEndpoint("http://localhost:3000/v1") // Your API Endpoint
  .setProject(process.env.PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_KEY); // Your secret API key

const db = new sdk.Database(client);

const getDB = () => db;

module.exports = {
  getDB,
};
