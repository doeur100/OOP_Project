import { Meal } from "../../meal/Meal";
import { Manager } from "../Manager";

export class Chef extends Manager{
    protected meals: Meal[] = [];
    constructor(salary: number, first_name: string, last_name: string, age: number){
        super(salary, first_name, last_name, age);
    }
    addMeal(meals: Meal){
        this.meals.push(meals);
    }
};