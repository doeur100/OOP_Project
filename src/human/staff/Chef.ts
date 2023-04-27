import { Meal } from "../../meal/Meal";
import { Manager } from "../Manager";
import { Gender } from "../Person";

export class Chef extends Manager{
    protected meals: Meal[] = [];
    constructor(salary: number, first_name: string, last_name: string, age: number,gender:Gender){
        super(salary, first_name, last_name, age,gender);
    }
    addMeal(meals: Meal){
        this.meals.push(meals);
    }
};