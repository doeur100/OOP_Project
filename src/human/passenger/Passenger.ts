import { Bag } from "../../bag/Bag";
import { Meal } from "../../meal/Meal";
import { Person } from "../Person";

export class Passenger extends Person{

    private bag: Bag;
    public meals?: Meal[] = [];
    constructor(first_name: string, last_name: string, age: number, bag: Bag){
        super(first_name,last_name,age);
        this.bag = bag;
    }
    addMeal(meal: Meal){
        this.meals?.push(meal);
    }
};