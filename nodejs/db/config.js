const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/e-comm', { useNewUrlParser: true, useUnifiedTopology: true,})
mongoose.connect('mongodb+srv://hapatidar:kmH8B1QMSm2Ryev9@cluster0.n0csc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true,})

.then(()=>console.log("db connected"))
.catch(()=>console.log("error"))

module.exports = mongoose