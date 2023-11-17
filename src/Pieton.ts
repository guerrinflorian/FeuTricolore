import { Observer } from "./Observer";

export class Pieton implements Observer {
    public notifier(etatFeu: string): void {
        console.log(`Piéton réagit au feu ${etatFeu}`);
    }
}
