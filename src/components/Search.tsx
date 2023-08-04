
import { BsSearch } from 'react-icons/bs';
import {useState} from 'react'
import classes from './Search.module.css'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search=({loadUser}: SearchProps)=> {
   const [userName, setUserName]= useState("");

    return (
        <div className={classes.search}>
            <h2>Busque por um usuario:</h2>
            <p>Conheça seus melhores projetos</p>
            <div className={classes.search_container}>
                <input type="text" placeholder='Digite um usuario' onChange={(e)=> setUserName(e.target.value)} />
                
                <button onClick={()=>loadUser(userName)}><BsSearch /></button>
            </div>
        </div>
    )
}

export default Search