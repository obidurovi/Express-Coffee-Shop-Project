const express = require('express');
const { homePage, aboutPage, contactPage, reservationPage, servicePage, testimonialPage } = require('../controllers/pageController');
const { bookDone } = require('../controllers/helperController');

// Init Router 
const router = express.Router();

router.get('/', homePage);

router.get('/about', aboutPage);

router.get('/contact', contactPage);

router.get('/reservation', reservationPage);

router.get('/service', servicePage);

router.get('/testimonial', testimonialPage);

router.post('/confirm', bookDone);


module.exports = router;