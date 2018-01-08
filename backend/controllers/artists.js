const express = require('express')
const router = express.Router()

const mongoose = require('../db/connections')

const Artist = mongoose.model('artist')

router.get('/', (req, res) => {
  Artist
    .find({})
    .then(artists => res.json(artists))
})
router.get('/', (req, res) => {
  Artist
    .findOne({name: req.params.name})
    .then(artists => res.json(artists))
})
router.post('/', (req, res) => {
  Artist
    .create(req.body)
    .then(() => {
      Artist
        .find()
        .then(artists => res.json(artists))
    })
})
router.put('/:artistsId', (req, res) => {
  Artist
    .findOneandUpdate({_id: req.params.artistsID}, req.body)
    .then(() => {
      Artist
    .find()
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
