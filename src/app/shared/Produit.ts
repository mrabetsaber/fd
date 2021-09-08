export class Produit {
    id? : number;
    nom? : string;
    description? : string;
    prix? : number;
    url? : string;

    constructor(args: Produit = {}){
        this.nom = args.nom;
        this.description = args.description;
        this.prix = args.prix;
        this.url = args.url;
    }
}