import { journalists } from '../models/data.js';

export const validateJournalistBody = (req, res, next) => {
    if (!req.body.name?.trim() || !req.body.email?.trim()) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    next();
};

export const validateJournalistId = (req, res, next) => {
    const journalist = journalists.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });
    req.journalist = journalist;
    next();
};