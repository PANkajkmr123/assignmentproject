const express = require('express');
const app = express();

const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')



const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


mongoose.connect(`mongodb+srv://pankajKumar:PANkaj123%23@firstnodejs.ugerz.mongodb.net/newprojectdb?retryWrites=true&w=majority`, { useNewUrlParser: true }, (err, result) => {
  if (err) {
    console.log("Error in connecting with database")
  }
  else {
    console.log('Mongoose connecting is setup successfully')
  }
});





//==========================Request Console=======================//

app.all("*", (req, res, next) => {


  let obj = {
    Host: req.headers.host,
    ContentType: req.headers['content-type'],
    Url: req.originalUrl,
    Method: req.method,
    Query: req.query,
    Body: req.body,
    Parmas: req.params[0]
  }
  console.log("Common Request is===========>", [obj])
  next();
});

app.use('/admin/user', userRoute);


app.listen(3005, () => {
  console.log(`server listening on port 3005`);
})
