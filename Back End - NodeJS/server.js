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
  user: "root",
  password: "lollerlol211",
  database: "grifo",
  charset: "utf8mb4",
});
const port = 8445;



app.get("/api/slide/", function (request, response) {
  con.query("SELECT * FROM slide ORDER BY id DESC", function (err, risposta) {
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
  con.query("SELECT * FROM contacts ORDER BY id DESC", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});

app.get("/api/adminchatbot/", function (request, response) {
  con.query("SELECT * FROM chatbot ORDER BY id DESC", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});

app.get("/api/admincreateslide/", function (request, response) {
  con.query("INSERT INTO `slide` (`id`, `text`, `linkbtn`, `textbtn`, `img`) VALUES (NULL, 'Nuova slide', '/', 'Scopri!', 'https://www.grifomultimedia.it/wp-content/uploads/2022/04/slide-1-digital-mindset.jpg');", function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json(risposta);
  });
});

app.put("/api/adminmodslide/", function (request, response) {
  const sql = "UPDATE `slide` SET `text` = ?, `linkbtn` = ?, `textbtn` = ?, `img` = ? WHERE `slide`.`id` = ?";
  const values = [request.body.txt, request.body.linkbtn, request.body.textbtn, request.body.linkimg, request.body.id];
  con.query(sql, values, function (err, risposta) {
    if (err) {
      console.log(err);
      return response.status(500).json("error");
    }
    response.json("ok");
  });
});

app.delete('/api/deleteslide/:id', async (request, response) => {
  const slideId = request.params.id;
  con.query('DELETE FROM `slide` WHERE `id` = ?', [slideId], function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json("ok");
  });
});

app.delete('/api/deletepartners/:id', async (request, response) => {
  const slideId = request.params.id;
  con.query('DELETE FROM `partner` WHERE `id` = ?', [slideId], function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json("ok");
  });
});

app.delete('/api/deleteresponse/:id', async (request, response) => {
  const slideId = request.params.id;
  con.query('DELETE FROM `chatbot` WHERE `id` = ?', [slideId], function (err, risposta) {
    if(err){
      console.log(err)
    }
    response.json("ok");
  });
});

app.post("/api/adminslidepartcreate/", function (request, response) {
  const sql = "INSERT INTO `partner` (`id`, `img`, `name`) VALUES (?, ?, ?)";
  const values = [null, request.body.link, "azienda"];

  con.query(sql, values, function (err, risposta) {
    if (err) {
      console.log(err);
      return response.status(500).json({ error: "Errore interno del server" });
    }
    response.json("ok");
  });
});

app.post("/api/adminslidquestchatcreate/", function (request, response) {
  const sql = "INSERT INTO `chatbot` (`id`, `quest`, `resp`) VALUES (?, ?, ?)";
  const values = [null, request.body.domanda, request.body.risposta];

  con.query(sql, values, function (err, risposta) {
    if (err) {
      console.log(err);
      return response.status(500).json({ error: "Errore interno del server" });
    }
    response.json("ok");
  });
});

app.put("/api/adminmodportfolio/", function (request, response) {
  const sql = "UPDATE `portfolio` SET `title` = ?, `subtitle` = ?, `img` = ? WHERE `portfolio`.`id` = ?";
  const values = [request.body.title, request.body.subtitle, request.body.linkimg,  request.body.id];
  con.query(sql, values, function (err, risposta) {
    if (err) {
      console.log(err);
      return response.status(500).json("error");
    }
    response.json("ok");
  });
});
//metto in ascolto il nostro server node js in modo tale che quando avvio il server rimane avviato e risponde alle richieste.
app.listen(port, () => {
  console.log(
    "ho startato correttamente il tuo server node js con la porta " + port
  );
});