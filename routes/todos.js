const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// Create a new todo
router.post("/", async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.json(todo);
});

// Update a todo
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = await Todo.findByPk(id);
  if (todo) {
    todo.title = title ?? todo.title;
    todo.completed = completed ?? todo.completed;
    await todo.save();
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rowsDeleted = await Todo.destroy({ where: { id } });
  res.json({ rowsDeleted });
});

module.exports = router;
