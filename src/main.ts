import { FeuTricolore } from "./FeuTricolore";
import { Voiture } from "./Voiture";
import { Velo } from "./Velo";
import { Ambulance } from "./Ambulance";
import { Pieton } from "./Pieton";

const feu = new FeuTricolore();
const voiture = new Voiture();
const velo = new Velo();
const ambulance = new Ambulance();
const pieton = new Pieton();

feu.attacher(voiture);
feu.attacher(velo);
feu.attacher(ambulance);
feu.attacher(pieton);

feu.changerEtat("vert");
feu.changerEtat("orange");
feu.changerEtat("rouge");
