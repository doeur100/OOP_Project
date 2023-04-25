import { Person } from "../Person";

export class Passenger extends Person{
    constructor(first_name: string, last_name: string, age: number){
        super(first_name,last_name,age);
    }
};