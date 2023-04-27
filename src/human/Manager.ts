import { Gender, Person } from "./Person";

export class Manager extends Person{
    private salary: number;
    constructor(salary: number, first_name: string, last_name: string, age: number,gender:Gender){
        super(first_name,last_name,age,gender);
        this.salary = salary;
    }
};