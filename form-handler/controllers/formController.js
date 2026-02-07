const transporter = require('../config/mailer');

async function sendForm(req, res) {
    try {
        const { name, email, message } = req.body;

        await transporter.sendMail({
            from: `Form Handler ${process.env.EMAIL_USER}`,
            subject:`New Form Submission`,
            to: email,
            html: message
        });

        req.session.formSubmitted = true;
        res.status(302).redirect('/success');
    } catch (err) {
        console.error(err);
        res.status(500).redirect('/failed');
    }
}
module.exports = sendForm;