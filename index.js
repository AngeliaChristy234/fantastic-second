const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser())

require('./routes/product-routes')(app);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))