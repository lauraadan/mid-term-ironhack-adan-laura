const questions = document.getElementById("inputQuestions"); // creamos una variable partiendo de su id

questions.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let inputDatos = new FormData(questions);
    for(let pair of inputDatos.entries()) {
    console.log(pair[0]+ ', '+ pair[1])} // Visualizamos el objeto y su valor - email:info@lauraadan.com por ejemplo
    //  BONUS: VALIDACION CAMPO EMAIL 
    let email = document.getElementById('emailQuestions').value;
    let emailValid = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(!emailValid.test(email)) {
    alert("El correo electrónico no es correcto")
    document.getElementById('emailQuestions').classList.add("questionError") 
    } else {
    document.getElementById('emailQuestions').classList.remove("questionError")
    alert("Tus datos han sido enviados correctamente")
    }
});



