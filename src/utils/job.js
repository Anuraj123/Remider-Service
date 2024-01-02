const cron=require('node-cron')
const emailService=require('../Services/email-service')
const SetupJobs=()=>{
    cron.schedule('*/2 * * * *',async()=>{

const response=await emailService.fetchPendingEmails();
        console.log("running a task every 5 mins")
    })
}

module.exports=SetupJobs