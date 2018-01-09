const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
  name: String,
  img: String,
  soundcloud: String,
  youtube: String,
  itunes: String,
  spotify: String,
  tidal: String,
  twitter: String,
  instagram: String,
  snapchat: String,
  facebook: String,
  flow: Number,
  delivery: Number,
  style: Number,
  visuals: Number,
  unique: Number,
  article: String,
  commenter: String,
  rating: Number
})

mongoose.model('artist', ArtistSchema)

module.exports = mongoose
