export class Boss {
    constructor(nom,hp,atq){
        this.nom=nom;
        this.hp=hp;
        this.atq=atq;

        this.attaquer = function(){
            this.atq *= 1.4;
            this.hp *= 0.75;
        }
    }
}