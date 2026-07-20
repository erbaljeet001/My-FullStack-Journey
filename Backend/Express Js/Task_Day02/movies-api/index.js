import express from 'express'

const app = express();

const PORT = 3007;

app.get('/get-movies', (req ,res) =>
{
     const  movies = [{ id: 1, name: "Inception", year: 2010 },
    { id: 2, name: "Avatar", year: 2009 }]
  res.send(movies)
})


app.post('/add-movie', (req,res) =>
{
     const  movie = [{ id: 1, name: "Inception", year: 2010 },
    { id: 2, name: "Avatar", year: 2009 }]
 

  res.send(movie)
})

app.put('/update-movie', (req,res) =>
{ 
  const  movie = [{ id: 1, name: "Inception", year: 2010 },
    { id: 2, name: "Avatar", year: 2009 }]
  res.send(movie)
})

app.delete('/delete-movie', (req,res) =>
{
    const  movie = [{ id: 1, name: "Inception", year: 2010 },
    { id: 2, name: "Avatar", year: 2009 }]
  res.send(movie)
})


app.listen(PORT, () =>
{
    console.log(`Server Running at port ${PORT}`);
    
})