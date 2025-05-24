import express from 'express';
import { articles } from './models/data.js';
import articleRoute from './routes/articleRoute.js';
import journalistRoute from './routes/journalistRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import { logger } from './middleware/logger.js';

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.use(express.json());
app.use(logger);

app.use('/articles', articleRoute);
app.use('/journalists', journalistRoute);
app.use('/categories', categoryRoute);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});