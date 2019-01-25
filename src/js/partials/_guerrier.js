export class Guerrier {
    constructor(nom,hp,atq,rage){
        this.nom=nom;
        this.hp=hp;
        this.atq=atq;
        this.rage=rage;

        this.attaquer = function(){
            this.atq *= 1.4;
            this.hp *= 0.75;
        }

        this.defense = function(){
            this.atq *= 0.5;
            this.hp *= 2.5;
        }
    }
}