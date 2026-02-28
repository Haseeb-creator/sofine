const express = require('express');
const router = express.Router();
const ContentBlock = require('../models/ContentBlock');
const { protect } = require('../middleware/auth');

// @desc    Get all content blocks
// @route   GET /api/content
// @access  Public
router.get('/', async (req, res) => {
  try {
    const contentBlocks = await ContentBlock.findAll();
    
    // Transform array into an accessible key-value object map
    const contentMap = {};
    contentBlocks.forEach(block => {
      contentMap[block.section] = block.payload;
    });

    res.json(contentMap);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Get specific content block
// @route   GET /api/content/:section
// @access  Public
router.get('/:section', async (req, res) => {
  try {
    const block = await ContentBlock.findOne({ where: { section: req.params.section } });
    if (block) res.json(block.payload);
    else res.status(404).json({ message: 'Section not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Create or update a content block
// @route   POST /api/content/:section
// @access  Private/Admin
router.post('/:section', protect, async (req, res) => {
  try {
    const { section } = req.params;
    const payload = req.body;

    let block = await ContentBlock.findOne({ where: { section } });

    if (block) {
      block.payload = payload;
      await block.save();
    } else {
      block = await ContentBlock.create({ section, payload });
    }

    res.json(block);
  } catch (error) {
    res.status(400).json({ message: 'Invalid content data' });
  }
});

module.exports = router;
