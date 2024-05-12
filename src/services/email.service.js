const { TicketRepository } = require('../repositories')
const { Mailer } = require("../config")

const ticketRepository = new TicketRepository();

async function sendEmail(mailFrom, mailTo, subject, text) {
    try {
        const response = await Mailer.sendEmail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: text
        })
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data) {
    try {
        const response = await ticketRepository.create(data)
        // console.log(response)
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails() {
    try {
        const response = await ticketRepository.getPendingTickets();
        return response;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails
}