import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";

export const Header = () => {
  return (
    <>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
};
