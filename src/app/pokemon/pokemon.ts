import { Stats } from "./interface/stats";
import { Types } from "./interface/types";

export class Pokemon {pokedexId!: number;
    name!: string;
    stats!: Stats;
    image!: string;
    apiTypes!: Types[];



    constructor() {
    }
}