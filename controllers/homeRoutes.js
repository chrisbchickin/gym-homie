const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] }
          });
      
          const user = userData.get({ plain: true });
      
          res.render('profile', {
            ...user,
            logged_in: true
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
