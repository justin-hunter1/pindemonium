const router = require('express').Router();
const { Machine, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// make route to post comment to machine by id
router.post('/', withAuth, async (req, res) => {
    try{
        const newComment = await Comment.create({
            ...req.body,
            uid: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// make route to edit comment
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedComment = await Comment.update(
            {
                comment: req.body.comment,
                uid: req.session.user_id,
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        );

        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(500).json(err)
    }
});

//make route to delete comment
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const commentData = Comment.destroy({
            where:{
                id: req.params.id,
                uid: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({message: 'No comment with this id!'});
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;