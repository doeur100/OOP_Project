export class Route {
    public route_arrival: string;
    public route_departure: string;
    constructor(
        route_arrival: string, 
        route_departure: string) {
            this.route_arrival = route_arrival;
            this.route_departure = route_departure;
    }
};