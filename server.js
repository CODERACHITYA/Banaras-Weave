import express from "express";
const app = express();
import { PORT } from './app/config'
app.listen(PORT, console.log(`ON PORT ${PORT}`))