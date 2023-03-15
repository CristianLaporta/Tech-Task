const express = require("express");
//importo mysql per comunicare con il database
const mysql = require("mysql");
//importo cors per risolvere eventuali problemi di sicurezza che potrebbero bloccare le richieste http.
const cors = require("cors");
//importo il bodyparser che mi servirà per ricevere informazioni dal front end con le chiamate post.
const bodyParser = require("body-parser");
const app = express();
// indico ad express di utilizzare la libreria cors
app.use(cors());
//indico ad express di utilizzare la libreria body parser
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "metti il tuo username",
  password: "la tua password",
  database: "il tuo database",
  charset: "utf8mb4",
});
const port = 8445;



app.get("/api/slide/", function (request, response) {
  con.query("SELECT * FROM slide", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});

app.get("/api/carouselcompanies/", function (request, response) {
  con.query("SELECT * FROM partner", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});

app.get("/api/portfolio/", function (request, response) {
  con.query("SELECT * FROM portfolio", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});


app.post("/api/chatbot/", function (request, response) {
  con.query("SELECT * FROM chatbot WHERE quest LIKE ?", ['%' + request.body.message + '%'], function (err, risposta) {
    if (err) {
      console.log(err);
      response.json({mess: "Errore nel server", type:"received"});
      return;
    }
    if (risposta.length !== 0) {
      let messaggio = {mess:risposta[0].resp, type:"received"};
      response.json(messaggio);
    } else {
      response.json({mess:"Purtroppo non ho capito, potresti ripetere?", type:"received"});
    }
  });
});


app.post("/api/contacts/", function (request, response) {
  const sql = "INSERT INTO `contacts` (`id`, `name`, `message`, `email`) VALUES (?, ?, ?, ?)";
  const values = [null, request.body.name, request.body.message, request.body.email];

  con.query(sql, values, function (err, risposta) {
    if (err) {
      console.log(err);
      return response.status(500).json({ error: "Errore interno del server" });
    }
    response.json("ok");
  });
});
// chiamate del pannello di controllo admin
app.get("/api/adminmessage/", function (request, response) {
  con.query("SELECT * FROM contacts", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});

app.get("/api/adminchatbot/", function (request, response) {
  con.query("SELECT * FROM chatbot", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});



//metto in ascolto il nostro server node js in modo tale che quando avvio il server rimane avviato e risponde alle richieste.
app.listen(port, () => {
  console.log(
    "ho startato correttamente il tuo server node js con la porta " + port
  );
});