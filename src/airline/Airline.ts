import { Manager } from "../human/Manager";
import { Gate } from "../location/Gate";
import { Flights } from "./Flights";

export class Airline {
    private airline_name: string;

    public flights:Flights[] = [];
    private gates: Gate[] = [];
    protected manager: Manager[] = [];
    constructor (airline_name: string){
        this.airline_name = airline_name;
    }
    addFlight(flight:Flights){
        this.flights.push(flight);
    }
    addGate(getes: Gate){
        this.gates.push(getes);
    }
    addManager(manager: Manager){
        this.manager.push(manager);
    }
};