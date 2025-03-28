En este apartado se encuentra la descripcion de script 
Ejercicio basado en las listas enlazadas a travez de node js, en la cual esta cuenta con metodos de buscar, eliminar, agregar, eliminar duplicados y invertir los datos de las listas.
Asi como la implementacion de console.assert con el fin de realizar pruebas o filtros dentro del script, 
este mismo al fallar o detectar algun error al ejecutar indicara en cual es el motivo.

los metodos agregados son los siguientes 

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


// Instanciando el metodo invertir 

lista.invertir();
console.log("\nLista invertida:");
lista.visualizar()

//Ejecucion del metodo invertir
C:\Users\Oscar Monroy\Downloads> node listaEnlazada.js
Lista inicial:
1 2 3 4 6 6 6

Después de insertar 5 después del 2:
1 2 5 3 4 6 6 6

Después de eliminar el 5:
1 2 3 4 6 6 6

Después de eliminar la cabeza (1):
2 3 4 6 6 6

Lista invertida:
6 6 6 4 3 2


Representación toString:
=> 6 => 4 => 3 => 2 => null



