export enum Gender {
    MALE,
    FEMALE,
};
export abstract class Person{
    private first_name: string;
    private last_name: string;
    private age: number;
    protected gender:Gender;
    constructor(
        first_name: string,
        last_name: string, 
        age: number,
        gender:Gender){
            this.first_name = first_name;
            this.last_name = last_name;
            this.age = age;
            this.gender = gender;
    }
};