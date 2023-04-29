import { Manager } from "../Manager";
import { Gender } from "../Person";
export class Flight_attendant extends Manager{
    constructor(
        salary: number, 
        first_name: string, 
        last_name: string, 
        age: number,
        gender:Gender){
            super(
                salary,
                first_name, 
                last_name, 
                age,
                gender
            );
    }
};