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
    db.query('SELECT products.name, items.price, items.stocklevel, products.image FROM products INNER JOIN items ON items.product_id=products.product_id;', (err, results) => {
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
      const products = await getProducts();
      res.json(products)
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

  app.post('/api/product-from-search', (req, res) => {
    const valueArr = req.body.valueArr;
    
    if (valueArr.length > 0){
      const sql =
      `SELECT products.name, products.image, items.item_id, items.product_id, items.price, items.stocklevel FROM products INNER JOIN items ON items.product_id=products.product_id WHERE name LIKE "%${valueArr[0]}%" OR name LIKE "%${valueArr[1]}%";`
      return db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
      })
    }

    const sql =
    `SELECT products.name, products.image, items.item_id, items.product_id, items.price, items.stocklevel FROM products INNER JOIN items ON items.product_id=products.product_id WHERE name LIKE "%${valueArr[0]}%";`
    
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results)
    })
  })

  app.post('/api/product-to-view', (req, res) => {
    const id = req.body.id
    
    if(id) {
      const sql = `SELECT * FROM products INNER JOIN items ON items.product_id=products.product_id WHERE items.product_id = ${id}`

      return db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
      })
    }
    return null;

  })
}