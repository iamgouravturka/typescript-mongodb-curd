import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';

import productRoute from './routes/product';
import userRoute from './routes/user';
import ratingRoute from './routes/rating';
import favoriteRoute from './routes/favorite';

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

// Connection for mongo db
const uri: string = process.env.MONGO;

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Connecting to MONGO`);
  }
});

const PORT: number = parseInt(process.env.Port as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));

// Routes
const mainRouter = express.Router();

mainRouter.use("/product", productRoute);
mainRouter.use("/user", userRoute);
mainRouter.use("/rating", ratingRoute);
mainRouter.use("/favorite", favoriteRoute)

app.use("/api", mainRouter);