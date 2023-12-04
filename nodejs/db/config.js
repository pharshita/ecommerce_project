const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm', { useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>console.log("db connected"))
.catch(()=>console.log("error"))

module.exports = mongoose