import React from "react";
import "./GetStarted.scss";
import "./Button.scss";
import Category from "./Category";
import Search from "./Search";

function GetStarted() {
  return (
    <>
      <section className='get-started-component'>
        <div className='get-started-all-text'>
          <h2 className='get-started-title'>Find perfect recipe</h2>
          <p className='get-started-text'>How it works?</p>
          <p className='get-started-text'>
            You can search by name of cake, or you can just put name of main
            ingridien. If you want you can choose from our filters. Have fun and
            eat well!
          </p>
        </div>
        <Search />
        <div className='category-section'>
          <Category />
        </div>
      </section>
    </>
  );
}
export default GetStarted;
