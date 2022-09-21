import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onToggleCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
};
