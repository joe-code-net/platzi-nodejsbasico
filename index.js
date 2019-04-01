/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

 const express = require('express');
 const app = express();

 app.get("/app", (req, res)=>{
    res.send("Estoy en la ruta /app");
 });
 
 app.get("/", (req, res)=>{
    res.send("Estoy e la ruta HOME");
 });

//Comodin cual peticion que no encaje llega a esta
 app.get("*", (req, res)=>{
    res.send("No se donde estoy");
 });
 app.listen(3000, ()=>{
    console.log("El servidor de Express esta en escucha  en el puerto 3000");
 });
