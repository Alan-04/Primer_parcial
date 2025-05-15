const express = require("express");
const app = express ();
const PORT = 3001;
const usuarios = require("./data/usuarios.json");
const validarPolitica = require("./politica/reglas");

app.use(express.json());

app.get("/validador",(req,res)=>{
    const invalidos = usuarios
    .filter(usuarios => !validarPolitica(usuarios))
    .map(usuario => ({userName:usuario.userName,email:usuario.email}));
    res.status(200).json(invalidos)
})

app.get("/usuarios-correctos",(req,res)=>{
    const correctos = usuarios
    .filter(usuario => validarPolitica(usuario))
    .map(usuario => ({userName:usuario.userName,email:usuario.email}));
    res.status(200).json(correctos)
})

app.listen(PORT,()=>{
    console.log(`App iniciada en el puerto ${PORT}`);
})