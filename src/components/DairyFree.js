import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import "./Recipe.scss";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function DairyFree() {
  const { category: DairyFree } = useFetch(
    "DairyFree",
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&type=dessert&diet=ovo-vegetarian`
  );

  return (
    <>
      <section className='recipe-component'>
        <p className='category-title-dairy'>Dairy Free Desserts</p>
        <div className='category-section-smaller'>
          <Category />
        </div>
        <Grid>
          {DairyFree.map(result => {
            return (
              <RecipeComponents key={result.id}>
                <Link to={"/recipedetails/" + result.id}>
                  <img src={result.image} alt={result.title} />
                  <p>{result.title}</p>
                </Link>
              </RecipeComponents>
            );
          })}
        </Grid>
      </section>
    </>
  );
}
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

export default DairyFree;
