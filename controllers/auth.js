const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('Welcome to login');
});

router.post('/login', (req, res) => {
    res.send("process login creds")
});

module.exports = router;