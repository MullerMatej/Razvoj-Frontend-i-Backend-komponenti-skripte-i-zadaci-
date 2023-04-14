import express from "express";

const app = express(); // instanciranje aplikacije
const port = 4000; // port na kojem će web server slušati

let studenti = [
    {
        JMBAG: 12345,
        ime: "Marko",
        prezime: "Markovic",
        godinaStudija: 3,
    },
    {
        JMBAG: 12349,
        ime: "Ivan",
        prezime: "Ivic",
        godinaStudija: 2,
    },
    {
        JMBAG: 12348,
        ime: "Pero",
        prezime: "Peric",
        godinaStudija: 2,
    },
    {
        JMBAG: 12347,
        ime: "Ivo",
        prezime: "Ivic",
        godinaStudija: 3,
    },
    {
        JMBAG: 12346,
        ime: "Duro",
        prezime: "Duric",
        godinaStudija: 1,
    },
];

app.get("/", (req, res) => res.send("Hello World"));

app.get("/studenti", (req, res) => {
    res.send(studenti);
});
app.get("/studenti/first", (req, res) => {
    res.send(studenti[0]);
});
app.get("/studenti/last", (req, res) => {
    let dulj = studenti.length - 1;

    res.send(studenti[dulj]);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
