const express = require("express");

const bodyParser = require("body-parser");
const { sendBasicMail } = require("./Services/email-service");
const TicketController=require('./controller/ticket-controller')
const { PORT } = require("./config/ServerConfig");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/v1/tickets',TicketController.create)
  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
    
    
    // sendBasicMail(
    //   "anurajsinghparmar10@gmail.com",
    //   "anurajsinghparmar10@gmail.com",
    //   "This is a testing mail",
    //   "Hey, How are you, I hope you like the support"
    // );
  });
};

setupAndStartServer();
