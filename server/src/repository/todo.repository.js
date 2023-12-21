// code sql
const sql = require('../config/db.config');

async function getAllTodo() {
    let [data] = await sql.execute('select * from todo order by id DESC');
    return data;
}

async function addNewTodo(data) {
    await sql.execute('insert into todo (name, completed) values (?,?)', [data, 0])
}

async function changeStatus(status, id) {
    await sql.execute('update todo set completed = ? where id = ?', [!status, id])
}
async function deleteeTodo(id) {
    await sql.execute('delete from todo where id = ?', [id])
}
module.exports = {
    getAllTodo,
    addNewTodo,
    changeStatus,
    deleteeTodo
}