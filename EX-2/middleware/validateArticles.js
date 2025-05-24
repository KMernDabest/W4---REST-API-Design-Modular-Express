import { articles, journalists, categories } from '../models/data.js';

export const validateArticleBody = (req, res, next) => {
    console.log('journalistId in body:', req.body.journalistId, typeof req.body.journalistId);
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ error: "Request body is required and must be JSON" });
    }
    if (!req.body.title?.trim() || !req.body.content?.trim()) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    if (!journalists.some(j => j.id === parseInt(req.body.journalistId))) {
        return res.status(400).json({ error: "Invalid journalist ID" });
    }
    if (!categories.some(c => c.id === parseInt(req.body.categoryId))) {
        return res.status(400).json({ error: "Invalid category ID" });
    }
    next();
};

export const validateArticleId = (req, res, next) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ error: "Article not found" });
    req.article = article;
    next();
};