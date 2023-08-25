import { useEffect, useState } from "react";







const Search =({setsearch})=>{


const getsearch=(e)=>{
  setsearch(e.target.value);
}

  return (<div className="search">
   <input type="text" placeholder="search..."  onChange={(e)=>{getsearch(e)}}/>
  </div>)
}
 
export default Search;