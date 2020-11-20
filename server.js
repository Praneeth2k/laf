import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import config from 'config'
 
import lost from './routes/lost.js'
import found from './routes/found.js'
import signup from './routes/signup.js'
import login from './routes/login.js'
// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = config.get('mongoURI')
// Middlewares
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// Use routes
app.use('/lost', lost)

app.use('/found', found)

app.use('/signup', signup)

app.use('/login', login)

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Is math related to science?!!'))


app.post('/signup')


// Listener
app.listen(port, ()=>console.log(`listening on localhost: ${port}`));