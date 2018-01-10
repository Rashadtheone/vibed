const mongoose = require('./models/artist')

//If the application isn't in production phase, then it'll default to the local host assignments. 
mongoose.Promise = Promise

const mongoURI = 'mongodb://localhost/vibed'
const MLAB_URL = 'mongodb://admin:admin@ds249737.mlab.com:49737/vibed'
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect(mongoURI, {useMongoClient: true})
  .then(connection => console.log('all systems lit'))
  .catch(connectionerror => console.log('connection failed!'))
}

module.exports = mongoose
