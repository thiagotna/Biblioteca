const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.use(cors()); // Usar o middleware cors
app.use(express.json());

app.get('/Library/books', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Library');
        const collection = database.collection('books');
        const books = await collection.find({}).toArray();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
