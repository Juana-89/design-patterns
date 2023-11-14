class Persona {
    constructor(nombre, edad) {
      if (Persona.instance) {
        return Persona.instance;
      }
  
      this.nombre = nombre;
      this.edad = edad;
  
      Persona.instance = this;
    }
  
    saludar() {
      return console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Creamos una instancia de la clase "Persona" (Singleton)
  const persona1 = new Persona("Juan", 25);
  persona1.saludar();
  
  
  // Intentamos crear otra instancia de "Persona" (Singleton)
  const persona2 = new Persona("María", 30);
  persona2.saludar();
  