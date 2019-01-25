import {Guerrier} from './partials/_guerrier.js';
import {Mage} from './partials/_mage.js';
import {Archer} from './partials/_archer.js';
import {Boss} from './partials/_boss.js';


let totalHp = 200;

let choixNom,choixHp,choixAtq;

choixNom = prompt('Choisisez le nom de votre guerrier');
choixHp = prompt(`Choisisez les HP de ${choixNom} (HP à répartir restants : ${totalHp})`);
while(choixHp>totalHp){
    choixHp = prompt(`! Pas assez de HP restants ! Choisisez les HP de ${choixNom} (HP à répartir restants : ${totalHp})`);

}
totalHp -= choixHp;

let guerrier = new Guerrier(choixNom,choixHp,100,100);

choixNom = prompt('Choisisez le nom de votre mage');
choixHp = prompt(`Choisisez les HP de ${choixNom} (HP à répartir restants : ${totalHp})`);
while(choixHp>totalHp){
    choixHp = prompt(`! Pas assez de HP restants ! Choisisez les HP de ${choixNom} (HP à répartir restants : ${totalHp})`);

}
totalHp -= choixHp;


let mage = new Mage(choixNom,choixHp,100,100);

choixNom = prompt('Choisisez le nom de votre archer');
choixHp = prompt(`Choisisez les HP de ${choixNom} (HP à répartir restants : ${totalHp})`);
while(choixHp>totalHp){
    choixHp = prompt(`! Pas assez de HP restants ! Choisisez les HP de ${choixNom} (HP à répartir restants : ${totalHp})`);

}
totalHp -= choixHp;


let archer = new Archer(choixNom,choixHp,100,100);


console.log(guerrier);
console.log(mage);
console.log(archer);