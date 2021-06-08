const express = require('express')
const app = express()

const nodemailer = require('nodemailer')
require('dotenv').config()
app.use(express.json())

let transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
})


app.post('/mail-me', async (req, res) => {
  const { fullname, sender, subject, message } = req.body

  try {
    await transporter.sendMail({
      from: sender,
      to: process.env.MY_MAIL,
      subject: `${fullname}: ${subject}`,
      html: `<h3>${sender}</h3><p>${message}</p>`,
    })
    res.status(200).json({message:"email sended"})
  } catch (error) {
    res.status(404).json({ error: 'somethink went wrong!' })
  }
})

module.exports = app
