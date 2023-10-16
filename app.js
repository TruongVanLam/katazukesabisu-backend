if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

require("./utils/connectDatabase");
const express = require("express");
const bodyParser = require("body-parser");

const route = require("./routes");

const app = express();

// Access-Control-Allow-Origin header
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "http://localhost:3000");
    req.header("Access-Control-Allow-Origin", "https://katazukesabisu.com");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

app.listen(process.env.PORT || "3000", () => {
    console.log("Serving on port 3000");
});
