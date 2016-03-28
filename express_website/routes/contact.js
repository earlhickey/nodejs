var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req,res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pgroot@gmail.com',
            pass: ''
        }
    });

    var mailOptions = {
        from: 'pG <info@pg13.nl>',
        to: 'pgroot@gmail.com',
        subject: 'Website contact form',
        text: '',
        html: ''
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
