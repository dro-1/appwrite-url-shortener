const { getDB } = require("./../appwrite");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.port || 3001;

const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;

const createLink = async (req, res) => {
  let { originalURL, uniqueName } = req.body;

  const db = getDB();

  if (uniqueName) {
    let documents = await db.listDocuments(process.env.LINKS_COLLECTION_ID, [
      `uniquename=${uniqueName}`,
    ]);
    if (documents.sum > 0)
      return res.status(403).send("This unique name is taken");
  } else {
    while (true) {
      uniqueName = uuidv4().substr(0, 6);
      let documents = await db.listDocuments(process.env.LINKS_COLLECTION_ID, [
        `uniquename=${uniqueName}`,
      ]);
      if (documents.sum == 0) break;
    }
  }

  db.createDocument(process.env.LINKS_COLLECTION_ID, {
    originalurl: originalURL,
    uniquename: uniqueName,
    shorturl: baseUrl + "/" + uniqueName,
  })
    .then((resp) => {
      return res.status(201).send({ shortUrl: resp.shorturl });
    })
    .catch(console.log);
};

const getLink = async (req, res) => {
  const { uniqueId } = req.params;

  const db = getDB();

  if (!uniqueId || uniqueId === "undefined")
    return res.status(403).send("Invalid Request");

  let documentsList = await db.listDocuments(process.env.LINKS_COLLECTION_ID, [
    `uniquename=${uniqueId}`,
  ]);

  if (documentsList.sum == 0)
    return res.status(404).send("Unique Name not found");

  res.redirect(documentsList.documents[0].originalurl);
};

module.exports = {
  createLink,
  getLink,
};
