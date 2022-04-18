import React from "react";
import '../App.css';
import "./GetStarted.scss";
import './Button.scss';
import { Button } from "./Button";
import { Link } from "react-router-dom";

function GetStarted () {

    return (
        <>
        <section className="get-started-component">
        <div className="get-started-all-text">
        <h2 className="get-started-title">Find perfect recipe</h2>
        <p className="get-started-text">How it works?</p>
        <p className="get-started-text">You can search by name of cake, or you can just put name of main ingridien. If you want you can choose from our filters. Have fun and eat well!</p>
        </div>
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
         </section>
        </>
    );
}
export default GetStarted;