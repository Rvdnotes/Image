import React, { useState } from 'react'
import './App.css';
import Gallery from './Gallery'
import axios from 'axios';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  
  const changeHandler = e => {
    setSearch(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => setData(response.data.photos.photo))
  }
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <center>
      <form onSubmit={submitHandler}>
     <input type="text" value={search} onChange={changeHandler} /> <br/>
     <input type="submit" value="search"/>
     </form>
     <br />
      {data.length>=1?<Gallery data={data}/>: <h4>No Data Loaded</h4>}   
     </center>
    </div>
  );
}

export default Search;
