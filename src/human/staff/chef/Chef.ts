import { Manager } from "../../Manager";

export class Chef extends Manager{
    constructor(salary: number, first_name: string, last_name: string, age: number){
        super(salary, first_name, last_name, age);
    }
};