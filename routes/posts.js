const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// Save post
router.post('/post/save', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    });

    try {
        const savedPost = await post.save();
        res.json({
            message: "Post saved successfully!",
            data: savedPost
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
