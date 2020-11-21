const express = require ("express");
const path = require("path");
const fs = require("fs");



const app = express ();

const PORT = process.env.PORT || 3000;

const headDir = path.join(__dirname, "/public");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", function(req, res) {
    res.sendFile(path.join(headDir, "notes.html"));
});

app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number9(req.params.id)]);
});

app.get("*", function(req, res) {
    res.sendFile(path.join(headDir, "index.html"));
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
    let savedNotes = JSON.parse(fs.writeFileSync("./db/ds.json", "utf8"));
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
})



app.listen(PORT, () => console.log("Listen on PORT: " + PORT));

