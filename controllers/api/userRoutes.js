const router = require('express').Router();
const { User, Password } = require('../../models');
const bcrypt = require('bcrypt');

// make a post route to '/' to create a new user
router.post('/', async (req, res) => {
    const t = await sequelize.transaction();
    try{
        const userData = await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
        }, { transaction: t });

        const passwordData = await Password.create({
            uid: userData.id,
            password: req.body.password,
        }, { transaction: t });

        await t.commit();

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        await t.rollback();
        console.log(err);
        res.status(400).json(err);
    }
});
// make a post route to '/login' to verify email and password for existing user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password' });
            return;
        }
        const passwordData = await Password.findOne({ where: { uid: userData.id } });
        if (!passwordData) {
            res.status(400).json({ message: 'Something went wrong'})
        }
        const validPassword = await bcrypt.compare(req.body.password, passwordData.password)

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: 'Welcome!' });
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

//make a post route to '/logout' to logout user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;