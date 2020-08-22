const express = require('express');

const furnituresController = require('../controllers/furnitures.controller');

const furnituresRouter = express.Router();

furnituresRouter.get('/', furnituresController.getFurnitures);

module.exports = furnituresRouter;