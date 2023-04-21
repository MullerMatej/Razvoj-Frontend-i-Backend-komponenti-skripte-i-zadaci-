import express from "express";

const app = express(); // instanciranje aplikacije
const port = 4000; // port na kojem će web server slušati

let studenti = [
    {
        JMBAG: 12345,
        ime: "Marko",
        prezime: "Markovic",
        godinaStudija: 3,
        kolegij: "WA",
    },
    {
        JMBAG: 12349,
        ime: "Ivan",
        prezime: "Ivic",
        godinaStudija: 2,
        kolegij: "PI",
    },
    {
        JMBAG: 12348,
        ime: "Pero",
        prezime: "Peric",
        godinaStudija: 2,
        kolegij: "WA",
    },
    {
        JMBAG: 12347,
        ime: "Ivo",
        prezime: "Ivic",
        godinaStudija: 3,
        kolegij: "SPI",
    },
    {
        JMBAG: 12346,
        ime: "Duro",
        prezime: "Duric",
        godinaStudija: 1,
        kolegij: "HCI",
    },
];

app.get("/", (req, res) => res.send("Hello World"));

// app.get("/studenti", (req, res) => {
//     res.send(studenti);
// });

// Koristi se query string za dohvacanje parametara, ima bolja opcija
let studentHandler = (req, res) => {
    let upit = req.query;

    // console.log(upit)

    let godinaStudija = upit.godinaStudija;
    let kolegij = upit.kolegij;

    // ... obično bi ovdje odredili koji je odgovor

    let odgovor = {
        upit, // vraćamo upit natrag, čisto za provjeru
        status: "uspješno",
    };
    res.json(odgovor);
};

// dodavanje rute u aplikaciju
app.get("/studenti", studentHandler);

// Dinamicko dohvacanje parametara, dinamicke rute, bolja opcija od gornje
let dynamicStudentHandler = (req, res) => {
    let upit = req.params;
    // napravi nešto s upitom...

    let temp = upit.JMBAG;
    let temp2 = "";

    for (let i in studenti) {
        if (temp == studenti[i].JMBAG) {
            temp2 += studenti[i].ime;
        }
    }

    res.send(temp2);

    // let odgovor = {
    //     upit, // vraćamo upit natrag, čisto za provjeru
    //     status: "uspješno",
    // };
    // res.json(odgovor);
};
// dodavanje rute u aplikaciju
app.get("/studenti/:JMBAG", dynamicStudentHandler);

// Testiranje jos jednog primjera
let dynamicStudentHandler2 = (req, res) => {
    let upit = req.params;
    let a = "";

    for (let i in studenti) {
        if (
            studenti[i].kolegij == upit.kolegij &&
            studenti[i].JMBAG == upit.JMBAG
        ) {
            a += studenti[i].ime + " " + studenti[i].prezime;
        }
    }

    res.send(a);
};
// dodavanje rute u aplikaciju
app.get("/studenti/:JMBAG/:kolegij", dynamicStudentHandler2);

// Zadatak WA-201
app.get("/zbroji/:broj1/:broj2", (req, res) => {
    let upit = req.params;

    let broj1 = parseInt(upit.broj1);
    let broj2 = parseInt(upit.broj2);
    let suma = broj1 + broj2;
    let sumaString = suma.toString();

    res.send(sumaString);
});
app.get("/oduzmi/:broj1/:broj2", (req, res) => {
    let upit = req.params;

    let broj1 = parseInt(upit.broj1);
    let broj2 = parseInt(upit.broj2);
    let suma = broj1 - broj2;
    let sumaString = suma.toString();

    res.send(sumaString);
});
app.get("/pomnozi/:broj1/:broj2", (req, res) => {
    let upit = req.params;

    let broj1 = parseInt(upit.broj1);
    let broj2 = parseInt(upit.broj2);
    let suma = broj1 * broj2;
    let sumaString = suma.toString();

    res.send(sumaString);
});
app.get("/podijeli/:broj1/:broj2", (req, res) => {
    let upit = req.params;

    let broj1 = parseInt(upit.broj1);
    let broj2 = parseInt(upit.broj2);
    let suma = broj1 / broj2;
    let sumaString = suma.toString();

    res.send(sumaString);
});

// WA-202
app.get("/fibonacci/:broj", (req, res) => {
    function fibonacci(n) {
        let fib = [0, 1];

        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        return fib[n - 1];
    }

    let broj = parseInt(req.params.broj);
    let zadnji = fibonacci(broj);

    res.send(zadnji.toString());
});

// WA-203
let studenti2 = [
    { oib: "12312349172", ime: "Hrvoje", prezime: "Horvat" },
    { oib: "82723412342", ime: "Ivana", prezime: "Ivić" },
    { oib: "97283742342", ime: "Stjepan", prezime: "Stjepanović" },
];
// let rezultat = studenti2.map(); ! ovdje stao !

// ["Hrvoje Horvat (12312349172)", "Ivana Ivić (82723412342)", "Stjepan Stjepanović (97283742342)"]

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
