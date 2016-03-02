//Nashia Amourdon
/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        public firstCubeRotation:number;
        public secondCubeRotation:number;
        public thirdCubeRotation:number;
        public fourthCubeRotation:number;
        public fifthCubeRotation:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(firstCubeRotation:number,secondCubeRotation:number,thirdCubeRotation:number,fourthCubeRotation:number,
         fifthCubeRotation:number) {
             this.firstCubeRotation= firstCubeRotation;
             this.secondCubeRotation= secondCubeRotation;
             this.thirdCubeRotation=thirdCubeRotation;
             this.fourthCubeRotation= fourthCubeRotation;
             this.fifthCubeRotation=fifthCubeRotation;

        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
