import express from "express";

const app = express();
const PORT = 8787;

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "ok" });
});


app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`);
});