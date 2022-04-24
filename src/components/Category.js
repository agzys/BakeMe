import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Category () {
    return (
        <>
        <Link to="/cakes">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">Cakes</Button>
        </Link>
        <Link to='/dairyfree'>
        <Button buttonStyle="btn--outline" buttonSize="btn--large">Dairy Free</Button>
        </Link>
        <Link to='/glutenfree'>
        <Button buttonStyle="btn--outline" buttonSize="btn--large">Gluten free</Button>
        </Link>
        </>

    )
}

export default Category;