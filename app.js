const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const editRoutes = require('./routes/edit');


app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(homeRoutes);
app.use(addRoutes);
app.use(editRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
