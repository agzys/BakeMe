import React from "react";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=6&query=${name}&type=dessert`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <>
      <section className='recipe-component'>
        <p className='searched-titile'>Your {params.search} recipes</p>
        <Search />
        <Grid>
          {searchedRecipes.map(item => {
            return (
              <RecipeComponents key={item.id}>
                <Link to={"/recipedetails/" + item.id}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </Link>
              </RecipeComponents>
            );
          })}
        </Grid>
      </section>
    </>
  );
}

const CategoryTitle = styled.p`
  color: white;
  font-size: 50px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
const Grid = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const RecipeComponents = styled.div`
  width: 300px;
  height: 240px;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.171);
  overflow: hidden;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: rgb(66, 64, 61);
  margin: 1rem;

  img {
    width: 100%;
    height: 75%;
    border-radius: 10px;
  }
  p {
    margin: 0.5rem;
  }
  img + p {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export default Searched;
