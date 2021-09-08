export class Commande {
    id? : number;
    nom? : string;
    prenom? : string;
    e_mail? : number;
    telephone? : number;
    quantite?: number;
    nomProduit?: string;
    prixApayer?: number;

    constructor(args: Commande = {}){
        this.nom = args.nom;
        this.prenom = args.prenom;
        this.e_mail = args.e_mail;
        this.telephone = args.telephone;
        this.quantite = args.quantite;
        this.nomProduit = args.nomProduit;
        this.prixApayer = args.prixApayer;
    }
}