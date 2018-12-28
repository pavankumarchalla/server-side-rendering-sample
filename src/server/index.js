import express from 'express'
import cors from 'cors'
import React from 'react'
import { renderToString } from 'react-dom/server'
import MyComponent from '../browser/MyComponent'
import serialise from 'serialize-javascript'

const app = express();

app.use(cors());
app.use(express.static('public'));

const message = 'Hello World..!!!'
const markup = renderToString(<MyComponent />)
const defaultMessage = "Default message data from the server"
const defaultData = {
    firstName: "Pavan from Server",
    lastName: "Kumar from Server"
}

app.get('*', (req, res, next) => {
    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
                <title>SSR with RR</title>
                <script>window.__data__= "${defaultMessage}"</script>
                <script>window.__jsonData__= ${serialise(defaultData)}</script>
                <script src="bundle.js" defer></script>
            </head>
            <body>
                <p>${message}</p>
                <div id="app">${markup}</div>
            </body>
        </html>
        `
    );
});

app.listen(3000, () => {
    console.log('server is listening on 3000 port')
});