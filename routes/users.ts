import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req: any, res: any) {
  res.send('respond with a resource');
});

export default router;
