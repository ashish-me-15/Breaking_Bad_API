import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css"
import Header from "./Components/ui/Header";
import CharacterQuotes from "./Components/Characters/CharacterGrid"
import Search from "./Components/ui/Search"

const App = () => {
    
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('');

  useEffect(() => {

    const fetchItems = async () => {
      const result = await axios (`https://api.breakingbadquotes.xyz/v1/quotes/5?author=${query}`)

      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();

  },[query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterQuotes items={items} isLoading={isLoading} />
     
    </div>
  );
}

export default App;
