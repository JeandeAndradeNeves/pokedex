import React from 'react';
import PokemonCard from '../components/PokemonCard';
import Navbar from '../components/Navbar';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import axios from "axios";
import { useState,useEffect } from 'react';

export default function Home() {
  
  const [pokemons,setPokemons] = useState([]);

  useEffect(() => {
    
    getPokemon();

  },[])

//Função que pega o valor de dentro da URL
const getPokemon = () => {
  let endpoints = [];
  for (let i = 1;i <= 54;i++) {
  endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  };    
  axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  
  //axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
  //.then((res) => setPokemons(res.data.results))
  //.catch((err) => console.log(err))
}
//Função que filtra o pokemon pesquisado e mostra na tela.
const pokemonFilter = (name) => {
  let filteredPokemons = [];
  if(!name){
    getPokemon();
  }
  for(let i in pokemons){
    if(pokemons[i].data.name.includes(name)){
       filteredPokemons.push(pokemons[i]);
    }
  }
  setPokemons(filteredPokemons);
}

  return (
    <>
      <Navbar pokemonFilter={pokemonFilter}/>
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          {pokemons.map((pokemon,key) => (
            <Grid item xs={2} key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
};
