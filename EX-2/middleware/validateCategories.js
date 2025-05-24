import { categories } from '../models/data.js';

export const validateCategoryBody = (req, res, next) => {
    if (!req.body.name?.trim()) {
        return res.status(400).json({ error: "Name is required" });
    }
    next();
};

export const validateCategoryId = (req, res, next) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ error: "Category not found" });
    req.category = category;
    next();
};