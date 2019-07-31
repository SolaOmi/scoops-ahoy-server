const { Router } = require('express');
const tokenGenerator = require('../services/token_generator');

const router = Router();

router.get('/:id?', (req, res) => {
  const id = req.params.id;
  res.send(tokenGenerator(id));
});

router.post('/', (req, res) => {
  const id = req.body.id;
  res.send(tokenGenerator(id));
})

module.exports = router;
