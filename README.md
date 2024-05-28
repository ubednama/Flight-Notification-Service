# Flight Notification Service
The Flight Notification Service is designed to automatically send email notifications regarding flight updates. It leverages RabbitMQ for message queuing and Nodemailer for sending emails. This ensures that the system is robust, scalable, and efficient in handling email notifications.

### Tech Used
- Node.js
- RabbitMQ
- Nodemailer

## Installation
Setup .env file and run the project with other microservices

## Usage
Ensure RabbitMQ is running. You can start RabbitMQ using the following command:

```bash
rabbitmq-server
```


#### Example Email Message
The email message should be a JSON object with the following structure:

```json
{
  "from": "mailFrom@example.com"
  "to": "recipient@example.com",
  "subject": "Flight Update",
  "text": "Your flight has been updated."
}
```
