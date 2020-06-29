const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysqlCONFIG = require('./config/mysql-db').mysqlCONFIG

const db = mysql.createConnection(mysqlCONFIG)
db.connect((err) => {
  if(err) {
    console.log(err);
  }
  console.log('My SQL connected')
})

const app = express()
app.use(cors())
app.use(bodyParser())

require('./routes/product-routes')(app, db);
require('./routes/category-routes')(app, db);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))