import { type Producto, calcularImpuesto } from './04-desestructurador'

const carrito: Producto[] = [
    {
        descripcion: 'Carro',
        precio: 2000
    },
    {
        descripcion: 'Celular',
        precio: 1010
    }
]

const [total, totalImpuesto] = calcularImpuesto({
    impuesto: 50,
    productos: carrito,
    propina: 2000
})

console.log({total, totalImpuesto});

export {};