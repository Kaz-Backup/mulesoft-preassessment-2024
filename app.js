const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));

app.use(express.json());

// Returns the message sent as <payload>.message (default: "Hello world!")
app.get("/echo", (req, res) => {
    if(req.body.message) return res.send({ message: req.body.message });

    return res.send({ message: "Hello world!" });
});

// Returns the sum of two numbers <payload>.num1 and <payload>.num2
app.get("/sum", (req, res) => {
    if(!("num1" in req.body && "num2" in req.body)) 
        return res.status(400).send({ error: "Numeric fields num1 and num2 are required." });

    let { num1, num2 } = req.body;
    if(!isNumeric(num1)) return res.status(400).send({ error: "num1 must be numeric" });
    if(!isNumeric(num2)) return res.status(400).send({ error: "num2 must be numeric" });

    const sum = Number(num1) + Number(num2);
    return res.send({ sum });
});

function isNumeric(n) {
    return !isNaN(n) && !(typeof(n) === "string" && n.trim() === "");
}