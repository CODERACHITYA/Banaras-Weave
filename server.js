import express from 'express';
const app = express();
import path from 'path';
import ejs from 'ejs';
import expressLayout from 'express-ejs-layouts';
import { PORT } from './app/config';
app.use(express.static('public'))
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
import routes from './routes/web';
routes(app)
app.listen(PORT, console.log(`On PORT ${PORT}`))