import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {
    Routes, 
    Route
  } from 'react-router-dom';
import '../Content/Content.css';
import HomePage from './pages/HomePage';
import PokeDetails from './pages/PokeDetails';

function Content(typing) {
    const [pokemon,setPokemon]=useState([]);

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
        .then(res=>{
            setPokemon(res.data.results.filter(pokemon=>pokemon.name.toUpperCase().includes(typing.typing.toUpperCase())))
        })
    },[typing])
  return (
    <div  className='conteiner'>
            <Routes>
                <Route exact path="/PokeApi/" element={<HomePage pokemon={pokemon}/>} />
                <Route path={`/PokeApi/:pokemonName`} element={<PokeDetails pokemon={pokemon}/>} />
            </Routes>
        
        
    </div>
  )
}

export default Content