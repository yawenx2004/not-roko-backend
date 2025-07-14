import express from 'express';
import mongoose from 'mongoose';
import PostRouter from './routes/postRoutes.js';

const app = express();
const port = 1334;
const MONGO_URI = 'mongodb+srv://jonah:dev@cluster0.zjfrrsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// API endpoints
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello! Welcome to the project API.');
});

// mounted routes
app.use('/posts', PostRouter);

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB!');
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}...`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB');
})
