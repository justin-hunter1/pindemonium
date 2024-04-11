const router = require('express').Router();
const { Machine, Highscore, Image, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// insert get route(s) for the homepage
router.get('/', async (req, res) => {
    try{
        const machineData = await Machine.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Image,
                    attributes: ['Image'],
                },
                {
                    model: Comment,
                    attributes: ['comment'],
                }
            ],
        });

        const machines = machineData.map((machine) => machine.get({ plain: true }));

        res.render('homepage', {
            machines,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

router.get('/machine/:id', async (req, res) => {
    try{
        const machineData = await Machine.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Image,
                    attributes: ['Image'],
                },
                {
                    model: Comment,
                    attributes: ['comment'],
                }
            ],
        });

        const machine = machineData.get({ plain: true })
        res.render('machine', {
            ...machine,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{ model: Machine }, { model: Highscore }]
        });
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
})

module.exports = router;