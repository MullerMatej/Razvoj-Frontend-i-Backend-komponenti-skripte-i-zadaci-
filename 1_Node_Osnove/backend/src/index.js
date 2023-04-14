const express = require("express");
const cors = require("cors");

const app = express(); // instanciranje aplikacije
app.use(cors());
const port = 3000; // port na kojem će web server slušati

let datumRoute = "";
let prognozaRoute = "";
let lista = [];
let lista_send = [];

// WA-101
app.get("/datum", (req, res) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    datumRoute = req.url;
    res.send(formattedDateTime);
});
app.get("/prognoza", (req, res) => {
    let arr = ["sunčano", "kišovito", "oblačno"];

    const randomIndex = Math.floor(Math.random() * arr.length);
    let recenica = "Danas ce biti " + arr[randomIndex];

    prognozaRoute = req.url;
    res.send(recenica);
});
app.get("/", (req, res) => {
    res.send(`Adresa datuma: ${datumRoute}
    Adresa prognoze: ${prognozaRoute} `);
});

// WA-102
app.get("/dodaj", (req, res) => {
    const randomNum = Math.floor(Math.random() * 101);
    lista.push(randomNum);

    lista_send.push(randomNum + " ");

    res.send(lista.toString());
});
app.get("/dohvati", (req, res) => {
    res.send(lista_send.join(""));
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
