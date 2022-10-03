class Card{
    constructor(nombre, costo){
        this.nombre=nombre;
        this.costo=costo;
    }
}

class NinjaCard extends Card{
    constructor(nombre,costo,poder,resiliencia){
        super (nombre,costo);
        this.poder=poder;
        this.resiliencia=resiliencia;
    }
    atacar(ninjaAtacado){
        ninjaAtacado.resiliencia-=this.poder
        if (ninjaAtacado.resiliencia<=0){
            console.log("El ninja ha sido derrotado");
        }

    }
}

class EffectCard extends Card{
    constructor(nombre,costo,texto,efecto,magnitud){
        super(nombre,costo);
        this.texto=texto
        this.efecto=efecto;
        this.magnitud=magnitud;
    }
    cartaEfecto(ninja){
        ninja[this.efecto]+=this.magnitud;
        
    }
    
}

const ninjaRojo = new NinjaCard ("Ninja Cinturon Rojo",3,3,4);
const algoritmoDifícil = new EffectCard ("Algoritmo Difícil",2,"aumentar la resistencia del objetivo en 3","resiliencia",3);
algoritmoDifícil.cartaEfecto(ninjaRojo); 
console.log(ninjaRojo);

const ninjaNegro = new NinjaCard ("Ninja Cinturon Negro",4,5,4);
const rechazoPromesa = new EffectCard ("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","resiliencia",-2);
rechazoPromesa.cartaEfecto(ninjaRojo);
console.log(ninjaRojo);

const programacionPareja = new EffectCard ("Programación en pareja",3,"aumentar el poder del objetivo en 2","poder",2)
programacionPareja.cartaEfecto(ninjaRojo);
console.log(ninjaRojo);
ninjaRojo.atacar(ninjaNegro);
console.log(ninjaNegro)
