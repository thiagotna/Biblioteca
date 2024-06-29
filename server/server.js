const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.use(cors()); // Usar o middleware cors
app.use(express.json());

// CREATE - Adicionar um novo livro
app.post('/Library/books', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Library');
        const collection = database.collection('books');
        const result = await collection.insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

// READ - Obter todos os livros
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

// READ - Obter um livro pelo ID
app.get('/Library/books/:id', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Library');
        const collection = database.collection('books');
        const book = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

// UPDATE - Atualizar um livro pelo ID
app.put('/Library/books/:id', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Library');
        const collection = database.collection('books');
        const result = await collection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        if (result.matchedCount > 0) {
            res.status(200).json({ message: 'Book updated' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

// DELETE - Deletar um livro pelo ID
app.delete('/Library/books/:id', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Library');
        const collection = database.collection('books');
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Book deleted' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
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