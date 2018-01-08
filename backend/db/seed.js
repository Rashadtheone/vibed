const mongoose = require('./connections')
const seeds = require('./seedData')

const Artist = mongoose.model('artist')

Artist.remove({})
.then(_ => {
  console.log('dropped DB')

  Artist.collection.insert(seeds)
  .then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
