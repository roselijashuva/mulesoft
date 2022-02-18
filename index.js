const express = require('express')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3000


app.use(express.json())

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

const moviesRoutes = require('./routes/movies.routes')

app.get('/', (req, res) => {
    res.send('<center><h1> Mulesoft application running </h1></center>')
})


//// using movies routes as middleware
app.use('/api/movies',moviesRoutes)


mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`microservice running on port ${port}`)
        })
    }).catch((error) => {
        console.log(`${error} \n did not connect to database!` )
    })
