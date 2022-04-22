import React from "react";
import './Recipe.scss'
import './Button.scss';
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Popular from "./Popular";

function Recipe () {
    return(
        <>
        <section className="recipe-component">
        <h3 className="recipe-title">Search for recipe</h3>
        <div className="check">
            <input type="search"/>
            <Link to='/recipes'>
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          Find Recipe
        </Button>
        </Link>
         </div>
<div className="category-section">
    <Link to="/quick-recipes">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">Quick recipes</Button>
        </Link>
        <Link to='/dairy-free'>
        <Button buttonStyle="btn--outline" buttonSize="btn--large">Dairy Free</Button>
        </Link>
        <Link to='/gluten-free'>
        <Button buttonStyle="btn--outline" buttonSize="btn--large">Gluten free</Button>
        </Link>
</div>
        <Popular />
        </section>
        </>
    )
}
export default Recipe;