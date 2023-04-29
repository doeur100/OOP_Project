import { Bag } from "../../bag/Bag";
import { Gate } from "../../location/Gate";
import { Meal } from "../../meal/Meal";
import { Gender, Person } from "../Person";

export class Passenger extends Person{
    private bag: Bag;
    public meals?: Meal[] = [];
    private gate:Gate;
    constructor(
        first_name: string, 
        last_name: string, 
        age: number,
        gender:Gender,
        bag: Bag,
        gate:Gate) {
            super(
                first_name,
                last_name,
                age,
                gender
            );
            this.bag = bag;
            this.gate = gate;
    }
    addMeal(meal: Meal){
        this.meals?.push(meal);
    }
};