import React from 'react'
import PokemonCard from '../components/PokemonCard'
import Navbar from '../components/Navbar'
import { Box,Container } from '@mui/system'
import { Grid } from '@mui/material'
import axios from "axios"
import { useState,useEffect } from 'react'

export default function Home() {
  
  const [pokemons,setPokemons] = useState([])

  useEffect(() => {
    
    getPokemon()

  },[])
  
const getPokemon = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
  .then((res) => setPokemons(res.data.results))
  .catch((err) => console.log(err))
}
  return (
    <>
      <Navbar/>
        <Container maxWidth='xl'>
          <Grid container>
              {pokemons.map((pokemon,key) => (
                <Grid item xs={3} key={key}>
                <PokemonCard name={pokemon.name}/>
              </Grid>
              ))}
          </Grid>
        </Container>
    </>
  )
}
