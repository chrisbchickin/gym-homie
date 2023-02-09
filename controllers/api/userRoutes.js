const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.json({
            route: 'userRoute',
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;