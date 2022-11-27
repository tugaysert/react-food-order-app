import { Fragment } from "react";
import AvaliableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";


const Meals = props => {

    return <Fragment>
        <MealsSummary></MealsSummary>
        <AvaliableMeals></AvaliableMeals>
    </Fragment>

}

export default Meals;