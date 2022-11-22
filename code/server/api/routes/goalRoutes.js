const express = require('express');
const router = express.Router();
const { deleteGoal, addGoal, updateGoal, getGoals } = require('../controller/goalController');


router.route('/').get(getGoals).post(addGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);


    

module.exports = router;