
const express = require('express'); 
const genreRouter = require('./routes/genreRoutes'); 

const server = express(); 
server.use(express.json()); 

server.use('/api/genres', genreRouter); 

server.listen(3400, () => {
    console.log("Listening on Port 3400"); 
})