const express = require('express');
const router = express.Router();
const path = require('path');

const { ageAuthenticator, sessionMiddleware } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
    let message = req.session.message || null;
    req.session.message = null; // ensures message is displayed for only once

    req.session.save(() => {
        res.render('index', { message });
    })
})

router.post('/check-age', ageAuthenticator, (req, res) => {
    req.session.Verified = true;
    req.session.message = null;

    req.session.save(() => {
        res.redirect('/services');
    })

})
router.get('/blocked', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'denied.html'));
})
router.get('/services', sessionMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'services.html'));
})
module.exports = router;
