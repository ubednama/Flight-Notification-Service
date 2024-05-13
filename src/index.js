const express = require('express');
const amqplib = require('amqplib')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { EmailService } = require('./services');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.use('/api', apiRoutes);

async function connectQueue() {
    try {
        const connection = await amqplib.connect("amqp://localhost");
        const channel = await connection.createChannel();
        await channel.assertQueue("noti-queue");
        channel.consume("noti-queue", async (data) => {
            const object = JSON.parse(`${Buffer.from(data.content)}`)
            await EmailService.sendEmail(ServerConfig.ETHEREAL_EMAIL, object.recepientEmail, object.subject, object.text);
            channel.ack(data);
        })
    } catch (error) {
        console.log(error)
    }
}

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectQueue();
    console.log("queue is up")
});