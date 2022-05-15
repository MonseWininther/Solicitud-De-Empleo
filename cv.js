//Alfabéticos
let apellidoPaterno
let apellidoMaterno
let puesto
let nombres
let domicilio
let colonia
let ciudadEstado
let lugarNacimiento
let nacionalidad
let enfermedadCronicaExplicacion
let deporte
let clubSocialDeporte
let pasatiempo
let metaVida
let nombrePadre
let nombreMadre
let nombreEsposao
let domicilioPadre
let domicilioMadre
let domicilioEsposao
let ocupacionPadre
let ocupacionMadre
let ocupacionEsposao
let nombrePrimaria
let nombreSecundaria
let nombrePreparatoria
let nombreProfesional
let nombreComercialOtra
let direccionPrimaria
let direccionSecundaria
let direccionPreparatoria
let direccionProfesional
let direccionComercialOtra
let estudioEscuela
let estudioCarrera


//Numéricos
let sueldoDeseado
let codigoPostal
let telefono
let estatura
let peso
let titluloPrimaria
let tituloSecundaria
let tituloPreparatoria
let tituloProfesional
let tituloComercialOtra
let estudioHorario
let estudioGrado


//Alfanuméricos
let curp
let afore
let rfc
let numeroSeguridadSocial
let cartillaMilitar
let pasaporte
let licenciaManejoNo
let claseNumeroLicencia
let extranjero


//file
let foto
let enviar
let limpiar


//Fecha
let fechaActual
let fechaNacimiento
let dePrimaria
let deSecundaria
let dePreparatoria
let deProfesional
let deComercialOtra
let aPrimaria
let aSecundaria
let aPreparatoria
let aProfesional
let aComercialOtra


//From
let cvForm


//Radio
let sexoMasculino
let sexoFemenino
let estadoCivilSoltero
let estadoCivilCasado
let estadoCivilOtro
let saludBueno
let saludRegular
let saludMalo
let enfermedadCronicaNo
let enfermedadCronicaSi
let vivePadre
let viveMadre
let viveEsposao
let finPadre
let finMadre
let finEsposao


//checkbox
let vivePadres
let viveFamilia
let viveParientes
let viveSolo
let dependeHijos
let dependeConyuge
let dependePadres
let dependeOtros

