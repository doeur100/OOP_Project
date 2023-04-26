export enum Gender {
    MALE,
    FEMALE,
};
export abstract class Person{
    private first_name: string;
    private last_name: string;
    private age: number;
    constructor(first_name: string, last_name: string, age: number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    addPerson(){}
};