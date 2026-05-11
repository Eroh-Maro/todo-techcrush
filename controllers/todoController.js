import todoModel from "../model/todoModel.js";

//CRUD

const getAllTodos = async (req, res) => {
    try {
        const allTodos = await todoModel.find();
        return res.status(200).json({
            message: "All Todos",
            data: allTodos
        }) 
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const getOneTodos = async (req, res) => {
    try {
        const { id } =  req.params;
        const todo = await todoModel.find(id);
        return res.status(200).json({
            message: "Todo found",
            data: todo
        }) 
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const createTodo = async (req, res) => {
    try {
        const {title, details} = req.body;
        const todo = await todoModel.create({ title, details });
        return res.status(201).json({
            message: "Todo created",
            data: todo
        }) 

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await todoModel.findByIdAndUpdate(
            id,
            { completed: true },
            { new: true }
        );

        return res.status(200).json({
            message: "Todo updated",
            data: todo,
        });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await todoModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Todo deleted",
            data: todo,
        });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export {
    getAllTodos,
    getOneTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};