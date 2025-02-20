import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css"
import Header from "./Components/ui/Header";

const App = () => {
    
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="container">
      <Header />
     
    </div>
  );
}

export default App;
