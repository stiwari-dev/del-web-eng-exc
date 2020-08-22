const furnituresList = require('../mock-data/furnitures-list');

exports.getFurnitures = (req, res, next) => {
    res.status(200).json(furnituresList);
};