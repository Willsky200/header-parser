var express = require("express");
var app = express();
const hbs = require("hbs");

var port = process.env.PORT || 3000;



app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/api/whoami", (req, res) => {
	res.send("This page is being worked on");
});



app.listen(port, function(){
	console.log(`Listening on port ${port}`)
})