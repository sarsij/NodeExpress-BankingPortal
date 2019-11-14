const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const accountsData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const usersData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');

const accounts = JSON.parse(accountsData);
const users = JSON.parse(usersData);
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => res.render('index', { title: 'Index' }));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts }));

app.listen(3000, () => console.log('PS Project running on port 3000!'));