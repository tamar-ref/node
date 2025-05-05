import express from 'express';
const app = express();
let count = 0;

app.get('/', (req, res) => {
    res.send(count++);
})
app.put('/', (req, res) => {
    res.send("ברוך הבא לאתר שלנו, הפעלת מתודת PUT לכתובת /put")
})
app.post('/', (req, res) => {
    res.send("ברוך הבא לאתר שלנו, הפעלת מתודת POST לכתובת /post")
})
app.delete('/', (req, res) => {
    res.send("ברוך הבא לאתר שלנו, הפעלת מתודת DELETE לכתובת /delete")
})
app.patch('/', (req, res) => {
    res.send("ברוך הבא לאתר שלנו, הפעלת מתודת PATCH לכתובת /patch")
})
app.listen(5050);