const express=require('express');
const router = express.Router();
const {getStoredItems,getStoredItemsById,createStoredItems,updateStoredItems,editStoredItems,deleteStoredItems} = require('../controllers/inventoryController');


router.get('/', getStoredItems);
router.get('/:id', getStoredItemsById);
router.post('/', createStoredItems);
router.put('/:id', updateStoredItems);
router.patch('/:id', editStoredItems);
router.delete('/:id', deleteStoredItems);

module.exports = router;