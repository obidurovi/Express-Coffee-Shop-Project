// Booking Completed
const bookDone = (req, res) => {
    const { name, email, date, time } = req.body

    res.send(`Hi ${ name }, Your reservation email is ${ email }. Your Reservation Date is ${ date } and Time is ${ time }. Your Reservation is Confirmed`);
}




// Export Controller
module.exports = {bookDone};