const router = require('express').Router();
const { Category } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
        const categoryId = await Category.findByPk(req.params.id, {
            where: {id: req.params.id}
            
        });
        res.status(200).json(categoryId);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;