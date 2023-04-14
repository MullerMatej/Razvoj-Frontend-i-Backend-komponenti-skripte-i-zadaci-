import express from "express";
import routes from "./routes"; // . označava da tražimo modul u istom direktoriju gdje se nalazi ovaj modul

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati
const staticMiddleware = express.static("public"); // direktorij sa statičkim datotekama

app.use("/", staticMiddleware);
app.get("/dinamicki", (req, res) => res.send(`Dinamički odgovor`));

app.get("/", routes.home);
app.get("/student", routes.student);
app.listen(port, () => console.log(`Slušam na portu ${port}!`));
