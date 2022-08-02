import React from "react";
import { useEffect, useState } from "react";
//import styled from 'styled-components';
import { useParams } from "react-router-dom";
import "./RecipeDetails.scss";

function RecipeDetails() {
  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <section className='recipe-component'>
        <div className='recipe-details'>
          <div className='recipe-picture-ingrediens'>
            <img
              className='picture'
              src={details.image}
              alt={details.title}></img>
            <div className='recipe-info'>
              <p className='recipe-info-title'>{details.title}</p>
              <p className='recipe-info-text'>
                Time to prepare: {details.readyInMinutes}min | Servings:{" "}
                {details.servings}
              </p>
              <div className='recipe-ingrediens'>
                <ul className='recipe-ingrediens-items'>
                  {details.extendedIngredients?.map(
                    (
                      ingredient //optional chaining
                    ) => (
                      <li key={ingredient.id}>{ingredient.original}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className='recipe-instructions'>
            <p className='recipe-instructions-title'>Instructions</p>
            <p
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              className='recipe-instructions-text'></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeDetails;
