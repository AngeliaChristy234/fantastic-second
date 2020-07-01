const { resolve } = require('upath');
const { rejects } = require('assert');

const productsWithCat = 'SELECT p.product_id, p.name , p.image , p.tokopedia, p.category_sub_id, c.name as category, cs.name as subcat FROM products p INNER JOIN categories_sub cs ON p.category_sub_id = cs.id INNER JOIN categories c ON cs.category_id = c.id'

// GET PRODUCTS
const getProducts = async (db) => {
  return new Promise((resolve, reject) => {
    db.query( productsWithCat, (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

// GET LATEST PRODUCTS FOR HOME CARD
const getLatestProducts = async (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT products.product_id, products.name, items.price, items.stocklevel, products.image FROM products INNER JOIN items ON items.product_id=products.product_id;', (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

// GET ITEMS
const getItems = async (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items', (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

module.exports = (app, db) => {

  // Products with it's categories
  app.get('/api/products', async (req, res) => {
    try {
      const items = await getProducts(db);
      res.json(items)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  }),

  // Products with it's items, for card
  app.get('/api/products-latest', async (req, res) => {
    try {
      const products = await getLatestProducts(db);
      res.json(products)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  })

  // All Items
  app.get('/api/items', async (req, res) => {
    try {
      const items = await getItems(db);
      res.json(items)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  })

  // Product and Items for card
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

  // To get all attribute from products with its categories
  app.post('/api/product-from-name', (req, res) => {
    const name = req.body.name
    
    if(name.length>0) {
      const sql = `${productsWithCat} WHERE p.name LIKE "%${name[0]}%" OR p.name LIKE "%${name[1]}%"`

      return db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
      })
    }
    
    const sql = `${productsWithCat} WHERE p.name LIKE "%${name[0]}%"`

    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results)
    })
  })

  // Get product and items from ID
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

  app.post('/api/update-product', (req, res) => {
    const body = req.body

    const data = {
      name: body.name,
      category_sub_id: body.category_sub_id,
      image: body.image,
      tokopedia: body.tokopedia
    }

    const sql = `UPDATE products SET ? WHERE product_id = ${body.id}`

    db.query(sql, data, (err, results) => {
      if (err) throw err;
      res.send(results)
    })
  })
  
}