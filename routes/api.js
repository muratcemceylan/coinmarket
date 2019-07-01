const express = require('express');

const CoinController = require('../controllers/coins');

const router = express.Router();

router.get('/api', CoinController.getPosts);


module.exports = router;
