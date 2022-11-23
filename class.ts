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
    _numero_partida: number
    _ganador: boolean = false
    _perdedor: boolean = false
    _empate: boolean = false
    _partidas_totales: number
    _partidas_ganadas: number
    _partidas_perdidas: number
    _partidas_empates: number

    constructor(numero_partida:number, partidas_totales:number, partidasGanadas:number, partidasPerdidas:number, partidasEmpates:number){
        this._numero_partida = numero_partida
        this._partidas_totales = partidas_totales
        this._partidas_ganadas = partidasGanadas
        this._partidas_perdidas = partidasPerdidas
        this._partidas_empates = partidasEmpates
    }
    set ganador(ganador: boolean){
        this._ganador = ganador
    }
    set perdedor(perdedor: boolean){
        this._perdedor = perdedor
    }
    set empate(empate: boolean){
        this._empate = empate
    }
    set numero_partida(partidaNueva: number){
        this.numero_partida = partidaNueva
    }
    set partidas_totales(partidasTotales:number){
        this._partidas_totales += partidasTotales
    }
    set partidas_ganadas(partidasganadas:number){
        this._partidas_ganadas += partidasganadas
    }
    set partidas_perdidas(partidasperdidas:number){
        this._partidas_perdidas += partidasperdidas
    }
    set partidas_empates(partidasempates:number){
        this._partidas_empates += partidasempates
    }

    get ganador(){
        return this._ganador
    }
    get perdedor(){
        return this._perdedor
    }
    get empate(){
        return this._empate
    }
    get numero_partida(){
        return this._numero_partida
    }
    get partidas_totales(){
        return this.partidas_totales
    }
    get partidas_ganadas(){
        return this.partidas_ganadas
    }
    get partidas_perdidas(){
        return this.partidas_perdidas
    }
    get partidas_empates(){
        return this.partidas_empates
    }
}

class Puntos {
    _puntos_partida: number
    _total_puntos: number

    constructor(puntosDePartida: number, totalDePuntos: number){
        this._puntos_partida = puntosDePartida
        this._total_puntos = totalDePuntos
    }

    set puntos_partida(puntosNuevos: number){
      this._puntos_partida = puntosNuevos
    }
    set total_puntos(puntosDePartida: number){
        this._total_puntos += puntosDePartida
    }
    get puntosDePartida(){
        return this._puntos_partida
    }
    get total_puntos(){
        return this._total_puntos
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
const partida = new Partida(1,1,1,0,0)
const puntos = new Puntos(0,0)

const jugador = new Jugador(usuario,partida, puntos)

console.log(jugador)


