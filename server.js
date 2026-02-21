import express from 'express';
import connectDB from './config/db.js';

// Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

connectDB();
const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.use('/api', authRouter);
app.use('/api', taskRouter)

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
