## Appwrite URL Shortener

To use this app, add a .env file with the following variables:

- APPWRITE_KEY
- LINKS_COLLECTION_ID
- PROJECT_ID

You can get the APPWRITE_KEY and PROJECT_ID from your Appwrite Dashboard after creating them respectively.
When done, run

```
node appwrite-links.js
```

The command runs the appwrite-links.js which creates our LINKS collection and spits out its ID, so copy it and insert it into the .env file.

Then run

```
yarn start
```

to start the local server.
