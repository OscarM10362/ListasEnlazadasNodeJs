class Nodo {
    constructor(dato, enlace = null) {
        this.dato = dato;
        this.enlace = enlace;
    }

    toString() {
        return `${this.dato} => ${this.enlace}`;
    }

    leerDato() {
        return this.dato;
    }

    siguiente() {
        return this.enlace;
    }
}

class Lista {
    constructor() {
        this.primero = null;
    }

    leerPrimero() {
        return this.primero;
    }

    insertarCabezaLista(entrada) {
        const nuevo = new Nodo(entrada, this.primero);
        this.primero = nuevo;
    }

    insertarLista(anterior, entrada) {
        const nuevo = new Nodo(entrada, anterior.enlace);
        anterior.enlace = nuevo;
    }

    eliminar(entrada) {
        let actual = this.primero;
        let anterior = null;
        
        while (actual !== null && actual.dato !== entrada) {
            anterior = actual;
            actual = actual.enlace;
        }
        
        if (actual !== null) {
            if (actual === this.primero) {
                this.primero = actual.enlace;
            } else {
                anterior.enlace = actual.enlace;
            }
        }
    }

    buscarLista(destino) {
        let indice = this.primero;
        while (indice !== null) {
            if (indice.dato === destino) {
                return indice;
            }
            indice = indice.enlace;
        }
        return null;
    }

    visualizar() {
        let n = this.primero;
        const elementos = [];
        while (n !== null) {
            elementos.push(n.dato);
            n = n.enlace;
        }
        console.log(elementos.join(' '));
    }

    toString() {
        return `=> ${this.primero}`;
    }
	
	
	
	invertir() {
    let anterior = null; //se declara como null ya que no tendra nodo siguiente
    let actual = this.primero; //cabeza de la lista
    let siguiente = null;

    while (actual !== null) {       //recorre la lista
        siguiente = actual.enlace; // se guarda el siguiente nodo actual
        actual.enlace = anterior; // se invierte el enlace apuntando al nodo anterior
        anterior = actual;        // se mueve anterior al nodo actual
        actual = siguiente;      // se mueve actual al siguiente nodo
    }

    this.primero = anterior; // La nueva cabeza es el último nodo procesado
}
	
	eliminarDuplicados() {
    if (this.primero === null) return; // Revisa primero si no es una lista vacía

    const valoresUnicos = new Set(); // Almacena los valoresUnicos estos no podran ser modificados solamente en la agrupacion Set
    let actual = this.primero;
    let anterior = null;

    while (actual !== null) {                     //recorrido lista enlazada
        if (valoresUnicos.has(actual.dato)) {     //se evalua si el valor del nodo actual se encuentra almacenado en valoresUnicos
            // Eliminar nodo duplicado, actualizando el enlace del nodo anterior y apunte al nodo actual.
            anterior.enlace = actual.enlace;
            actual = actual.enlace; // Avanzar sin actualizar 'anterior'
        } else {
            // Registrar valor y avanzar
            valoresUnicos.add(actual.dato);
            anterior = actual;
            actual = actual.enlace;
        }
    }
}
	
	
}

const lista = new Lista();
//integracion de pruebas con console.assert()
 //prueba lista vacia
console.assert(lista.primero === null, "La lista tiene que estar vacia");

lista.insertarCabezaLista(6);
lista.insertarCabezaLista(6);
lista.insertarCabezaLista(6);
lista.insertarCabezaLista(4);
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);


// prueba insertar un dato erroneo en la cabeza
console.assert(lista.primero.dato === 1, "Error: La cabeza debería ser 1");


console.log("Lista inicial:");
lista.visualizar(); 


//prueba de ingreso del elemento 5 despues del 2
const nodo2 = lista.buscarLista(2);
if (nodo2) {
    lista.insertarLista(nodo2, 5);
	console.assert(nodo2.enlace.dato === 5, "Error: No se insertó 5 después del 2");
}

console.log("\nDespués de insertar 5 después del 2:");
lista.visualizar(); 

lista.eliminar(5);
console.log("\nDespués de eliminar el 5:");
lista.visualizar(); 



lista.eliminar(1);
console.log("\nDespués de eliminar la cabeza (1):");
lista.visualizar(); 

//Ejecucion del metodo invertir
lista.invertir();
console.log("\nLista invertida:");
lista.visualizar();

//ejecucion del metodo eliminarDuplicados
lista.eliminarDuplicados();
console.log("\nEliminacion de duplicados en la lista:");
lista.visualizar();




console.log("\nRepresentación toString:");
console.log(lista.toString()); 
















