const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const userRoutes = require('./routes/UserRoutes');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/users', userRoutes);
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/users`);
});
