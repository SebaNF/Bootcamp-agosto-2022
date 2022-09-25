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

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre)
        this.nombre = nombre;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('Si no sabes algo googlealo');
    }
}

const sensei1 = new Sensei('Sr. Miyagi');
sensei1.speakWisdom();
sensei1.showStats();