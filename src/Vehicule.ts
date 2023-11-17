import { Observer } from "./Observer";

export abstract class Vehicule implements Observer {
    protected etatFeu: string = "";

    public notifier(etatFeu: string): void {
        this.etatFeu = etatFeu;
        this.reagirAuFeu();
    }

    protected abstract reagirAuFeu(): void;
}
