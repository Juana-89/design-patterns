interface EstadoReproductor {
    reproducir();
    pausar();
  }
  
  class EstadoReproduciendo implements EstadoReproductor {
    reproducir(): void {
      console.log("La música ya se está reproduciendo.");
    }
    pausar(): void {
      console.log("Pausando la reproducción de música.");
    }
  }
  
  class EstadoPausado implements EstadoReproductor {
    reproducir(): void {
      console.log("Reanudando la reproducción de música.");
    }
    pausar(): void {
      console.log("La música ya está en pausa.");
    }
  }
  
  class ReproductorMusica {
    private estadoActual: EstadoReproductor;
  
    constructor() {
      this.estadoActual = new EstadoPausado();
    }
  
    cambiarEstado(estado: EstadoReproductor): void {
      this.estadoActual = estado;
    }
  
    reproducir(): void {
      this.estadoActual.reproducir();
    }
  
    pausar(): void {
      this.estadoActual.pausar();
    }
  }
  
  const reproductor = new ReproductorMusica();
  
  reproductor.reproducir();
  reproductor.pausar();
  reproductor.cambiarEstado(new EstadoReproduciendo());
  
  