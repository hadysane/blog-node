const app = require('./app')

const dotenv = require('dotenv')
const mongoose = require('mongoose')

//Env config
dotenv.config()

const port = process.env.PORT || 3000

//CONNECT TO MONGODB
let MONGODB = process.env.MONGODB_DATABASE_URL.replace('<PASSWORD>', process.env.MONGODB_PASSWORD)
MONGODB = MONGODB.replace('<USERNAME>', process.env.MONGODB_USERNAME)


// mongoose.connect
mongoose.connect(MONGODB).then(() => console.log('DB connection successfully ✅.'))

// Server
app.listen(port, () => console.log(`listening on port ${port} 🏁`));