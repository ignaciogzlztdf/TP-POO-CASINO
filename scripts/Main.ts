/*
CASINO
Generar un programa en cual se puedan realizar
apuestas dentro de un casino

REQUERIMIENTOS
1-Tiene un juego tragamonedas que tiene distintas variantes
siempre cumpliendo una misma funcionalidad, que dependen
de la temática, del valor de apuesta y de la probabilidad de
ganar. Deberán hacer 2 variantes (herencia).
2-Debe tener un mínimo de 2 juegos elegidos por ustedes.
Cada uno con los valores de apuesta y la probabilidad de
ganar.
3-La información de los juegos debe existir en un archivo de
texto y debe ser leída al momento de iniciar el programa.
4-El casino deberá proveer funcionalidades para elegir un
juego y realizar una apuesta, obteniendo el resultado de la
misma (gano x plata o perdió).
5-Los resultados de cada juego deberán ser guardados en un
archivo de texto para fines estadísticos. Cada juego debe
tener su propio archivo.
6-Pueden agregar todo lo que consideren necesario para el
correcto funcionamiento de su programa, siempre que se
cumplan los requerimientos mínimos exigidos.
7-El casino debe ser un proyecto NPM nuevo y se debe
desarrollar en un branch específico llamado casino-poo.
8-Debe tener un archivo PDF con una descripción del
programa y los diagramas de clases correspondientes.
9-Se debe realizar en grupos de MÁXIMO 3 integrantes
(pueden hacerlo de manera individual).

FECHA LÍMITE
La fecha límite de entrega es el MARTES 8 de noviembre a
las 23:59

PASOS
Persona: Podría almacenar en ella todo lo que quien ejecuta
el programa va obteniendo. Puede tener las casino chips, el dinero,
etc
1 chip = $10
Preguntar si puedo poner DNI en mayúsculas y
por qué salen en otro color

La idea sería solo llamar a casino en Main.
Que el casino maneje los juegos
Los logos presentaciones y bienvenidas van en main

ARCHIVOS TXT
let txtFile: string = fs.readFileSync(txtFileLocation, 'utf-8');
        //separa ese txt en elementos  y crea un arreglo de strings
1-Entrar al casino.
  a.Ejecutar acción de entrada al casino.
  b.Mientras no se vaya del casino, seguirá dentro de él.
    Mientras esté dentro, todo lo que ocurre dentro del casino
    debe funcionar, pero dejará de funcionar al salir.
  c.Una vez que entró se debe preguntar si se dirige a los
    juegos o al cashier.
  d.Ejecutar acción de salida del casino.
2-Canjear fichas.
  a.Las fichas del casino se llaman chips
  b.Acquire Chips (comprar fichas)
  c.Trade in Chips (canjear fichas por dinero)
3-Elegir un juego.
4-Comenzar a jugar.
  a.Seleccionar modo de juego.
  b.Apostar.
  c.Jugar.
  d.Recibir resultado del juego.
*/
import { Casino } from "./Casino";
import { Person } from "./Person";
import { SlotLuckyBoy } from "./SlotLuckyBoy";

let rls = require('readline-sync');

// let yourself = new Person("Ignacio","González",11111111,"04-08-2004",100);

// let chosenTopic:string = rls.question("Choose a number to select the game topic:" + "\n" + "[1] Lucky Boy" + "\n" + "[2] Lucky Man" + "\n" + "Your selection is: ");
// let slotsLuckyBoy = new SlotsLuckyBoy(chosenTopic,1000);


