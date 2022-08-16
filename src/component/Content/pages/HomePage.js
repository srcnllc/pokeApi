import React  from 'react';
import '../pages/HomePage.css';
import {Link} from 'react-router-dom'
export default function HomePage(props) {
  
  return (

      <div className='pokeMain'>
        {props.pokemon.map((item,index)=>{
          return(
            <Link style={{textDecoration:'none'}} key={index} to={`/PokeApi/${item.name}`}>
              <div className='pokeCart'>
                  <img src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} alt={item.name} />
                  {item.name}
              </div>
              </Link>
          )
        })}
      </div>

  )
}
