require('dotenv').config()
const app = require('./app');

const db = require('./src/config/database')(process.env.DATABASE_URL)
const routes = require('./routes');
routes(app);


const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
