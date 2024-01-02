const sender=require('../config/emailConfig')

const sendBasicMail=(mailFrom,mailTo,mailSubject,mailBody)=>{
try {
    sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
} catch (error) {
    console.log(error)
}
}

module.exports={
    sendBasicMail
}