const { Router } = require("express");
const router = Router();

const {
  getCoins,
  getCoinsById,
  createRegisterPortfolio,
  getRegisterPortfolio,
  updateRegisterPortfolio,
  deleteRegisterPortfolio,
} = require("../controllers/index.controllers");

router.get("/coins", getCoins);

router.get("/coins/:id", getCoinsById);

router.get("/registerPortfolio", getRegisterPortfolio);

router.post("/registerPortfolio", createRegisterPortfolio);

router.put("/registerPortfolio/:id", updateRegisterPortfolio);

router.delete("/registerPortfolio/:id", deleteRegisterPortfolio);

module.exports = router;
