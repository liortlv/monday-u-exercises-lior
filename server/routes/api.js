const express = require("express");
const taskManager = require("../services/task-manager.js");
const fs = require("fs");
const { route } = require("express/lib/router/index.js");
const router = express.Router();

router.get("/getAll", async (req, res) => {
   const allTasks = await taskManager.getTasks();
   res.status(200).json(allTasks);
});

router.post("/add", async (req, res) => {
   const taskAdded = await taskManager.add(req.body.task);
   res.status(200).json(taskAdded);
});

router.delete("/del", (req, res) => {
   taskManager.clear();
   res.status(200).json({ message: "Successfully cleared" });
});

router.delete("/del/:id", (req, res) => {
   let id = req.params.id;
   if (isNaN(id)) {
      let error = Error();
      error.statusCode = 400;
      error.message = "Wrong parameters";
      throw error;
   }
   taskManager.remove(id);
   res.status(200).json({ message: "Successfully deleted task" });
});

router.post("/del/undo", async (req, res) => {
   await taskManager.undoDelete();
   res.status(200).json({ message: "Successfully restored last deleted task" });
});

router.post("/checkmark", async (req, res) => {
   const allTasks = await taskManager.checkMarkTask(req.body);
   res.status(200).json(allTasks);
});

module.exports = router;
