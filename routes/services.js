const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// GET all services
router.get('/', (req, res) => {
  Service.getAll((err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json(results);
  });
});

// POST create service
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ message: 'All fields required' });

  Service.create({ title, description }, (err, result) => {
    if (err) return res.status(500).json({ message: err });
    res.status(201).json({ message: 'Service created', id: result.insertId });
  });
});

// PUT update service
router.put('/:id', (req, res) => {
  const serviceId = req.params.id;
  const { title, description } = req.body;

  Service.getById(serviceId, (err, results) => {
    if (err) return res.status(500).json({ message: err });
    if (!results || results.length === 0) return res.status(404).json({ message: 'Service not found' });

    Service.update(serviceId, { title, description }, (err) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: 'Service updated' });
    });
  });
});

// DELETE service
router.delete('/:id', (req, res) => {
  const serviceId = req.params.id;

  Service.getById(serviceId, (err, results) => {
    if (err) return res.status(500).json({ message: err });
    if (!results || results.length === 0) return res.status(404).json({ message: 'Service not found' });

    Service.delete(serviceId, (err) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: 'Service deleted' });
    });
  });
});

module.exports = router;
