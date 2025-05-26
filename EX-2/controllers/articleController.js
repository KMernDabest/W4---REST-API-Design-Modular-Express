import { articles, journalists, categories } from '../models/data.js';

export const getArticles = (req, res) => {
    let filtered = [...articles];
    
    if (req.query.journalist) {
        filtered = filtered.filter(a => a.journalistId === parseInt(req.query.journalist));
    }

    if (req.query.category) {
        filtered = filtered.filter(a => a.categoryId === parseInt(req.query.category));
    }
    
    if (req.query.sort === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    res.json(filtered);
};

export const getArticle = (req, res) => res.json(req.article);

export const createArticle = (req, res) => {
    const newArticle = {
        id: Math.max(...articles.map(a => a.id)) + 1,
        ...req.body,
        journalistId: parseInt(req.body.journalistId),
        categoryId: parseInt(req.body.categoryId)
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    req.article.title = req.body.title || req.article.title;
    req.article.content = req.body.content || req.article.content;
    req.article.journalistId = req.body.journalistId !== undefined
        ? parseInt(req.body.journalistId)
        : req.article.journalistId;
    req.article.categoryId = req.body.categoryId !== undefined
        ? parseInt(req.body.categoryId)
        : req.article.categoryId;
    res.json(req.article);
};

export const deleteArticle = (req, res) => {
    const index = articles.findIndex(a => a.id === req.article.id);
    articles.splice(index, 1);
    res.status(204).send();
};