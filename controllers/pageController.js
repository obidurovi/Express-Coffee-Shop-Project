const path = require('path');

// Home Page Controller
const homePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

// about Page Controller
const aboutPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
}

// Contact Page Controller
const contactPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// Reservation Page Controller
const reservationPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/reservation.html'));
}

// Service Page Controller
const servicePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/service.html'));
}

// Testimonial Page Controller
const testimonialPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/testimonial.html'));
}





// Export Controller
module.exports = {
    homePage,
    aboutPage,
    contactPage,
    reservationPage,
    servicePage,
    testimonialPage
}