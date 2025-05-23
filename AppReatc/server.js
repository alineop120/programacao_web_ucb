const express = require('express');
const app = express();
const mysql = require('mysql2'); //isso pegrá a versão mais atual do mysql que instalamos
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "reactpwbd",
});
app.use(cors());
app.use(express.json());

/*app.get('/', (req, res) => {
    let SQL = "INSERT INTO alunos (id, nome, idade) VALUES (1, 'Lucas', 20)";
    db.query(SQL, (err, res) => {
        console.log(err);

    let SQL = "truncate table alunos";
    db.query(SQL, (err, res) => {
        console.log(err);
});*/

app.post('/register', (req, res) => {
    const { nome, idade } = req.body;

    let SQL = "INSERT INTO alunos (nome, idade) VALUES (?, ?)";
    db.query(SQL, [nome, idade], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});