const { render, postTodo, changeTodo, deleteTodo } = require('../controllers/todo.controller');
const { checkName } = require('../middleware/check')
const todosRouter = (app) => {
    app.get('/todo', render);
    app.post('/todo', checkName, postTodo);
    app.put('/todo/:id', changeTodo);
    app.delete('/todo/:id', deleteTodo)
}

module.exports = { todosRouter }