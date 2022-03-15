import { Payload } from './Payload';

import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";


export class Rocket  {
   name: string;
   totalCapacityKg: number;
   cargoItems : Cargo[] =[];
   astronauts: Astronaut[] = [];;

    constructor( name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        

    }
    sumMass(items: Payload[]): number{
       let myTotalMass = 0;
       for (let i=0; i<items.length; i++) {
           myTotalMass += items[i].massKg;
       }
       return myTotalMass;
    }
    currentMassKg(): number{
        let cargoMasstotal = this.sumMass(this.cargoItems);
        let astronautMasstotal = this.sumMass(this.astronauts);
        let massTotal = cargoMasstotal + astronautMasstotal;
        return massTotal;

    }
    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;


    }
    addCargo(cargo: Cargo): boolean{
        let itCanaddIt = this.canAdd(cargo);
        if (itCanaddIt){
            this.cargoItems.push(cargo);
            return true;

        }
        else {
            return false;
        }

    }
    addAstronaut(astronaut: Astronaut): boolean{
        let itCanaddIt = this.canAdd(astronaut);
        if (itCanaddIt){
            this.astronauts.push(astronaut);
            return true;

        }
        else {
            return false;
        }

    } 

    }
