const storedItems = require("../models/inventoryModel");

// GET - All item

const getStoredItems = (req, res) => {
  try {
    if (storedItems.length === 0) {
      return res.status(404).json({ message: "No Item's Found" });
    }
    res.status(200).json(storedItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//GET - Item By ID

const getStoredItemsById = (req, res) => {
  try {
    const storedItem = storedItems.find(s => s.id === parseInt(req.params.id));
    if (!storedItem) {
      return res.status(404).json({ message: "No Item Found" });
    }
    res.status(200).json(storedItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST - Add Item

const createStoredItems = (req, res) => {
  try {
    const { item, balance, price } = req.body;
    if (!item || !balance || !price) {
      return res
        .status(400)
        .json({ message: "item,balance and price are required" });
    }
    const newStoredItems = {
      id: storedItems.length ? storedItems[storedItems.length - 1].id + 1 : 1,
      item,
      balance,
      price,
    };
    storedItems.push(newStoredItems);
    res.status(201).json(newStoredItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// PUT - complete update  

const updateStoredItems=(req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const {item,balance,price}=req.body;

        if (!item || !balance || !price) {
      return res.status(400).json({ message: "item,balance and price are required" });
    }

    const storedItemsIndex = storedItems.findIndex(s => s.id === id);
    if (storedItemsIndex === -1) {
      return res.status(404).json({ message: "No Item found" });
    }

    storedItems[storedItemsIndex] = { id, item,balance,price };
    res.status(200).json(storedItems[storedItemsIndex]);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// PATCH - partial update

const editStoredItems = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { item,balance,price } = req.body;

    const storedItemsIndex = storedItems.findIndex(s => s.id === id);
    if (storedItemsIndex === -1) {
      return res.status(404).json({ message: "No item found" });
    }

    if (item) storedItems[storedItemsIndex].item = item;
    if (balance) storedItems[storedItemsIndex].balance = balance;
    if (price) storedItems[storedItemsIndex].price = price;

    res.status(200).json(storedItems[storedItemsIndex]);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE - remove item

const deleteStoredItems = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const storedItemsIndex = storedItems.findIndex(s => s.id === id);

    if (storedItemsIndex === -1) {
      return res.status(404).json({ message: "No item found" });
    }

    const deletedItem  = storedItems.splice(storedItemsIndex, 1);
    res.status(200).json({ message: "item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports={getStoredItems,getStoredItemsById,createStoredItems,updateStoredItems,editStoredItems,deleteStoredItems}
