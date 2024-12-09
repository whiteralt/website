const express = require('express')
const app = express()
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(3000);