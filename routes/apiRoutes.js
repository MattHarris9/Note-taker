const router = requier("express").Router();
const store = requier("./../db.store");


// ROUTES


router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post("/notes", function (req, res) {
    store
        .addNOtes(req.body)
        .then((notes) => res.json(notes))
        .catch(err => status(500).json(err))
});

router.delete("/notes/:title", function (req, res) {
    store
        .deleteNotes(req.param.title)
        .then(()=> res.json ({ok: then}))
        .catch(err => res.status(500).json(err))
});

module.exports = router;