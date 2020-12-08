const express = require('express');

const app = express();
const routes= require('./routes')

app.use(express.json())
app.use(routes)

//notFound
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

//Catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})


app.listen(3333 , () => console.log('Server is running'));

