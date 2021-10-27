## Appwrite URL Shortener

> You can get more insight into this app by reading this [article](https://dev.to/dro1/building-a-url-shortener-using-appwrite-and-express-128i).

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

# Screenshots

![image](https://user-images.githubusercontent.com/45892107/139019775-b1504f17-c405-4da2-94e1-6c1a6d9eb195.png)

![image](https://user-images.githubusercontent.com/45892107/139019804-c8056c80-bc80-4919-8d70-b1bf4e008f59.png)

![image](https://user-images.githubusercontent.com/45892107/139019851-b8d92902-e0e7-40d5-ad75-c171ef4fac20.png)


