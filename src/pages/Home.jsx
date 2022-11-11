import React from 'react'
import PokemonCard from '../components/PokemonCard'
import Navbar from '../components/Navbar'
import { Container } from '@mui/system'

export default function Home() {
  return (
    <>
      <Navbar/>
        <Container>
          <PokemonCard/>
          <PokemonCard/>
          <PokemonCard/>
          <PokemonCard/>
        </Container>
    </>
  )
}
