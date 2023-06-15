/**--VARIABLES--**/

let opciones = document.querySelectorAll('.option');
let formulario = document.querySelector('form');
let thanks = document.querySelector('.thank-section');
let respHTML = document.querySelector('.resp');



opciones.forEach( opcion => {

    opcion.addEventListener('click', () =>{
        let existeOpcion = document.querySelector('.selected');
        if ( existeOpcion != null ){
            
            existeOpcion.classList.remove('selected')
        }
        opcion.classList.add('selected')

    } )
})


formulario.addEventListener('submit', enviarResp )




function enviarResp ( event ){
    let existeResp = document.querySelector('.selected');
    event.preventDefault()
    if( !existeResp ){
        return
    }

    let resp = document.querySelector('.selected').value;
    formulario.classList.add('hidden')
    respHTML.textContent = resp;
    thanks.classList.remove('hidden')

}