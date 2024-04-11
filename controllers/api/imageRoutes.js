const router = require('express').Router();
const { Image, Machine } = require('../../models');
const withAuth = require('../..utils/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', withAuth, upload.single('highscore'), async (req, res, next) => {
    try{
        const newImage = await Image.create({
            ...req.file,
            ...req.body,
        });
        res.status(200)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const imageData = await Image.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if(!imageData) {
            res.status(404).json({ message: 'No image with this id!' });
            return;
        }

        res.status(200).json(imageData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;