import express from 'express';
import cors from 'cors';
import router from './router.js';
const port = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

