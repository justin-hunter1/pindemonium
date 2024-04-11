const router = require('express').Router();
const { Machine, User, Highscore, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// make a post route to add a new machine
router.post('/', withAuth, async (req, res) => {
    try{
        const newMachine = await Machine.create({
            ...req.body,
            uid: req.session.user_id,
        });

        res.status(200).json(newMachine);
    } catch (err) {
        res.status(400).json(err);
    }
});

//make a delete route to delete a machine
router.delete('/:id', withAuth, async (req, res) =>{
    try{
        const machineData = await Machine.destroy({
            where: {
                id: req.params.id,
                uid: req.session.user_id,
            },
        });

        if(!machineData) {
            res.status(404).json({ message: 'No machines with this id!'});
            return;
        }

        res.status(200).json(machineData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// make some other routes?

module.exports = router;