//onload funcion que se ejecuta al cargar la ventana 
window.onload = () => {

    /**Para poder hacer las validaciones de los campos es necesario guardar y vincular las 
    refencias a cada elementos del HTML que vamos a utilizar**/

    //Vinculacion de referencias
    //Alfabéticos
    cvForm = document.getElementById('cvForm')
    apellidoMaterno = document.getElementById('apellidoMaterno')
    apellidoPaterno = document.getElementById('apellidoPaterno')
    puesto = document.getElementById('puesto')
    nombres = document.getElementById('nombres')
    domicilio = document.getElementById('domicilio')
    colonia = document.getElementById('colonia')
    ciudadEstado = document.getElementById('ciudadEstado')
    lugarNacimiento = document.getElementById('lugarNacimiento')
    nacionalidad = document.getElementById('nacionalidad')
    enfermedadCronicaExplicacion = document.getElementById('enfermedadCronicaExplicacion')
    deporte = document.getElementById('deporte')
    clubSocialDeporte = document.getElementById('clubSocialDeporte')
    pasatiempo = document.getElementById('pasatiempo')
    metaVida = document.getElementById('metaVida')
    nombrePadre = document.getElementById('nombrePadre')
    nombreMadre = document.getElementById('nombreMadre')
    nombreEsposao = document.getElementById('nombreEsposao')
    domicilioPadre = document.getElementById('domicilioPadre')
    domicilioMadre = document.getElementById('domicilioMadre')
    domicilioEsposao = document.getElementById('domicilioEsposao')
    ocupacionPadre = document.getElementById('ocupacionPadre')
    ocupacionMadre = document.getElementById('ocupacionMadre')
    ocupacionEsposao = document.getElementById('ocupacionEsposao')
    nombrePrimaria = document.getElementById('nombrePrimaria')
    nombreSecundaria = document.getElementById('nombreSecundaria')
    nombrePreparatoria = document.getElementById('nombrePreparatoria')
    nombreProfesional = document.getElementById('nombreProfesional')
    nombreComercialOtra = document.getElementById('nombreComercialOtra')
    direccionPrimaria = document.getElementById('direccionPrimaria')
    direccionSecundaria = document.getElementById('direccionSecundaria')
    direccionPreparatoria = document.getElementById('direccionPreparatoria')
    direccionProfesional = document.getElementById('direccionProfesional')
    direccionComercialOtra = document.getElementById('direccionComercialOtra')
    estudioEscuela = document.getElementById('estudioEscuela')
    estudioCarrera = document.getElementById('estudioCarrera')


    //Numéricos
    sueldoDeseado = document.getElementById('sueldoDeseado')
    codigoPostal = document.getElementById('codigoPostal')
    telefono = document.getElementById('telefono')
    estatura = document.getElementById('estatura')
    peso = document.getElementById('peso')
    titluloPrimaria = document.getElementById('titluloPrimaria')
    tituloSecundaria = document.getElementById('tituloSecundaria')
    tituloPreparatoria = document.getElementById('tituloPreparatoria')
    tituloProfesional = document.getElementById('tituloProfesional')
    tituloComercialOtra = document.getElementById('tituloComercialOtra')
    estudioHorario = document.getElementById('estudioHorario')
    estudioGrado = document.getElementById('estudioGrado')


    //Alfanuméricos
    curp = document.getElementById('curp')
    afore = document.getElementById('afore')
    rfc = document.getElementById('rfc')
    numeroSeguridadSocial = document.getElementById('numeroSeguridadSocial')
    cartillaMilitar = document.getElementById('cartillaMilitar')
    pasaporte = document.getElementById('pasaporte')
    licenciaManejoNo = document.getElementById('licenciaManejoNo')
    claseNumeroLicencia = document.getElementById('claseNumeroLicencia')
    extranjero = document.getElementById('extranjero')


    //file
    foto = document.getElementById('foto')


    //Fecha
    fechaActual = document.getElementById('fechaActual')
    fechaNacimiento = document.getElementById('fechaNacimiento')
    dePrimaria = document.getElementById('dePrimaria')
    deSecundaria = document.getElementById('deSecundaria')
    dePreparatoria = document.getElementById('dePreparatoria')
    deProfesional = document.getElementById('deProfesional')
    deComercialOtra = document.getElementById('deComercialOtra')
    aPrimaria = document.getElementById('aPrimaria')
    aSecundaria = document.getElementById('aSecundaria')
    aPreparatoria = document.getElementById('aPreparatoria')
    aProfesional = document.getElementById('aProfesional')
    aComercialOtra = document.getElementById('aComercialOtra')


    //Radio
    sexoMasculino = document.getElementById('sexoMasculino')
    sexoFemenino = document.getElementById('sexoFemenino')
    estadoCivilSoltero = document.getElementById('estadoCivilSoltero')
    estadoCivilCasado = document.getElementById('estadoCivilCasado')
    estadoCivilOtro = document.getElementById('estadoCivilOtro')
    saludBueno = document.getElementById('saludBueno')
    saludRegular = document.getElementById('saludRegular')
    saludMalo = document.getElementById('saludMalo')
    enfermedadCronicaNo = document.getElementById('enfermedadCronicaNo')
    enfermedadCronicaSi = document.getElementById('enfermedadCronicaSi')
    vivePadre = document.getElementById('vivePadre')
    viveMadre = document.getElementById('viveMadre')
    viveEsposao = document.getElementById('viveEsposao')
    finPadre = document.getElementById('finPadre')
    finMadre = document.getElementById('finMadre')
    finEsposao = document.getElementById('finEsposao')


    //checkbox
    vivePadres = document.getElementById('vivePadres')
    viveFamilia = document.getElementById('viveFamilia')
    viveParientes = document.getElementById('viveParientes')
    viveSolo = document.getElementById('viveSolo')
    dependeHijos = document.getElementById('dependeHijos')
    dependeConyuge = document.getElementById('dependeConyuge')
    dependePadres = document.getElementById('dependePadres')
    dependeOtros = document.getElementById('dependeOtros')

    //onsubmit es la Funcion que se ejecuta cuando un formulario es enviado
    cvForm.onsubmit = () => {
        let existeAlgunError = false

        if (algunCampoAlfabeticoTieneError()) {
            alert('Existen campos Alfabeticos Erroneos, corrijalos!')
            existeAlgunError = true
        }
        if (algunCampoObligatorioEsVacio()) {
            alert('Existen campos vacios, corrijalos!')
            existeAlgunError = true
        }
        return existeAlgunError

    }
}

