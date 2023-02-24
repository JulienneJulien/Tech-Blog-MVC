const router = require('express').Router();
const { Post, User, Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// post new post 
router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        postText: req.body.postText,
        userId: req.session.userId
      })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// update post

router.put("/:id", withAuth, (req, res) => {
console.log(req.body, req.params.id)
Post.update(
    {
        title: req.body.title,
        postText: req.body.postText
      },
    {
  where: {
    id: req.params.id
  }
})
.then(dbPostData => {
  if (!dbPostData) {
    res.status(404).json({ message: 'No post found with this id' });
    return;
  }
  res.json(dbPostData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

// delete post
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all users  
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'postText',
        'title',
        'createdAt'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'commentText', 'postId', 'userId', 'createdAt'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  router.get('/:id', withAuth, (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'postText',
        'title',
        'createdAt',
        ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'commentText', 'postId', 'userId', 'createdAt'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });





module.exports = router;