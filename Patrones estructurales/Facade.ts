class SistemaEncendido {
    encendido() {
      console.log("Encendiendo el automóvil...");
    }
  
    apagado() {
      console.log("Apagando el automóvil...");
    }
  }
  
  class SistemaLuces {
    encendidoLuces() {
      console.log("Encendiendo las luces del automóvil...");
    }
  
    apagadoLuces() {
      console.log("Apagando las luces del automóvil...");
    }
  }
  
  class SistemaMotor {
    arrancarMotor() {
      console.log("Arrancando el motor del automóvil...");
    }
  
    detenerMotor() {
      console.log("Deteniendo el motor del automóvil...");
    }
  }
  
  // Fachada creada
  class SistemaCarro {
    private sistemaEncendido = new SistemaEncendido();
    private sistemaLuces = new SistemaLuces();
    private sistemaMotor = new SistemaMotor();
  
    carroEncendido() {
      this.sistemaEncendido.encendido();
      this.sistemaLuces.encendidoLuces();
      this.sistemaMotor.arrancarMotor();
      console.log("El automóvil está listo para conducir.");
    }
  
    carroDetenido() {
      this.sistemaEncendido.apagado();
      this.sistemaLuces.apagadoLuces();
      this.sistemaMotor.detenerMotor();
      console.log("El automóvil está apagado.");
    }
  }
  
  const carro = new SistemaCarro();
  carro.carroDetenido();
  
  