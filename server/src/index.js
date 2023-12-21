const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { todosRouter } = require('./router/todo.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
todosRouter(app);
app.listen(process.env.PORT, () => {
    console.log(`port chay o cong ${process.env.PORT}`);
})