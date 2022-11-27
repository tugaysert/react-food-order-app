import classes from "./MealItem.module.css";
import Card from "../../UI/Card/Card";

/* id: 'm3',
name: 'Barbecue Burger',
description: 'American, raw, meaty',
price: 12.99, */

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes["meal h3"]}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default MealItem;