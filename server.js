const express = require ("express");
const path = require ("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express ();

const PORT = app.listen(process.env.PORT || 3001, function() { 
    console.log('Your app is listening on port' + PORT.address().port);
});

//const headDir = path.join(__dirname, "./public");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));
//app.use("/api", apiRoutes);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.use(express.static(path.join(__dirname, "../assets/style.css")));








