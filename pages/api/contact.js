require("dotenv").config();


export default async function submitForm (req, res) {

    const password = process.env.password;
    const nodemailer = require("nodemailer");
    let error = null;
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user:"moyez.portfoliowebsite@gmail.com",
            pass:password
        },
        secure: true
    });

    const mailData = {
        from: "moyez.portfoliowebsite@gmail.com",
        to:"moyezrabbani.work@gmail.com",
        subject: `Portfolio Website: ${req.body.subject}`,
        text: "This is a test string",
        html: `<div>${req.body.msg}</div>`
    };

    transporter.sendMail(mailData, function(err, info) {
        if(err) {
            error=err;
            res.status(550).end();
            console.log(err)
        } else {
            console.log(info)
        }
    })
    
    res.status(200).end();
    console.log("Sent Successfully");
}