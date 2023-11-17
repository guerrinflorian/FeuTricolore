import { Observer } from "./Observer";

export class FeuTricolore {
    private observers: Observer[] = [];
    private etat: string = "rouge"; 

    public attacher(observer: Observer): void {
        this.observers.push(observer);
    }

    public detacher(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public getEtat(): string {
        return this.etat;
    }

    public notifier(): void {
        for (const observer of this.observers) {
            observer.notifier(this.etat);
        }
    }

    changerEtat(nouvelEtat: string) {
        this.etat = nouvelEtat;
        console.log(`L'état du feu est maintenant : ${this.etat}`);
    }
}
