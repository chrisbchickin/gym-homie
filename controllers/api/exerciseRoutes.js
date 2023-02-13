const router = require('express').Router();
const { Exercise } = require('../../models');

router.get('/:category_id', async (req,res) => {
    try{
        const allExerciseByCategory = await Exercise.findAll({where: {category_id: req.params.category_id}});
        res.status(200).json(allExerciseByCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/', async (req, res) => {
   try{
    const newExercise = await Exercise.create(req.body);
    res.status(200).json(newExercise);
   } catch (err) {
    res.status(500).json(err);
   };
});

module.exports = router;