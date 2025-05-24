import { journalists, articles } from '../models/data.js';

export const getJournalists = (req, res) => res.json(journalists);

export const getJournalist = (req, res) => res.json(req.journalist);

export const createJournalist = (req, res) => {
    const newJournalist = {
        id: Math.max(...journalists.map(j => j.id)) + 1,
        ...req.body
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    req.journalist.name = req.body.name || req.journalist.name;
    req.journalist.email = req.body.email || req.journalist.email;
    res.json(req.journalist);
};

export const deleteJournalist = (req, res) => {
    const index = journalists.findIndex(j => j.id === req.journalist.id);
    journalists.splice(index, 1);
    res.status(204).send();
};

export const getJournalistArticles = (req, res) => {
    res.json(articles.filter(a => a.journalistId === req.journalist.id));
};