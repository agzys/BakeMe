import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Recipe.scss";
import { Link } from "react-router-dom";


function Popular () {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if(check){
        setPopular(JSON.parse(check));
    }else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dessert`
        );
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data);

    }
}



return (
    <>
    <CaruselCompoment>
            <h3>Popular Desserts</h3>
            <Splide options={{
            perPage: 3, pagination: false, drag: "free",
            }}>
            {popular.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                    <RecipeComponents>
                        <Link to={'/recipedetails/' + recipe.id}>
                        <img src={recipe.image}alt={recipe.title} />
                        <p>{recipe.title}</p>
                        <p>Time to prepare: {recipe.readyInMinutes} min</p>
                        <p>Servings: {recipe.servings}</p>
                        </Link>
                    </RecipeComponents>
                    </SplideSlide>
                )
            })}
            </Splide>
    </CaruselCompoment>
    </>
)
}
const CaruselCompoment = styled.div`
max-width: 1150px;

h3 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-size: 24px;
    color: rgb(66, 64, 61);
}
`;

const RecipeComponents = styled.div`
width: 360px;
height: 320px;
background-color: white;
border: 2px solid white;
border-radius: 10px;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.171);
overflow: hidden;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
color: rgb(66, 64, 61)
;

img {
    width: 100%;
    height: 65%;
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
export default Popular;