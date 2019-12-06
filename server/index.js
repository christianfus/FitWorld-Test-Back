const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database')

//SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//ROUTES
app.use('/api/users',require('./routes/user.routes'));

//START SERVER
app.listen(app.get('port'), ()=>{
    console.log('Hi from', app.get('port')); 
});