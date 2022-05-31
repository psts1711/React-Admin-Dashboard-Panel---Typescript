"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const AuthRoutes_1 = require("./routes/AuthRoutes");
const multer = require("multer");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const upload = multer({ dest: 'uploads/' });
const app = express();
dotenv.config();
app.use(cors());
// @ts-ignore
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// database connection
//const DB_URL = "mongodb+srv://adminuser:12345@cluster0.0guwh.mongodb.net/test?retryWrites=true&w=majority";
//const LOCALDB_URL = "mongodb://localhost:27017/MemoriesApp?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose.connect(process.env.LOCALDB_URL, { useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.log(`Server running on port ${error.message}`));
//mongoose.set('useFindAndModify', false);
app.use('/user', AuthRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Api is running');
});
