//Conexion a Postgres
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "coinChallenge",
  password: "12345678",
  port: 5432,
});

const getCoins = async (req, res) => {
  const response = await pool.query("SELECT * FROM coins");
  res.status(200).json(response.rows);
};

const getCoinsById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM coins WHERE id = $1", [id]);
  res.json(response.rows);
};

const getRegisterPortfolio = async (req, res) => {
  const response = await pool.query("SELECT * FROM register_portfolio");
  res.status(200).json(response.rows);
};

const createRegisterPortfolio = async (req, res) => {
  const { price, coin, amount, money } = req.body;
  const response = await pool.query(
    "INSERT INTO register_portfolio (price, coin_name, amount_coins, used_money)  VALUES ($1, $2, $3, $4) RETURNING *",
    [price, coin, amount, money]
  );
  console.log(response);

  res.json({
    message: "Register Portfolio added successfully",
    body: {
      coin: { price, coin, amount, money },
    },
  });
};

const updateRegisterPortfolio = async (req, res) => {
  const id = req.params.id;
  const { price, amount } = req.body;
  const response = await pool.query(
    "UPDATE register_portfolio SET price = $1, amount_coins = $2  WHERE id = $3",
    [price, amount, id]
  );
  console.log(response);
  res.json("Register Portfolio Updated successfully");
};

const deleteRegisterPortfolio = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(
    " DELETE FROM register_portfolio WHERE id = $1",
    [id]
  );
  console.log(response);
  res.json(`Register Portfolio ${id} deleted successfully`);
};

module.exports = {
  getCoins,
  getCoinsById,
  getRegisterPortfolio,
  createRegisterPortfolio,
  updateRegisterPortfolio,
  deleteRegisterPortfolio,
};
