const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5500


// Automatically sets HTTP hearders 
app.use(cors())
// Tell Express to serve any static files inside the "public" folder
app.use(express.static('public'))


// API random number endpoint (/api/random?min=1&max=6)
app.get('/api/random', (req, res) => {
    // get min's actual value
    const min = parseInt(req.query.min) || 1
    const max = parseInt(req.query.max) || 6
    
    // Generate random number between min and max
    const value = Math.floor(Math.random() * (max - min + 1)) + min
    
    // Send back JSON
    res.json({value})
})

// Listens for requests
app.listen(port, () => console.log(`Server started on port: ${port}`))

