const express = require('express');

const CoinController = require('../controllers/api');

const router = express.Router();

router.get('/api', CoinController.getPosts);


module.exports = router;
