import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));

app.get('/cards', (req, res) => {
    res.status(200).send("cards page")
})
app.get('/checks', (req, res) => {
    res.status(200).json({ message: "checks page" })
})
app.get('/sales', (req, res) => {
    res.status(200).send("<h2>sales page</h2>")
})
app.get('/page', (req, res) => {
    res.status(200).sendFile(path.join(_dirname, 'index.html'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'picture.jpg'));
})
app.use((req, res) => {
    res.status(404).send('שגיאה 404 - הדף לא נמצא');
});
app.listen(3000);