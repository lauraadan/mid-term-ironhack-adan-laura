//Script general para toda la web

// BONUS: DARK MODE

// FALLO 1 
// const icono = document.querySelector("#icono");

//  icono.addEventListener('click',function (){
//  document.body.classList.toggle("darkTheme");
//  console.log("Hola")
// })

//FALLO 2

// let ic = document.querySelector('#icono');

//  ic.addEventListener('click', () => { 
//       document.body.classList.toggle('darkTheme');
//  });

 const darkMode = () => {
    document.body.classList.toggle("darkTheme");
}
// da error al addEventListener
// document.querySelector('#icono').addEventListener('click', darkMode)

/* classList devuelve una colección activa de DOM de los atributos de clase del elemento. 
Usar classList es una forma práctica de acceder a la lista de clases de un elemento como 
una cadena de texto delimitada por espacios a través de element. */
// 

