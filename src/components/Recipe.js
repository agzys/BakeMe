import React from "react";
import './Recipe.scss'
import './Button.scss';
import Popular from "./Popular";
import Category from "./Category";
import Search from "./Search";

function Recipe () {
    return(
        <>
        <section className="recipe-component">
        <h3 className="recipe-title">Search for recipe</h3>
        <Search />
<div className="category-section">
    <Category />
</div>
        <Popular />
        </section>
        </>
    )
}
export default Recipe;