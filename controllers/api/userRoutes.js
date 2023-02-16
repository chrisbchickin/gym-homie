const router = require('express').Router();
const { User } = require('../../models');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gymhomies1234@gmail.com',
    pass: 'fqljuysmrcpwjezu'
  }
});

router.get('/', async (req, res) => {
    try {
        res.json({
            route: 'userRoute',
        })
    } catch (err) {
        res.status(500).json(err);
    }
}) 

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      console.log(req.body.email);

      const mailOptions = {
        from: 'gymhomies1234@gmail.com',
        to: `${req.body.email}`,
        subject: `Thank You for Joining GYM Homies ${req.body.user_name}`,
        text: 'Thank you for joining our workout tracker! We are excited to help you track your progress and achieve your fitness goals. With our easy-to-use tracker, you can monitor your workouts, set new goals, and track your progress towards a healthier, happier you.'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });
  
  router.post('/login', async (req, res) => {
    console.log(req.body.email);
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
        console.log("emailisuue")
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
      
      
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });

    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      res.render('homepage');
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;
