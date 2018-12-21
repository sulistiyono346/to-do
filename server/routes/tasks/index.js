var express = require('express');
var router = express.Router();
const taskController = require("../../controllers/task")
const { isLogin } = require("../../midlleware/isLogin")
const { isSelf } = require("../../midlleware/isLogin")

router.post("/add", isLogin, isSelf, taskController.addTask)
router.put("/update", isLogin, isSelf, taskController.updateTask)
router.put("/status", isLogin, isSelf, taskController.updateStatus)
router.put("/priority", isLogin, isSelf, taskController.updatePriority)
router.get("/priority", isLogin, isSelf, taskController.findPriority)
router.delete("/", isLogin, isSelf, taskController.deleteTask)
router.get("/", isLogin, isSelf, taskController.findTask)

// router.use(isLogin)
// router.use(isSelf)
// router.post("/add", taskController.addTask)
// router.put("/update", taskController.updateTask)
// router.put("/status", taskController.updateStatus)
// router.put("/priority", taskController.updatePriority)
// router.get("/priority", taskController.findPriority)
// router.delete("/", taskController.deleteTask)
// router.get("/", taskController.findTask)

module.exports = router


