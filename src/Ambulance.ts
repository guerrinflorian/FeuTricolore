import { Vehicule } from "./Vehicule";

export class Ambulance extends Vehicule {
    protected reagirAuFeu(): void {
        console.log(`Ambulance réagit au feu ${this.etatFeu}`);
    }
}
