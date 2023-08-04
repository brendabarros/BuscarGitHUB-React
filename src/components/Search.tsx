
import { BsSearch } from 'react-icons/bs';
import {useState} from 'react'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search=({loadUser}: SearchProps)=> {
   const [userName, setUserName]= useState("");

    return (
        <div>
            <h2>Busque por um usuario:</h2>
            <p>Conheça seus melhores projetos</p>
            <div>
                <input type="text" placeholder='Digite um usuario' onChange={(e)=> setUserName(e.target.value)} />
                
                <button onClick={()=>loadUser(userName)}><BsSearch /></button>
            </div>
        </div>
    )
}

export default Search