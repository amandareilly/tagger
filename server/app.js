const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();

const HabitController = require('./controllers/habitController');

app.use(bodyParser);

// Root URL
app.get('/', (req, res) => {
    res.status(200).send('ok');
})

// Habits Endpoints
app.get('/habits', HabitController.getAllHabits);
app.post('/habits', HabitController.createHabit);

module.exports = app;