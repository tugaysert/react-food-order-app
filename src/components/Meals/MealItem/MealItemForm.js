import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
//label = 'Amount' type='number' min='0' step='1'
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
