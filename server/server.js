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
	// WORK OUT WHERE TO GET INFO, MAYBE FROM HEADERS
	var userAgent = req.headers["user-agent"];
	var osArr = userAgent.split(/[()]/);
	var os = osArr[1];

	var allLangs = req.headers["accept-language"].split(/[,]/);
	var lang = allLangs[0];

	var ip = req.ip;

	var json = {"software": os, "language": lang, "ipaddress": ip};

	res.json(json);

});



app.listen(port, function(){
	console.log(`Listening on port ${port}`)
})