const algunCampoObligatorioEsVacio = () => {
    let esVacio = false
    esVacio = apellidoPaterno.value == '' || apellidoMaterno.value == '' || puesto.value == '' || nombres.value == '' ||
        domicilio.value == '' || colonia.value == '' || ciudadEstado.value == '' || lugarNacimiento.value == '' ||
        nacionalidad.value == '' || enfermedadCronicaExplicacion.value == '' || deporte.value == '' ||
        clubSocialDeporte.value == '' || pasatiempo.value == '' || metaVida.value == '' || nombrePadre.value == '' ||
        nombreMadre.value == '' || nombreEsposao.value == '' || domicilioPadre.value == '' || domicilioMadre.value == '' ||
        domicilioEsposao.value == '' || ocupacionPadre.value == '' || ocupacionMadre.value == '' ||
        ocupacionEsposao.value == '' || nombrePrimaria.value == '' || nombreSecundaria.value == '' ||
        nombrePreparatoria.value == '' || nombreProfesional.value == '' || nombreComercialOtra.value == '' ||
        direccionPrimaria.value == '' || direccionSecundaria.value == '' || direccionPreparatoria.value == '' ||
        direccionProfesional.value == '' || direccionComercialOtra.value == '' || estudioEscuela.value == '' ||
        estudioCarrera.value == '' || sueldoDeseado.value == '' || codigoPostal.value == '' || telefono.value == '' ||
        estatura.value == '' || peso.value == '' || titluloPrimaria.value == '' || tituloSecundaria.value == '' ||
        tituloPreparatoria.value == '' || tituloProfesional.value == '' || tituloComercialOtra.value == '' ||
        estudioHorario.value == '' || estudioGrado.value == '' || curp.value == '' || afore.value == '' ||
        rfc.value == '' || numeroSeguridadSocial.value == '' || cartillaMilitar.value == '' || pasaporte.value == '' ||
        licenciaManejoNo.value == '' || claseNumeroLicencia.value == '' || extranjero.value == ''
    return esVacio

}

//Alfabetico
const esAlfabetico = (cadena) => {
    let expresionRegular = /[a-zA-Z ]/
    return expresionRegular.test(cadena)
}

const algunCampoAlfabeticoTieneError = () => {
    let existenCamposConError = false
        //!true=false (Invertir)
    existenCamposConError = !(
        esAlfabetico(apellidoPaterno.value) && esAlfabetico(apellidoMaterno.value) &&
        esAlfabetico(puesto.value) && esAlfabetico(nombres.value) &&
        esAlfabetico(domicilio.value) && esAlfabetico(colonia.value) &&
        esAlfabetico(ciudadEstado.value) && esAlfabetico(lugarNacimiento.value) &&
        esAlfabetico(nacionalidad.value) && esAlfabetico(enfermedadCronicaExplicacion.value) &&
        esAlfabetico(deporte.value) && esAlfabetico(clubSocialDeporte.value) &&
        esAlfabetico(pasatiempo.value) && esAlfabetico(metaVida.value) &&
        esAlfabetico(nombrePadre.value) && esAlfabetico(nombreMadre.value) &&
        esAlfabetico(nombreEsposao.value) && esAlfabetico(domicilioPadre.value) &&
        esAlfabetico(domicilioMadre.value) && esAlfabetico(domicilioEsposao.value) &&
        esAlfabetico(ocupacionPadre.value) && esAlfabetico(ocupacionMadre.value) &&
        esAlfabetico(ocupacionEsposao.value) && esAlfabetico(nombrePrimaria.value) &&
        esAlfabetico(nombreSecundaria.value) && esAlfabetico(nombrePreparatoria.value) &&
        esAlfabetico(nombreProfesional.value) && esAlfabetico(nombreComercialOtra.value) &&
        esAlfabetico(direccionPrimaria.value) && esAlfabetico(direccionSecundaria.value) &&
        esAlfabetico(direccionPreparatoria.value) && esAlfabetico(direccionProfesional.value) &&
        esAlfabetico(direccionComercialOtra.value) && esAlfabetico(estudioEscuela.value) &&
        esAlfabetico(estudioCarrera.value)
    )
    return existenCamposConError
}

//Longitud de cadena de caracteres
const tieneUnaLongitudValida = (cadena, longitud) => {
    let esValidaLaLongitud = true
    esValidaLaLongitud = cadena.length < longitud
    return esValidaLaLongitud
}

//Límites en valores numéricos
const elNumeroSeEncuentraEnELRango = (numeroAEvaluar, numeroMinimo, numeroMaximo) => {
    let numero = Number(numeroAEvaluar)
        //menor que
    if (numero < numeroMinimo) {
        return false
    }
    //mayor que
    if (numero > numeroMaximo) {
        return false
    }
    return true
}