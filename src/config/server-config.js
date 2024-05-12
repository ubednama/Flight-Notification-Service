const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_PASS: process.env.DB_PASS,
    ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL,
    ETHEREAL_PASS: process.env.ETHEREAL_PASS,
    RECEIVER_TEMP_MAIL: process.env.RECEIVER_TEMP_MAIL
}