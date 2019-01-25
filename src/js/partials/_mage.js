export class Mage {
    constructor(nom,hp,atq,mana){
        this.nom=nom;
        this.hp=hp;
        this.atq=atq;
        this.mana=mana;

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