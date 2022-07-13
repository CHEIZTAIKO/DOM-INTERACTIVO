class Instrumento{
    constructor(tipo='',material='',color='',cuerdas=0,valor=0){
        this.tipo=tipo
        this.material=material
        this.color=color
        this.cuerdas=cuerdas
        this.valor =valor
    }
}
let aumentarValor = (precio,porcentaje) =>{return precio = precio + (precio*porcentaje)}

const instrumentos=[]

let continua,tipo,material,color;
let cuerdas =0
let precio;

while(continua != 'no'){
    precio=1500
    while(tipo == undefined){
    tipo = prompt('Ingrese el nombre de su instrumento\n guitarra o bajo\n Ambos instrumentos tienen un precio inicial de 1500').toLowerCase();
    switch(tipo){
        case "guitarra":
            alert(`usted eligio ${tipo}`)
        break
        case "bajo":
            alert(`usted eligio ${tipo}`)
        break
        default:
            tipo=undefined
        break
    }
    }
    while(material == undefined){
    material = prompt('ingrese el tipo de madera\nLas opciones son : Ebano,Nogal,Arce.').toLowerCase();
    switch(material){
        case "ebano":
            alert(`usted eligio ${material}`)
            break
        case "nogal":
            alert(`usted eligio ${material}`)
            break
        case "arce":
            alert(`usted eligio ${material}`)
            break
        default:
            material = undefined;
            break
    }
    }
    color = prompt('ingrese el color de su instrumento').toLowerCase();
    while(cuerdas == 0){
        if(tipo==='bajo'){
        cuerdas= parseInt(prompt('Ingrese la cantidad de cuerdas\n construccion: 4 precio normal, 5 cuesta 15% mas'));
        switch(cuerdas){
            case 4:
                alert(`su ${tipo} cuesta ${precio}`)
            break
            case 5:
                precio = aumentarValor(precio,0.15)
                alert(`su ${tipo} cuesta ${precio}`)
            break
            default:
                cuerdas=0;
            break
        }
    }else if(tipo ==='guitarra'){
        cuerdas= parseInt(prompt('Ingrese la cantidad de cuerdas\n contruccion: 6 precio normal, 7 cuesta 15% mas y 8 cuesta 20% mas'));
        switch(cuerdas){
            case 6:
                alert(`su ${tipo} cuesta ${precio}`)
            break
            case 7:
                precio = aumentarValor(precio,0.15)
                alert(`su ${tipo} cuesta ${precio}`)
                break
            case 8: 
                precio = aumentarValor(precio,0.20)
                alert(`su ${tipo} cuesta ${precio}`)
                break
            default:
                cuerdas=0;
            break
        }
    }
    }
    const nuevoInstrumento = new Instrumento(tipo,material,color,cuerdas,precio);
    instrumentos.push(nuevoInstrumento);
    tipo=undefined
    material=undefined
    cuerdas=0
    continua = prompt(`deseas agregar mas instrumentos?`).toLowerCase();
}

console.log(instrumentos);

for(const producto of instrumentos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML += `
    <h1>${producto.tipo}</h1>
    <p>Construccion: ${producto.material}</p>
    <p>Color:${producto.color}</p>
    <p>Cuerdas:${producto.cuerdas}</p>
    <p>Valor:${producto.valor}</p>
    `
    document.body.appendChild(contenedor)
}

