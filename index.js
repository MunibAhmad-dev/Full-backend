import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './src/db/db.js';



connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("api is running")
})

// Add after middleware
import userRoutes from './src/routes/userRoute.js';

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on ${PORT}`));
