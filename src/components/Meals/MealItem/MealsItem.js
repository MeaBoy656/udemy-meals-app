import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
import CartContext from "../../../store/cart-context";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const addItemHandler = (e) => {
    e.preventDefault()
    ctx.addItem({...props})
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onSubmit={addItemHandler}/>
      </div>
    </li>
  );
};

export default MealsItem;
