import { Passenger } from "../human/passenger/Passenger";

export class Gate {
    private gate_number: number;

    passenger: Passenger;
    constructor(gate_numer: number, passenger: Passenger){
        this.gate_number = gate_numer;
        this.passenger = passenger;
    }
};