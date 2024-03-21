const express = require('express');
const routes = require('./routes/index.js');

const app = express();

routes(app);

app.get('/',(req,res) =>{
  res.status(200).json({message:'Servidor Sequelize'});
});


module.exports = app;
