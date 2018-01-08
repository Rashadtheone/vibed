const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
  name: String,
  links: {
    soundcloud: String,
    youtube: String,
    itunes: String,
    spotify: String,
    tidal: String
  },
  sociallinks: [
    {
      twitter: String,
      instagram: String,
      snapchat: String,
      facebook: String
    }
  ],
  ratings: [
    {
      flow: Number,
      delivery: Number,
      style: Number,
      visuals: Number,
      unique: Number
    }
  ],
  article: String,
  comments: [
    {
      commenter: String,
      rating: Number
    }
  ]
})

mongoose.model('artist', ArtistSchema)

module.exports = mongoose
