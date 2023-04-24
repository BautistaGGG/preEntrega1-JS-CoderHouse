const mensajeBienvenida = alert("Bienvenido a la reserva de turnos. A continuación solicitaremos sus datos para darle su turno correspondiente.")

function otorgandoTurnoAlUsuario(){
    let nombreDelSolicitante = prompt("Ingrese su NOMBRE y APELLIDO")
        for(let i = 1; i < 11; i++){
            if (i > 10) {
                alert("Se acabaron los turnos!. Presione F5 para reiniciar el sistema")
            }
            if (nombreDelSolicitante !== "") {
                console.log(`${nombreDelSolicitante} recibió el turno N° ${i}`);
                nombreDelSolicitante = prompt("Ingrese su NOMBRE y APELLIDO")
            } else {   
                alert("No reservaste turno y el lugar se perdió. Intenta de nuevo")
                console.log(`Turno N° ${i} PERDIDO por FALTA de DATOS.`);
                nombreDelSolicitante = prompt("Ingrese su NOMBRE y APELLIDO")
            }
        }
}
otorgandoTurnoAlUsuario()