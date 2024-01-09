export class User{
    id?: number;
    waterPoints: number;
    numberOfSeeds: number;
    cuttingPoints: number;

    constructor(){
        this.waterPoints = 0;
        this.numberOfSeeds = 0;
        this.cuttingPoints = 0;
    }

    toString() : string {
        return `User { id: ${this.id}, waterPoints: ${this.waterPoints}, numberOfSeeds: ${this.numberOfSeeds}, cuttingPoints: ${this.cuttingPoints} }`;
    }
}