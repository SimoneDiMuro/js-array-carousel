const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const container = document.querySelector(".container")
const right = document.querySelector(".right")

container.innerHTML = `<img src="${items[0]}" alt="">`
container.innerHTML += `<h2> ${title[0]} </h2>`
container.innerHTML += `<p> ${text[0]} </p>`

for (i = 0; i < items.length; i++ ){
    right.innerHTML += `<img class="picsum" src="${items[i]}" alt="">`
}

let currentImg = 0
const next = document.querySelector(".next")
next.addEventListener("click", function(){
    currentImg++
    if (currentImg > items.length -1){
        currentImg = 0
    }
    container.innerHTML = `<img src="${items[currentImg]}" alt="">`
container.innerHTML += `<h2> ${title[currentImg]} </h2>`
container.innerHTML += `<p> ${text[currentImg]} </p>`

} )