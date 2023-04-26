import { Ticket } from "./Ticket";

export class Booking {
    private ticket:Ticket;
    constructor(ticket:Ticket){
        this.ticket = ticket;
    }
}