const express = require('express');
const app = express();
const mysql = require('mysql2'); //isso pegrá a versão mais atual do mysql que instalamos

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "reactpwbd",
});
