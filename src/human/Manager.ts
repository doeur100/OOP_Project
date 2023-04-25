import { Person } from "./Person";

export class Manager extends Person{
    private salary: number;
    constructor(salary: number, first_name: string, last_name: string, age: number){
        super(first_name,last_name,age);
        this.salary = salary;
    }
};