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
            success: true,  // Success flag
            message: "Post saved successfully!",
            data: savedPost
        });
    } catch (err) {
        res.status(500).json({ 
            success: false,  // Failure flag
            message: err.message 
        });
    }
});

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find(); // Fetch all posts from the database
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific post by ID
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); // Find a post by its ID
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a post by ID
router.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category
            },
            { new: true } // Return the updated document
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json({
            message: "Post updated successfully!",
            data: updatedPost
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a post by ID
router.delete('/posts/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
