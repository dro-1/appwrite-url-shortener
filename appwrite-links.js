require("dotenv").config();

const sdk = require("node-appwrite");

const client = new sdk.Client();

client
  .setEndpoint("http://localhost:3000/v1") // Your API Endpoint
  .setProject(process.env.PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_KEY); // Your secret API key

const db = new sdk.Database(client);

const run = async () => {
  try {
    let collection = await db.createCollection(
      "Links",
      [],
      [],
      [
        {
          label: "originalURL",
          key: "originalurl",
          type: "text",
          default: "Empty Name",
          required: true,
          array: false,
        },
        {
          label: "uniqueName",
          key: "uniquename",
          type: "text",
          default: "Empty",
          required: true,
          array: false,
        },
        {
          label: "shortUrl",
          key: "shorturl",
          type: "text",
          default: "Empty",
          required: true,
          array: false,
        },
      ]
    );
    console.log(collection.$id);
  } catch (e) {
    console.log(e);
  }
};

run();
