require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./index');

mongoose.connect(process.env.DB, (err)=>{
    if (err) {
        console.log(`Error Potato: ${err}`);
    } else {
        console.log(`Connected to Mongo`);
    }
});

app.set('port', process.env.PORT || 7777);

app.listen(process.env.PORT, () =>{
    console.log(`Server running on Port ?`);
});