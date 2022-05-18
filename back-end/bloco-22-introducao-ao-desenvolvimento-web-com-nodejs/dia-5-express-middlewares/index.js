const express = require("express");
const {createTeam, saveTeam} = require("./controller/teams");

const app = express();

app.use(express.json());

app.listen(3001, () => console.log("Escutando na porta 3001"));

app.post('/', createTeam, saveTeam);
