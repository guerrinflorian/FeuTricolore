import { Vehicule } from "./Vehicule";

export class Velo extends Vehicule {
    protected reagirAuFeu(): void {
        console.log(`Vélo réagit au feu ${this.etatFeu}`);
    }
}
