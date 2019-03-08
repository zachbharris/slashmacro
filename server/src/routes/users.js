import express from 'express';

const router = express.Router();

router.get('', (req, res) => res.status(200).send('All Users'));

// GET
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  return res.status(200).send(`Requested a user w/ id = ${userId}`);
});

export default router;