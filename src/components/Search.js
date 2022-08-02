import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");

  const submitHandler = e => {
    e.preventDeafult();
  };
  return (
    <>
      <form onSubmit={submitHandler} className='check'>
        <FaSearch className='search-icon'/>
        <input
          onChange={e => setInput(e.target.value)}
          type='text'
          value={input}
        />
        <Link to={"/searched/" + input}>
          <Button
            className='btn-find-recipe'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            Find Recipe
          </Button>
        </Link>
      </form>
    </>
  );
}

export default Search;
