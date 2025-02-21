import React from 'react'
import CharacterQuotes from "./CharacterQuotes"
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading}) => {
  return isLoading ? <Spinner /> : 
    <section className='cards'>

        {items.map(item => (
           <CharacterQuotes key={item.char_id} item={item}></CharacterQuotes> 
        ))}

    </section>
  


}

export default CharacterGrid
