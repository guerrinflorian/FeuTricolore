import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule {
    protected reagirAuFeu(): void {
        console.log(`Voiture réagit au feu ${this.etatFeu}`);
    }
}
