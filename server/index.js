const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



app.get('/api/users', function(req, res) {
  let friends = ['Zach', 'Lane', 'Dane']
  res.status(200).send(friends);
});


app.get('/weather/:temperature', function(req, res) {
  const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});


// const SERVER_PORT = 4000;
app.listen(4000, function() { console.log(`Server running on 4000`)})