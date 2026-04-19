const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
  });
}