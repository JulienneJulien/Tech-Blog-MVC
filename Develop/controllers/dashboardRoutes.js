const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Get all post for user dashboard
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId
    },
    attributes: [
      'id',
      'postText',
      'title',
      'createdAt'
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
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true, username: req.session.username });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Get edit post for user
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'postText',
      'title',
      'createdAt'
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true,
          username: req.session.username
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;