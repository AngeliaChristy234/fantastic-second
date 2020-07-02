const { resolve } = require('upath');
const { rejects } = require('assert');

// GET CATEGORIES
const getCategories = async (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM categories', (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

const getSubCategories = async (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM categories_sub', (err, results) => {
      if(err) {
        return reject;
      }
      resolve(results);
    })
  })
}

module.exports = (app, db) => {
  app.get('/api/categories', async (req, res) => {
    try {
      const categories = await getCategories(db);
      res.json(categories)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  }),

  app.get('/api/categories_sub', async (req, res) => {
    try {
      const categories = await getSubCategories(db);
      res.json(categories)
    } catch (e) {
      console.log(e);
      res.sendStatus(500)
    }
  }),

  // Add categories
  app.post('/api/add_categories', async(req, res) => {
    var body = req.body;

    const data = {
      name: body.name
    }
    
    const sql = 'INSERT INTO categories SET ?'
  
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      res.send(results)
    })
  })

  // Add sub categories
  app.post('/api/add_categories_sub', async(req, res) => {
    var body = req.body;

    const data = {
      name: body.name,
      category_id: body.category_id
    }
    
    const sql = 'INSERT INTO categories_sub SET ?'
  
    db.query(sql, data, (err, results) => {
      if (err) throw err;
      res.send(results)
    })
  }),

  // Delete categories
  app.post('/api/delete_categories', (req, res) => {
    const data = req.body.id;
    
    const sql = `DELETE FROM categories WHERE id = ${data}`
    const sql2 = `
      UPDATE products p
      INNER JOIN categories_sub cs
      SET p.category_sub_id = NULL 
      WHERE cs.category_id = ${data}
    `
    const sql3 = `UPDATE categories_sub SET category_id = NULL WHERE category_id = ${data}`

    db.query(sql, (err, results) => {
      if (err) throw err;
      
      db.query(sql2, (err, results) => {
        if (err) throw err;
        
        db.query(sql3, (err, results) => {
          if (err) throw err;
          res.send(results)
        })
      })
    })
  })
  
  // Delete subcategories
  app.post('/api/delete_categories_sub', (req, res) => {
    const data = req.body.id;
    
    const sql = `DELETE FROM categories_sub WHERE id = ${data}`
    const sql2 = `UPDATE products SET category_sub_id = NULL WHERE category_sub_id = ${data}`

    db.query(sql, (err, results) => {
      if (err) throw err;

      db.query(sql2, (err, results) => {
        if (err) throw err;
        res.send(results)
      })
    })

  })

}