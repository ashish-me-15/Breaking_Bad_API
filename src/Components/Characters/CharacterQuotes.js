import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name :</strong> {item.author}
            </li>
           
            <li>
              <strong>Quotes:</strong> {item.quote}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem