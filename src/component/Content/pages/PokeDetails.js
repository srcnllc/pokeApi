import React,{useEffect, useState} from 'react';
import '../pages/PokeDetails.css';
import {useParams} from "react-router-dom";
import {MdTrendingUp} from "react-icons/md";
import {Link} from 'react-router-dom'
import axios from 'axios';


function PokeDetails() {
  let {pokemonName} = useParams();
  const [pokemonData,setPokemonData]=useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res=>{setPokemonData(res.data)
    })
  }, [pokemonName])
  console.log(pokemonData)
  return (
    <div className='pokeDetail'>
      <div className='title'>
        <h1 >{pokemonName.toUpperCase()}</h1>
        <Link to={'/PokeApi/'}>
            <span><MdTrendingUp/> </span>
        </Link>
      </div>
        <div className='pokeDetailCart'>
            <div className='pokeImg'>
                <img src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`} alt={pokemonName} />
            </div>
            <div className='pokeInfo'>
              <div className='bio'>
                <h3>Moves</h3>
                {pokemonData && pokemonData.moves.map((item,id)=>{
                      return(
                          <span>{item.move.name}</span>
                      )
                    })}
              </div>
              <div className='features'>
                <div className='stats'>
                  <h3>Stats</h3>
                    {pokemonData && pokemonData.stats.map((item,id)=>{
                      return(
                        <div key={id} style={{display:'flex'}}>
                          <span style={{width:150}}>{item.stat.name}</span>
                          <span>:  {item.base_stat}</span>
                        </div>
                      )
                    })}
                </div>
                <div className='abilities'>
                  <h3>Abilities</h3>
                    {pokemonData && pokemonData.abilities.map((item,id)=>{
                      return(
                        <div key={id}>
                          <span style={{width:150}}>{item.ability.name}</span>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PokeDetails