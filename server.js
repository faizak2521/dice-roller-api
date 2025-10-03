const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5500

app.listen(port, () => console.log(`Server started on port: ${port}`))

// Automatically sets HTTP hearders 
app.use(cors())

app.get('/api/random', (req, res) => {
    // get min's actual value
    const min = parseInt(req.query.min) || 1
    const max = parseInt(req.query.max) || 6
    const value = Math.floor(Math.random() * (max - min + 1)) + min
    res.json({value})
})


