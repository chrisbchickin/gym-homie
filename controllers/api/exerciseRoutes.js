const router = require('express').Router();
const { Exercise } = require('../../models');

router.post('/', async (req, res) => {
    const newExercise = await Exercise.create(req.body);
});

module.exports = router;