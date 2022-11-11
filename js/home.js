// PETICION AL SERVIDOR - HOME PAGE (RECENT PROJECTS)

const homePage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();
    //console.log(data[4].title)
    return data;
}
//homePage()


const card01 = async () => {
    const card1 = await homePage()
    document.querySelector('.card01').innerHTML =
    `<p>${card1[4].title}</p>`
    document.querySelector('.card01-1').innerHTML =
    `<p>${card1[4].body}</p>`
}
card01()

const card02 = async () => {
    const card2 = await homePage()
    document.querySelector('.card02').innerHTML =
    `<p>${card2[3].title}</p>`
    document.querySelector('.card02-2').innerHTML =
    `<p>${card2[3].body}</p>`
}
card02()

const card03 = async () => {
    const card3 = await homePage()
    document.querySelector('.card03').innerHTML =
    `<p>${card3[7].title}</p>`
    document.querySelector('.card03-3').innerHTML =
    `<p>${card3[7].body}</p>`
}
card03()


// BONUS: RENDERIZADO (pequeña prueba)

const cardImg01 = () => {
    const img = document.createElement('img')
    img.src = "https://i.postimg.cc/4yPzs1t9/1.jpg"
    img.alt = "Imagen de proyecto"
    document.querySelector('.cardImg01').appendChild(img)
}
cardImg01()

