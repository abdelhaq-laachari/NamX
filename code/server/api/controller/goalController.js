const asyncHandler = require('express-async-handler');
const Goal = require ('../models/goalModel')

// get goals
const getGoals = asyncHandler(async (req, res) =>
{
    const goals = await Goal.find()
    res.status(200).json(goals);
})
// add goal
const addGoal = asyncHandler( async (req, res) =>
{
    if (!req.body.text)
    {
        res.status(400)
        throw new Error ('Please add text field ! ')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal);   
})
// update goal
const updateGoal = asyncHandler( async (req, res) =>
{
    const goal = await Goal.findById(req.params.id)
    if (!goal)
    {
        res.status(400)
        throw new Error('goal not found ! ')  
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
    })
    res.status(200).json(updatedGoal);
})
// delete goal
const deleteGoal = asyncHandler( async (req, res) =>
{
    const goal = await Goal.findById(req.params.id)
    if (!goal)
    {
        res.status(400)
        throw new Error('goal not found ! ')
    }
    await goal.remove()
    res.status(200).json({ id : req.params.id });
})

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}
