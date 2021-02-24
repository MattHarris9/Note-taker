const path = require("path");
const express = require("express");
const fs = require("fs");
let json = require("../db/db.json");

module.exports = function(app){
app.get("/api/notes", function(req, res) {
    //let savedNotes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    //res.json(savedNotes[Number9(req.params.id)]);
    res.json(json);
});

app.post("/api/notes", function(req, res) {
    //let savedNote = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    let newNote = req.body;
    let id = (json.length + 1);
    newNote.id= id;
    json.push(newNote);

    fs.writeFileSync("../db/db.json", JSON.stringify(json));
    console.log("Note saved to db.json. Content: ", newNote);
    res.json(json);
});

app.delete("/api/notes/", function (req, res) {
    //let savedNote = JSON.parse(fs.writeFileSync("../db/db.json", "utf8"));
    let noteid = req.params.id;
    let newid = 0;
    console.log(`Deleting note with ID ${noteID}`);
    json = json.filter(currNote => {
        return currNote.id != noteid;
    })
    for (currNote of json) {
        currNote.id = newid.toString();
        newid++;
    }

    fs.writeFileSync("../db/db.json", JSON.stringify(json));
    res.json(json);
});

app.use(express.static(path.join(__dirname, "../assets/style.css")));

}



