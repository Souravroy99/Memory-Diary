import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './utils/db.js'
import postRouter from './routes/post.route.js'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use('/api', postRouter)

const PORT = process.env.PORT || 3001 

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    })
})
.catch((err) => {
    console.log(`Connection failed: ${err.message}`);
})