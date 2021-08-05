import { Customer } from "./Customer";
import { Vehicle } from "./Vehicle";

export class Booking{
    bookingId = "";
    bookingDateTime = "";
    boardingPoint = "";
    dropPoint = "";
    noOfPassengers = "";
    fare = "";
    status = "";
    vehicle = new Vehicle();
    customer = new Customer();

}