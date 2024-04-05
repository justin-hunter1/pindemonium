const router = require('express').Router();
const { Machine, User, Highscore, Comment } = require('../../models');
const withAuth = require('../..utils/auth');

// make a post route to add a new machine
router.post('/', withAuth, async (req, res) => {
    try{
        const newMachine = await Machine.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newMachine);
    } catch (err) {
        res.status(400).json(err);
    }
});

//make a put route to edit a high score

//make a delete route to delete a machine

// make some other routes?

module.exports = router;