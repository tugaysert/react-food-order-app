import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className= {classes.summary}>
      <h2 className={classes["summary h2"]}>Delicious Food, Delivered to you.</h2>
      <p>
        Choose your favorite meal from our broad selection of avaliable meals.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients.
      </p>
    </section>
  );
};

export default MealsSummary;
