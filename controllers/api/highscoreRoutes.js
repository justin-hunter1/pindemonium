const router = require('express').Router();
const { Highscore, } = require('../../models');
const withAuth = require('../../utils/auth');

//route to create a new high score
router.post('/', withAuth, async (req, res) => {
    try {
        const newHighscore = await Highscore.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newHighscore);
    } catch (err) {
        res.status(400).json(err);
    }
});

//route to edit a high score
router.put('/:mid', withAuth, async (req, res) => {
    try {
        const updatedHighscore = await Highscore.update(
        {
            score: req.body.score,
            uid: req.session.user_id,
        },
        {
            where: {
                mid: req.params.mid,
            }
        })
        res.status(200).json(updatedHighscore);
    } catch (err) {
        res.status(500).json(err)
    }
});

//route to delete a high score
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const highscoreData = await Highscore.destroy({
            where: {
                id: req.params.id,
                uid: req.session.user_id
            },
        });

        if(!highscoreData) {
            res.status(404).json({ message: 'No high score with this id!'});
            return;
        }

        res.status(200).json(highscoreData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;