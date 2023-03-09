import  express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js'
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";


dotenv.config();
const app = express ();

app.use(cors());
app.use(express.json({ limit:'50mb' }));


app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req,res) => {
    res.send('hello from server')
})
const URL = process.env.MONGO_URL
const startServer = async () => {
    try {
        connectDB(URL)
        app.listen(8080, () => console.log('server has started on port port 8080'))
    } catch (error) {
        console.log(error)
    }
 
}
startServer();