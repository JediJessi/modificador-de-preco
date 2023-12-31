require('dotenv').config()
const router = require('express').Router()
const cors = require('cors')
router.use(cors())
const mysql = require('mysql2/promise');

const executeQuery = async (query) => {
    const DB_USER = process.env.DB_USER
    const DB_PASS = encodeURIComponent(process.env.DB_PASS)

    const connection = await mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: DB_USER,
      password: DB_PASS,
      database: 'price',
    });
  
    try {
      const [results, fields] = await connection.query(query);
  
      if (Array.isArray(results)) {
        return results;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    } finally {
      await connection.end();
    }
  }

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM products';
        const result = await executeQuery(query);
  
        if (Array.isArray(result)) {
            res.json(result);
        } else {
            console.error('A consulta não retornou um resultado iterável');
            res.status(500).json({ error: 'Erro na consulta' });
        }
    } catch (error) {
      res.status(500).json({ error: 'Erro na consulta' });
    }
});


router.get('/packs', async (req, res) => {
  try {
      const query = 'SELECT * FROM packs';
      const result = await executeQuery(query);

      if (Array.isArray(result)) {
          res.json(result);
      } else {
          console.error('A consulta não retornou um resultado iterável');
          res.status(500).json({ error: 'Erro na consulta' });
      }
  } catch (error) {
    res.status(500).json({ error: 'Erro na consulta' });
  }
});

router.patch('/:productId', async (req, res) => {
    try {
        const code = req.body.code;
        const { name, cost_price, sales_price } = req.body;

        console.log(req.body.code)

        const updateQuery = `UPDATE products SET sales_price = ${sales_price} WHERE code = ${code}`;

        await executeQuery(updateQuery);
        res.json({ message: 'Produto atualizado com sucesso' });

    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro na atualização do produto' });
    }
});

module.exports = router