const express = require('express')

const app =  express();

app.get('/',(req,res)=>{
    res.send("hello")
})

const book = [
    {
      "id": 1,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "language": "English"
    },
    {
      "id": 2,
      "title": "El amor en los tiempos del cólera",
      "author": "Gabriel García Márquez",
      "language": "Spanish"
    },
    {
      "id": 3,
      "title": "Le Petit Prince",
      "author": "Antoine de Saint-Exupéry",
      "language": "French"
    },
    {
      "id": 4,
      "title": "La sombra del viento",
      "author": "Carlos Ruiz Zafón",
      "language": "Spanish"
    },
    {
      "id": 5,
      "title": "Harry Potter and the Philosopher's Stone",
      "author": "J.K. Rowling",
      "language": "English"
    },
    {
      "id": 6,
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "language": "Spanish"
    },
    {
      "id": 7,
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "language": "English"
    },
    {
      "id": 8,
      "title": "Les Misérables",
      "author": "Victor Hugo",
      "language": "French"
    },
    {
      "id": 9,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "language": "English"
    }
  ]
  

app.get('/books', (req,res) => {

        const data = book
        res.send(data);
       
})

app.get('/book/:id', (req,res) => {
    const {id} = req.params
    const data = book.find(book => book.id === id)
    res.send(data);
   
})

app.get('/book/:id', (req,res) => {
    const {id} = req.params
    const data = book.find(book => book.id === id)
    res.send(data);
   
})

app.listen(3000 , () => {
    console.log('Example app listening on port 3000!');
})