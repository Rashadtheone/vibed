const express = require('express')
const app = express()
const artistController = require('./controllers/artists')
const parser = require('body-parser')
const cors = require('cors')

app.use(cors())

const PORT = 7000

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

app.use('/vibed', artistController)

app.listen(PORT, () => console.log(`live on port ${PORT}`))
