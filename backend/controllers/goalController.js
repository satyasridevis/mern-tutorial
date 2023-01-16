const asyncHandler = require("express-async-handler") 




// @description  get goals
// @routes  GET /api/goals
//@access private (after authentication)
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
        message:" get Goals "
    })
})

// @description  set  a goal
// @routes POST  /api/goals  (create a goal)
//@access private (after authentication)
const setGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error("please a text field")
    }
    
    res.status(200).json({
        message:" set Goal "
    })
})
// @description  Update goals
// @routes PUT /api/goals/:id
//@access private (after authentication)
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})
// @description  delete goal
// @routes  DELETE /api/goals/:id
//@access private (after authentication)
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}