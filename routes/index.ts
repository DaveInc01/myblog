import express from 'express';
let router = express.Router();
import indexController from '../controllers/indexController';

/* GET home page. */
router.get('/', function(req, res, next) {
  const allBlogs = indexController.getAllBlogs();
  console.log(allBlogs);
  res.render('index', {
    allBlogs: allBlogs,
    name: 'Akashdeep'
  });
});

export default router;
