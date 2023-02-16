const router = require('express').Router();
const { Exercise } = require('../../models');

router.get('/', async (req,res) => {
    try{
        const allExerciseByCategory = await Exercise.findAll();
        res.status(200).json(allExerciseByCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
   try{
    console.log(`Got the whole thing right here: ${JSON.stringify(req.body)}`);
    const newExercise = await Exercise.create({
        exercise_name: req.body.exerciseName,
        category_id: req.body.categoryID,
        reps: req.body.exerciseReps,
        weights: req.body.exerciseWeight,
        duration: req.body.exerciseDuration,
        date: new Date(),
        user_id: req.session.user_id,
    });
    console.log(newExercise);
    res.status(200).json(newExercise);
   } catch (err) {
    console.log(`Hm what ${JSON.stringify(err)}`);
    res.status(400).json(err);
   };
});

router.delete('/:id', async (req,res) => {
    try{
        const exerciseDeleted = await Exercise.destroy({where: {id: req.params.id}});
        res.status(200).json(exerciseDeleted);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;