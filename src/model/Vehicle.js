import { Driver } from "./Driver";
import { VehicleRoute } from "./VehicleRoute";

export class Vehicle{
    vehicleId = '';
    vehicleNo = '';
    vehicleName = '';
    sittingCapacity = '';
    vehicleType = '';
    farePerKm = '';
    journeyDateTime = '';
    status = '';
    route = new VehicleRoute();
    driver = new Driver();
}