const express = require('express');
const router = express.Router();
const { db } = require('../db/');
const { posts } = require('../db/schema');
const { eq } = require('drizzle-orm');

// Criar um novo post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newPost = await db.insert(posts).values({ title, content }).returning();
    console.log(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Obter todos os posts
router.get('/', async (req, res) => {
  try {
    const allPosts = await db.select().from(posts);
    res.json(allPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Obter um post específico
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Buscar ID" , id);
    const post = await db.select().from(posts).where(eq(posts.id, id));

    if (post.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Atualizar um post
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const updatedPost = await db.update(posts)
      .set({ title, content })
      .where(eq(posts.id, id))
      .returning();

    if (updatedPost.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Deletar um post
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await db.delete(posts).where(eq(posts.id, id)).returning();

    if (deletedPost.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;