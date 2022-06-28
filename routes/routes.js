const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' })
});

router.get('/add', (req, res) => {
    res.render('add-users', { title: 'Add New User' })
})

module.exports = router;