const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

router.route('/').get(protect, getGoals).post(protect, setGoal);

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);

//Old pre-refactored routes
// router.get('/', getGoals);

// router.post('/', setGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

module.exports = router;
