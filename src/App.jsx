import { useState, useEffect } from 'react'
import { Route, Routes, Link } from "react-router-dom"
import './App.css'
import SearchForm from './components/SearchForm';
import RandomList from './components/random image/RandomList';
import SearchList from './components/search image/SearchList';

function App() {
    const [randomImageData, setRandomImageData] = useState([]);
    const [searchImageData, setSearchImageData] = useState([]);

    useEffect(()=>{
      fetchDataRandom();
    },[])

    const fetchDataRandom = () =>{
      fetch(`https://api.unsplash.com/photos/random?count=20&client_id=ZQ-mg14LoHUYIJrOLvBa4KgsVBvAqyxfFAguPQElamU`)
      .then(response =>{
        return response.json()
      })
      .then(data =>{
        setRandomImageData(data);
      })
    }

    const fetchDataSearch = (keyword) =>{
      fetch(`https://api.unsplash.com/search/photos?query=${keyword}&page=10&client_id=ZQ-mg14LoHUYIJrOLvBa4KgsVBvAqyxfFAguPQElamU`)
      .then(response =>{
        return response.json()
      })
      .then(data =>{
        setSearchImageData(data.results);
      })
    }

    console.log(randomImageData)
    console.log(searchImageData)


  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/search">Search Pictures</Link>
          </li>
          <li>
            <Link to="/random">Random Pictures</Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path="/search" element={<div><SearchForm onUpdate={fetchDataSearch} /><SearchList searchImageData={searchImageData} /></div>} />
      <Route path="/random" element={<RandomList randomImageData={randomImageData} />} />
    </Routes>
    </>
  )
}

export default App
