const express = require('express');
const router = express.Router();
const path = require('path');

const { ageAuthenticator, sessionMiddleware } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'index.html'));
})

router.post('/check-age', ageAuthenticator, (req, res) => {
    req.session.Verified = true;
    res.redirect('/services');
})
router.get('/blocked', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'denied.html'));
})
router.get('/services', sessionMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'services.html'));
})
module.exports = router;
