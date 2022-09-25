class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
        
    }
    sayName(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
    showStats(){
        console.log(`nombre: ${this.nombre}, salud: ${this.salud}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud+=10;
        return this.salud;
    }
}
const ninja1 = new Ninja('Seba', 100);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();