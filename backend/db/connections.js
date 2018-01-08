const mongoose = require('./models/artist')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/vibed')
}

mongoose.Promise = Promise

module.exports = mongoose
