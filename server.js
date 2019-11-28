const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('/users/profile/:id', (req, res) => {
        const actualPage = '/users/profile'
        const queryParam = { userId: req.params.id }
        app.render(req, res, actualPage, queryParam)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, err => {
        if(err) {
            console.log('> Readt on port http://localhost:3000')
        }
    })
})
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})