export default class Formation {
    _nom: string;
    _description:string;
    _prix:number;
    _dateDebut:Date;
    _dateFin:Date;

    constructor(nom: string, description:string, prix:number, dateDebut:Date, dateFin:Date){
      this._nom = nom;
      this._description = description;
      this._prix = prix;
      this._dateDebut = dateDebut;
      this._dateFin = dateFin;
    }

    get nom(): string{
      return this._nom
    }

    set nom(nom:string){
      this._nom = nom;
    }

    get description():string {
      return this._description;
    }

    set description(description:string){
      this._description = description;
    }

    get prix() {
      return this._prix;
    }

    set prix(prix:number){
      this._prix = prix;
    }

    get dateDebut() {
      return this._dateDebut;
    }

    set dateDebut(dateDebut:Date){
      this._dateDebut = dateDebut;
    }
    get dateFin() {
      return this._dateFin;
    }

    set dateFin(dateFin:Date){
      this._dateFin = dateFin;
    }

}
