import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.unsubscribe(express.static('public'));

const message = 'Hello World..!!!'
app.get('*', (req, res, next) => {
    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
                <title>SSR with RR</title>
            </head>
            <body>
                <p>${message}</p>
            </body>
        </html>
        `
    );
});

app.listen(3000, () => {
    console.log('server is listening on 3000 port')
});