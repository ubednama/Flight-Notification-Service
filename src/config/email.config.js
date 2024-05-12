const nodemailer = require("nodemailer");
const { ETHEREAL_EMAIL, ETHEREAL_PASS } = require("./server-config");

const mailSender = nodemailer.createTransport({
    service: 'ethereal',
    auth: {
        user: ETHEREAL_EMAIL,
        pass: ETHEREAL_PASS
    }
})

module.exports = mailSender