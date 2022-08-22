const express = require('express')
const app = express();
const port = 4000;
require('./db/conn');
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const autRouter = require("./router/auto.routes");
app.use("/event",autRouter);

const contactRouter = require('./router/contect.routes');
app.use('/contact',contactRouter);

const ticketRouter = require('./router/ticket.routes');
app.use('/ticket',ticketRouter);

const ragistrationRouter = require('./router/ragistration.routes');
app.use('/ragistration',ragistrationRouter);

app.listen(port,()=>{
    console.log(`server running on port:${port}`);
});