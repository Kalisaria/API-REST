'use strict'

const express = require('express');
const app = express();

const path = require ("path");

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
 "octubre", "noviembre", "diciembre"]

 function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
 function getTime (req, res){
    const d = new Date();
    const day = d.getDate();
    const year = d.getFullYear();
    const month = meses[d.getMonth()];
    const hours = d.getHours();
    const minutes = d.getMinutes();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var now = h + ":" + m + ":" + s;
    res.send("son las " + now + " del " + day + "/" + month + "/" + year);
    

}

app.get("/fecha", getTime);

app.listen(3000,() =>{
    console.log('API REST corriendo en http://localhost:3000')
})
function getLmgfy(req, res){

const strictUriEncode = require('strict-uri-encode');


}