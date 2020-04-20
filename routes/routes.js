const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages', 'index.html'))
});
router.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages', 'about.html'))
});
router.get('/portfolio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages', 'portfolio.html'))
});
router.get('/contacts', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages', 'contacts.html'))
});

module.exports = router;