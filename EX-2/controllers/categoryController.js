import { categories, articles } from '../models/data.js';

export const getCategories = (req, res) => res.json(categories);

export const getCategory = (req, res) => res.json(req.category);

export const createCategory = (req, res) => {
    const newCategory = {
        id: Math.max(...categories.map(c => c.id)) + 1,
        ...req.body
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
    req.category.name = req.body.name || req.category.name;
    res.json(req.category);
};

export const deleteCategory = (req, res) => {
    const index = categories.findIndex(c => c.id === req.category.id);
    categories.splice(index, 1);
    res.status(204).send();
};

export const getCategoryArticles = (req, res) => {
    res.json(articles.filter(a => a.categoryId === req.category.id));
};