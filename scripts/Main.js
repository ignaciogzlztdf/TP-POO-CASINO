"use strict";
exports.__esModule = true;
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
1-Entrada al casino.
  a.Ejecutar acción de entrada al casino.
  b.Mientras no se vaya del casino, seguirá dentro de él.
    Mientras esté dentro, todo lo que ocurre dentro del casino
    debe funcionar, pero dejará de funcionar al salir.
2-Selección del juego.
  a.Mientras esté dentro del casino se debe preguntar qué juego quiere jugar
    o si desea salir.
3-Comenzar a jugar.
  a.Se ejecuta el juego elegido.
  b.Apostar.
  c.Jugar.
  d.Recibir resultado del juego.
4-Hacer los diagramas
5-Revisar lo que tengo comentado en todos los archivos
6-Comentar el código

Recomendación
Cuando se elige el juego, se crea la instancia del juego
y luego se elimina
*/
var Casino_1 = require("./Casino");
// import { Person } from "./Person";
var SlotLuckyBoy_1 = require("./SlotLuckyBoy");
var SlotLuckyMan_1 = require("./SlotLuckyMan");
var Blackjack_1 = require("./Blackjack");
/* instantiated classes */
// person
// let myself = new Person("Ignacio","González",45877620,"04-08-2004");
// games
var gameSlotLuckyBoy = new SlotLuckyBoy_1.SlotLuckyBoy();
var gameSlotLuckyMan = new SlotLuckyMan_1.SlotLuckyMan();
var gameBlackjack = new Blackjack_1.Blackjack();
// casino
var casinoElSanjuanino = new Casino_1.Casino("El Sanjuanino", gameSlotLuckyBoy, gameSlotLuckyMan, gameBlackjack);
casinoElSanjuanino.enter();
// gameBlackjack.play();
