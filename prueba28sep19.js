"use strict";
// EJERCICIO 1 (CALCULADORA)
"use strict";

function sumar(n1, n2) {
  console.log(n1 + n2);
}

function restar(n1, n2) {
  console.log(n1 - n2);
}

function multiplicar(n1, n2) {
  console.log(n1 * n2);
}

function dividir(n1, n2) {
  console.log(n1 / n2);
}

let x = prompt("numero1?");
let n1 = parseInt(x);
let y = prompt("numero2?");
let n2 = parseInt(y);

let operacion = prompt("quieres + - * /?");
if (operacion === "+") {
  sumar(n1, n2);
} else if (operacion === "-") {
  restar(n1, n2);
} else if (operacion === "*") {
  multiplicar(n1, n2);
} else if (operacion === "/") {
  dividir(n1, n2);
}

// EJERCICIO 2 (ESTUDIANTES Y PROFESORES)

const nombresProfesores = ["profeA", "profeB", "profeC"];
const edadesProfesores = [49, 24, 39];
const generoProfesores = ["hombre", "hombre", "mujer"];
const subject = ["matematicas", "ingles", "quimica"];

class Person {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  static mostrarPropiedades() {
    const propiedades = new Person();
    console.log(Object.keys(propiedades));
  }
}
class Teacher extends Person {
  constructor(nombre, edad, genero, subject) {
    super(nombre, edad, genero);
    this.subject = subject;
    this.studentsList = [];
  }
  static asignarAlumnos() {}
}
class Student extends Person {
  constructor(nombre, edad, genero, course, group) {
    super(nombre, edad, genero);
    this.course = course;
    this.group = group;
  }
  static registrarNuevoEstudiante(nombre, edad, genero, course, group) {
    return new Student(nombre, edad, genero, course, group);
  }
}
const teacherList = nombresProfesores.map((nombre, index) => {
  return new Teacher(
    nombre,
    edadesProfesores[index],
    generoProfesores[index],
    subject[index]
  );
});

Person.mostrarPropiedades();

const alumno1 = Student.registrarNuevoEstudiante(
  "Pedro",
  18,
  "hombre",
  1,
  "matematicas"
);
const alumno2 = Student.registrarNuevoEstudiante(
  "Jose",
  21,
  "hombre",
  3,
  "quimica"
);
const alumno3 = Student.registrarNuevoEstudiante(
  "Maria",
  19,
  "mujer",
  2,
  "matematicas"
);
const alumno4 = Student.registrarNuevoEstudiante(
  "David",
  23,
  "hombre",
  4,
  "ingles"
);
const alumno5 = Student.registrarNuevoEstudiante(
  "Eva",
  20,
  "mujer",
  2,
  "ingles"
);
const alumno6 = Student.registrarNuevoEstudiante(
  "Mario",
  20,
  "hombre",
  1,
  "quimica"
);
const listaAlumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6];

for (let i = 0; i < listaAlumnos.length; i++) {
  for (let j = 0; j < teacherList.length; j++)
    if (teacherList[j].subject === listaAlumnos[i].group) {
      teacherList[j].studentsList.push(listaAlumnos[i]);
    }
}
console.log(teacherList);

// EJERCICIO 3

("use strict");

let gameOver = parseInt(0);
function ValorDelDado() {
  let aleatoria = Math.floor(Math.random() * 6) + 1;
  console.log("Valor del dado:", aleatoria);
  gameOver = gameOver + aleatoria;
  console.log("Valor de GameOver", gameOver);
  if (gameOver < 50) {
    ValorDelDado();
  } else {
    console.log("GAME OVER");
  }
  escape;
}
ValorDelDado();
