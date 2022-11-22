class Usuario {
    id: number
    nombre: string
    edad: number
    genero: string
    email: string
    country: string

    constructor(id:number, nombre:string, edad:number, genero:string, email:string, country:string){
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
        this.email = email
        this.country = country
    }
}

class Partida {
    numero_partida: number = 0
    partidas_totales: number = 0
    partidas_ganadas: number = 0
    partidas_perdidas: number = 0
    partidas_empates: number = 0

}

class Puntos {
    puntosActuales: number = 0
    puntosDePartida: number = 0
    totalDePuntos:number = 0

    añadirPuntosAPartida(){
      this.puntosDePartida = this.puntosActuales
    }
    
    añadirPuntosATotal(){
        this.totalDePuntos += this.puntosDePartida
    }

}

class Jugador {
    usuario:Usuario
    partida: Partida
    puntos: Puntos

    constructor(usuario: Usuario, partidas: Partida, puntos: Puntos){
        this.usuario = usuario
        this.partida = partidas
        this.puntos = puntos
    }
}

const usuario = new Usuario(1,"Jaysen",35,"Masculino","Email@email.com","Puerto Rico")
const partida = new Partida
const puntos = new Puntos

const jugador = new Jugador(usuario,partida, puntos)

console.log(jugador)


