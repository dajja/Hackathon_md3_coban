const { getAllTodo, addNewTodo, changeStatus, deleteeTodo } = require('../repository/todo.repository')

async function render(req, res) {
    let data = await getAllTodo();
    res.status(200).json(data);
}

async function postTodo(req, res) {
    const { name } = req.body;
    await addNewTodo(name);
    res.status(200).json({
        message: 'them moi thanh cong'
    })
}

async function changeTodo(req, res) {
    const { completed } = req.body;
    const { id } = req.params;
    await changeStatus(completed, id);
    res.status(200).json({
        message: 'tthay doi thanh cong'
    })
}

async function deleteTodo(req, res) {
    await deleteeTodo(req.params.id);
    res.status(200).json({
        message: 'xoa thanh cong'
    })
}
module.exports = {
    render,
    postTodo,
    changeTodo,
    deleteTodo
}