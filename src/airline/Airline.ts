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
    //get location of gate
    getGate(flightNumber:string){
        for(let listFlight of this.flights){
            if(listFlight["flight_number"] === flightNumber){
                for(let gate of this.gates){
                    for(let listGate of listFlight["passengers"]){
                        if(listGate["gate"]["gate_number"] === gate["gate_number"]){
                            return gate["gate_number"];
                        }
                    }
                };
            }
        }
    }
    //get flight
    getFlights(date:string){
       let listFlights = []
        for(let listFlight of this.flights){
            if(listFlight["date_departure"] === date){
                listFlights.push(listFlight);
            }
        }
        return listFlights;
    }
    //get number of passenger
    getPassenger(){
      let  listPassenger = [];
        for(let listFilght of this.flights) {
            listPassenger.push(listFilght["passengers"]);
        }
        return listPassenger;
    }
};