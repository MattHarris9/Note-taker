const path = require("path");
const fs = require("fs");

module.exports = function(app){
app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number9(req.params.id)]);
});

app.post("/api/notes", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = (savedNotes.length).toString();
    newNote.id= uniqueID;
    savedNotes.push(newNote);

    fs.writeFileSync("./db/ds.json", JSON.stringify(savedNotes));
    console.log("Note saved to ds.json. Content: ", newNote);
    res.json(savedNotes);
});

app.delete("/api/notes/:id", function (req, res) {
    let savedNotes = JSON.parse(fs.writeFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;
    console.log(`Deleting note with ID ${noteID}`);
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })
    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
});
}