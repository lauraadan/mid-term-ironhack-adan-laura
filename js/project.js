// PETICION AL SERVIDOR - PROJECTS PAGE

const projectPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();
    return data;
}
//projectPage()


const card04 = async () => {
    const card4 = await projectPage()
    document.querySelector('.card04').innerHTML =
    `<p>${card4[10].title}</p>`
    document.querySelector('.card04-4').innerHTML =
    `<p>${card4[13].body}</p>`
}
card04()

const card05 = async () => {
    const card5 = await projectPage()
    document.querySelector('.card05').innerHTML =
    `<p>${card5[15].title}</p>`
    document.querySelector('.card05-5').innerHTML =
    `<p>${card5[17].body}</p>`
}
card05()

const card06 = async () => {
    const card6 = await projectPage()
    document.querySelector('.card06').innerHTML =
    `<p>${card6[20].title}</p>`
    document.querySelector('.card06-6').innerHTML =
    `<p>${card6[22].body}</p>`
}
card06()