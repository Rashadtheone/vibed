const express = require('express')
const router = express.Router()

const mongoose = require('../db/connections')
// const frontEnd = require('../frontend/index.html')
const Artist = mongoose.model('artist')

router.get('/', (req, res) => {
  Artist
    .find({})
    .then(artists => res.json(artists))
    // .then(homePage => res.render(frontEnd))
})

router.get('/', (req, res) => {
  Artist
    .findOne({name: req.params.name})
    .then(artists => res.json(artists))
})

router.post('/', (req, res) => {
  console.log(req.body.Artist)
  Artist
    .create(req.body)
    .then(() => {
      Artist
        .find({})
        .then(artists => res.json(artists))
    })
})

router.put('/:artistsId', (req, res) => {
  Artist
    .findOneAndUpdate({_id: req.params.artistsId}, req.body)
    .then(() => {
      Artist
    .find({})
    .then(artists => res.json(artists))
    })
})
router.delete('/:artistsId', (req, res) => {
  Artist
    .findOneAndRemove({_id: req.params.artistsId})
    .then(() => {
      Artist
        .find()
        .then(artists => res.json(artists))
    })
})
module.exports = router
