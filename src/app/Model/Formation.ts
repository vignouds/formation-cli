export default class Formation {
    _nom: string;
    _description:string;

    constructor(nom: string, description:string){
      this._nom = nom;
      this._description = description;
    }

    get nom(): string{
      return this._nom
    }

    set nom(nom:string){
      this._nom = nom;
    }

    get description() {
      return this._description;
    }

    set description(description:string){
      this._description = description;
    }
}
