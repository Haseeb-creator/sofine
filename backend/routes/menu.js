const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const { protect } = require('../middleware/auth');

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Public
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Create a menu item
// @route   POST /api/menu
// @access  Private/Admin
router.post('/', protect, async (req, res) => {
  try {
    const createdItem = await MenuItem.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    });

    res.status(201).json(createdItem);
  } catch (error) {
    res.status(400).json({ message: 'Invalid menu item data' });
  }
});

// @desc    Update a menu item
// @route   PUT /api/menu/:id
// @access  Private/Admin
router.put('/:id', protect, async (req, res) => {
  try {
    const menuItem = await MenuItem.findByPk(req.params.id);

    if (menuItem) {
      await menuItem.update({
        name: req.body.name || menuItem.name,
        category: req.body.category || menuItem.category,
        description: req.body.description || menuItem.description,
        price: req.body.price || menuItem.price,
        image: req.body.image || menuItem.image
      });
      res.json(menuItem);
    } else {
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data or ID' });
  }
});

// @desc    Delete a menu item
// @route   DELETE /api/menu/:id
// @access  Private/Admin
router.delete('/:id', protect, async (req, res) => {
  try {
    const menuItem = await MenuItem.findByPk(req.params.id);
    if (menuItem) {
      await menuItem.destroy();
      res.json({ message: 'Menu item removed' });
    } else {
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error deleting item' });
  }
});

module.exports = router;
