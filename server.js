const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/'))
// });

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
});