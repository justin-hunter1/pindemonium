const router = require('express').Router();
const userRoutes = require('./userRoutes');
const machineRoutes = require('./machineRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/machines', machineRoutes);
router.use('/comments', commentRoutes);

module.exports = router;