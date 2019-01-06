const Habit = require('../models/Habit');

class HabitController {
    static getAllHabits(req, res) {
        return Habit.find()
            .then((habits) => {
                if (habits) {
                    res.json({ habits: habits.map(habit => habit.serialize()) });
                } else {
                    res.json({ requests: false });
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Internal server error' });
            });
    }
    static createHabit(req, res) {
        Habit.create({
            shortName: req.body.shortName,
            longName: req.body.longName,
            description: req.body.description || null,
            completionsRequired: req.body.completionsRequired,
            completions: []
        })
          .then(habit => res.status(201).json(habit.serialize()))
          .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Internal server error." });
          });
    }
}

module.exports = HabitController;