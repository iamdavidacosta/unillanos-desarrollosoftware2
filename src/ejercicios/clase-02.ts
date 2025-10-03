interface Comida{
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza: Comida = {
    nombre: 'Napolitana',
    calorias: 25,
    esVegana: false,
}

const ensalada: Comida = {
    nombre: 'Cesar',
    calorias: 5,
    esVegana: true,
}

const hamburguesa: Comida = {
    nombre: 'Cuarto de libra',
    calorias: 100,
    esVegana: false,
}

class ComidaService {

  mostrarInfo(comida: Comida): void {
    const { nombre, calorias, esVegana } = comida;
    console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`);
  }

  modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
    const nuevaComida: Comida = {
      nombre: comida.nombre,
      calorias: nuevasCalorias,
      esVegana: comida.esVegana,
    };
    return nuevaComida;
  }
}

class NotificadorComida {
  constructor(private servicio: ComidaService) {}

  notificar(comida: Comida): void {
    console.log("Notificando comida");
    this.servicio.mostrarInfo(comida);
  }
}

const servicio = new ComidaService();
const notificador = new NotificadorComida(servicio);

notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

const pizzaMod = servicio.modificarCalorias(pizza, 500);
notificador.notificar(pizzaMod);

export{}