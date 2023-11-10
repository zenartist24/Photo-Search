import React from 'react'
import {useState} from "react"

function SearchForm({onUpdate}) {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) =>{
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onUpdate(keyword);
        setKeyword("");
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} placeholder="What would you like to see?" onChange={handleChange} style={{width: "200px"}} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm
