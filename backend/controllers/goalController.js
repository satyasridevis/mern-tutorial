const asyncHandler = require("express-async-handler") 

const Goal = require("../models/goalModel")

// @description  get goals
// @routes  GET /api/goals
//@access private (after authentication)
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

// @description  set  a goal
// @routes POST  /api/goals  (create a goal)
//@access private (after authentication)
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please a text field")
  }

  const goal = await Goal.create({ text: req.body.text })

  res.status(200).json(goal)
})
// @description  Update goals
// @routes PUT /api/goals/:id
//@access private (after authentication)
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error("goal not found")
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
})
// @description  delete goal
// @routes  DELETE /api/goals/:id
//@access private (after authentication)
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error("goal not found")
  }
  await Goal.deleteOne()
  res.status(200).json({ id: req.params.id })
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}