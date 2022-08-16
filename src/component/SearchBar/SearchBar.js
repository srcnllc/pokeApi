import React from 'react'
import '../SearchBar/SearchBar.css';
import logo from '../Logo/logo.png'
import poketop from '../Logo/poketop.png'
import {Link} from 'react-router-dom'


function SearchBar(props) {
  return (
    <div className='search'>
      <Link to={'/PokeApi'}>
        <img height={60}  src={logo} alt={logo} />
        </Link>
        <input type={'text'} placeholder={'Pokemon Search'} onChange={props.typingStart}/>
        <img height={60}  src={poketop} alt={poketop} />
    </div>
  )
}

export default SearchBar