
const express = require('express'); 

const server = express(); 
server.use(express.json()); 

// CRUD operations: 

const genres = [
    {id: 1, genre: "horror"}, 
    {id: 2, genre: "comedy"}, 
    {id: 3, genre: "action"}
]

server.get("/api/genres", (req, res) => {
    res.status(200).json(genres); 
})

server.get("/api/genres/:id", (req, res) => {
    const {id} = req.params; 
    const genre = genres.find(c => c.id === parseInt(id)); 
    if(!genre){
        return res.status(400).json({message: "ID does not exist"})
    }
    res.send(genre); 
})

server.post("/api/genres", (req, res) => {
    const genre = req.body; 
    genres.push(genre); 
    res.status(201).json(genre); 
}); 

server.delete("/api/genres/:id", (req, res) => {
    const {id} = req.params; 
    const genre = genres.find(c => c.id === parseInt(id)); 
    if(!genre){
       return  res.status(400).json({message: "ID does not exist"})
    }
    
    const index = genres.indexOf(genre); 
    genres.splice(index, 1); 

    res.status(200).json({message: "Successfully deleted genre"})
    
}); 

server.put("/api/genres/:id", (req, res) => {
    const {id} = req.params; 
    const updatedData = req.body.genre; 

    const genre = genres.find(c => c.id === parseInt(id)); 
    if(!genre){
        return res.status(400).json({message:"Id does not exist"})
    }
    genre.genre = updatedData; 
    res.status(200).json({message: "Successfully Updated!"})
}); 




server.listen(3400, () => {
    console.log("Listening on Port 3400"); 
})