const express = require('express')
const app = express()

const nodemailer = require('nodemailer')

app.use(express.json())

// async..await is not allowed in global scope, must use a wrapper
async function main({sender,subject,message}) {
  let transporter = nodemailer.createTransport( {
    service: 'Gmail',
    auth: {
      user: 'pi.emree@gmail.com', // generated ethereal user
      pass: 'lftixyz1.', // generated ethereal password
    },
  })

  // send mail with defined transport object
  await transporter.sendMail({
    from:sender, // sender address
    to: 'xpokales@gmail.com', // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
  })
}

app.post('/mail-me', (req, res) => {
const {sender,subject,message}=req.body

  main({sender,subject,message})
    .then((result) => {
      console.log(result)
      res.status(200).json({ ok: 'message sonded' })
    })
    .catch((err) => {
      console.log(err)
      res.status(404).json({ err: 'ERROR' })
    })

  
})

module.exports = app
