import express from "express";

const todoRouter = express.Router();

import {
    getAllTodos,
    createTodo,
    deleteTodo,
    getOneTodos,
    updateTodo,
} from "../controllers/todoController.js";

todoRouter.get("/get-todos", getAllTodos);

todoRouter.get("/todos/:id", getOneTodos);

todoRouter.post("/create-todos", createTodo);

todoRouter.patch("/update-todos/:id", updateTodo);

todoRouter.delete("/delete-todos/:id", deleteTodo);

export default todoRouter;