const mysql = require('mysql')
const { resolve } = require('upath');
const { rejects } = require('assert');
const mysqlCONFIG = require('../config/mysql-db').mysqlCONFIG

const db = mysql.createConnection(mysqlCONFIG)
db.connect((err) => {
  if(err) {
    console.log(err);
  }
  console.log('My SQL connected')
})

// GET PRODUCTS
const getProducts = async () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products', (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

// GET ITEMS
const getItems = async () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items', (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

module.exports = (app) => {

  app.get('/api/products', async (req, res) => {
    try {
      const siswa = await getProducts();
      res.json(siswa)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  })

  app.get('/api/items', async (req, res) => {
    try {
      const siswa = await getItems();
      res.json(siswa)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  })

}