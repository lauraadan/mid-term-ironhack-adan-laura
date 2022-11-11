// NO PERMITIR QUE LA PAGINA HAGA REFRESH AL DAR A SUBMIT +
// VER INPUTS EN LA CONSOLA

const formulario = document.getElementById("form"); // creamos una variable partiendo de su id

formulario.addEventListener('submit', function(event) { // escuchamos el evento submit y si está todo ok ejecutamos una función
    event.preventDefault();    // deshabilitamos el comportamiento por defecto de submit para que no recargue la pagina 
    let validateForm = 0;
    let formDatos = new FormData(formulario); // capturamos los datos del formulario. Los objetos formData permiten compilar un conjunto de pares clave/valor.
    for(let pair of formDatos.entries()) {
    console.log(pair[0]+ ', '+ pair[1]); /* Mostramos los inputs y los capturamos en consola.
    //Con .entries devolvemos una array de pares propios de una propiedad enumerable (key, value). De esta forma, vemos el nombre del input y el valor del input */
    } 
    // BONUS: VALIDACION CAMPO NAME 
    let fullName = document.getElementById('name').value;
    if(fullName.length === 0) {
    alert('Añade tu nombre completo'); 
    document.getElementById('name').classList.add("inputError") // añadir estilo al borde del input al dar error
    validateForm++;
    } else {
      document.getElementById('name').classList.remove("inputError")
    }
  //  BONUS: VALIDACION CAMPO MESSAGE 
    let message = document.getElementById('formMessage').value;
    if (message.length === 0) {
    alert('Escribe un mensaje');
    document.getElementById('formMessage').classList.add("inputError") 
    validateForm++;
    } else {
      document.getElementById('formMessage').classList.remove("inputError")
    }
    //  BONUS: VALIDACION CAMPO EMAIL 
    let email = document.getElementById('email').value;
    let emailValid = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(!emailValid.test(email)) {
      alert("El correo electrónico no es correcto")
      document.getElementById('email').classList.add("inputError") 
      validateForm++;
    } else {
      document.getElementById('email').classList.remove("inputError")
    }
    //  BONUS:VALIDACION CAMPO PHONE 
    let phone = document.getElementById('phone').value;
    if (phone.length !== 9) {
      alert("Introduce un numero de teléfono de 9 cifras");
      document.getElementById('phone').classList.add("inputError") 
      validateForm++;
    } else {
      document.getElementById('phone').classList.remove("inputError")
    } 
    if (validateForm == 0){ /* Comprueba que todos los inputs son correctos y al darle a submit, 
    salta una alerta indicando al usuario que el formulario ha sido enviado correctamente */
      alert("El formulario ha sido enviado correctamente")
    }
});










