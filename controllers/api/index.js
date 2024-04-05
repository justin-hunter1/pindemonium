const router = require('express').Router();
const userRoutes = require('./userRoutes');
const machineRoutes = require('./machineRoutes');
const commentRoutes = require('./commentRoutes');
const highScoreRoutes = require('./highscoreRoutes');

router.use('/users', userRoutes);
router.use('/machines', machineRoutes);
router.use('/comments', commentRoutes);
router.use('/highscore', highScoreRoutes);

module.exports = router;