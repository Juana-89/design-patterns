interface Expresion {
    interprete(): number;
  }
  
  class LongitudExpresion implements Expresion {
    private texto: string;
  
    constructor(texto: string) {
      this.texto = texto;
    }
  
    interprete(): number {
      return this.texto.length;
    }
  }
  
  const expresion = new LongitudExpresion("Hola, mundo!");
  
  const resultado = expresion.interprete();
  console.log("La longitud de la cadena es:", resultado);
  