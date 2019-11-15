const http = require("http");
var express = require("express");
var path = require("path");

const PORT = 8080;

var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var tables = [
    {
    routeName: "table1",
    name: "Oliver",
    phone: 39248394,
    email: "almaguero95@gmail.com"
    },

    {
    routeName: "table2",
    name: "tacos",
    phone: 0000,
    email: "tacos@gmail.com"
    }
];

app.get("/api/add", function(req, res) {
    res.sendFile(path.join(__dirname, "waitingList.html"));
  });

app.get("/api/waitList", function (req,res) {
    return res.json(tables);
});

app.get("/", function (req, res) {
    res.send("Hot Restaurant");
})

app.get("*", function (req, res) {
    res.send("404 not found");
})

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    characters.push(newTable);
  
    res.json(newTable);
  });
  

app.listen(PORT, function () {
    console.log("Server started in localhost:" +PORT);
})