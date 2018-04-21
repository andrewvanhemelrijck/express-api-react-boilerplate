import express from 'express';

const router = express.Router();

/* GET api/index route. */
router.get('/', (req, res, next) => {
  res.send({
    title: 'Express API' 
  });
});

export default router;
