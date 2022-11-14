import React from 'react'
import PokemonCard from '../components/PokemonCard'
import Navbar from '../components/Navbar'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import axios from "axios"
import { useState,useEffect } from 'react'

export default function Home() {
  
  const [pokemons,setPokemons] = useState([])

  useEffect(() => {
    
    getPokemon()

  },[])
  
const getPokemon = async () => {
//Pegando o valor de dentro da URL
  let endpoints = [];
  for (let i = 1;i <= 50;i++) {
  endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  };    
  let response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
  
  //axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
  //.then((res) => setPokemons(res.data.results))
  //.catch((err) => console.log(err))
}
  return (
    <>
      <Navbar/>
      <Container maxWidth='xl'>
        <Grid container>
          {pokemons.map((pokemon,key) => (
            <Grid item xs={3} key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
};
