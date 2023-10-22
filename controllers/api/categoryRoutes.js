// const router = require('express').Router();
// const { Category } = require('../../models');

// router.get('/', async (req,res) => {
//     try{
//         const categories = await Category.findAll();
//         res.status(200).json(categories);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const categoryId = await Category.findByPk(req.params.id, {
//             where: {id: req.params.id}
            
//         });
//         res.status(200).json(categoryId);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// module.exports = router;