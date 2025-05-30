const express = require('express');
const router = express.Router();
const Product = require('../schema/schema');


router.post('/goods', async (req, res) => {
  try {
      const { name, price, size } = req.body;
      const newGood = new Product({ name, price, size });
      const saved = await newGood.save();
      res.status(201).json(saved);
    } catch (err) {
    res.status(500).json({ error: err.message });
   }
});


router.get('/goods', async (req, res) => {
  try {
    const goods = await Product.find();
    res.json(goods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put('/goods/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Good not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete('/goods/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Good not found' });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
