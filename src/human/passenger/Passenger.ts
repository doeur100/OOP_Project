import { Bag } from "../../bag/Bag";
import { Meal } from "../../meal/Meal";
import { Gender, Person } from "../Person";

export class Passenger extends Person{

    private bag: Bag;
    public meals?: Meal[] = [];
    constructor(first_name: string, last_name: string, age: number,gender:Gender, bag: Bag){
        super(first_name,last_name,age,gender);
        this.bag = bag;
    }
    addMeal(meal: Meal){
        this.meals?.push(meal);
    }
};