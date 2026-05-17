'use strict';

import express from 'express';
import about from "./routes/about.js";
import { create } from 'express-handlebars';

const app = express();
const port = 3000;

app.use(express.static("public"));

const handlebars = create({extname: '.hbs'});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/about", about);

app.listen(port, () => console.log(`Your app is listening on port ${port}`));
