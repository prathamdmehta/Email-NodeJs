const nodemailer = require('nodemailer');

async function sendMail(){
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'your@gmail.com',
            pass: '2-step verification generated password'
        }
    })

    const mailOptions = {
        from:'your@gmail.com',
        to: 'whom-to-send@gmail.com',
        subject: 'Welcome to NodeJS App',
        text: 'This is an email using nodemail in nodejs',
    }

    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}

sendMail()