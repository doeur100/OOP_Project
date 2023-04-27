import { Bag } from "../../bag/Bag";
import { Person } from "../Person";

export class Passenger extends Person{

    private bag: Bag;
    constructor(first_name: string, last_name: string, age: number, bag: Bag){
        super(first_name,last_name,age);
        this.bag = bag;
    }
};