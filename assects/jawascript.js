let item = document.querySelectorAll('li');

const [box1, box2, box3, box4, box5, box6] = item

box1.addEventListener('mouseover', function() {
    this.classList.add('li_move')
})

box1.addEventListener('mouseout', function() {
    this.classList.remove('li_move')
})


box2.addEventListener('mouseover', function() {
    this.classList.add('li_move')
})

box2.addEventListener('mouseout', function() {
    this.classList.remove('li_move')
})


box3.addEventListener('mouseover', function() {
    this.classList.add('li_move')
})

box3.addEventListener('mouseout', function() {
    this.classList.remove('li_move')
})


box4.addEventListener('mouseover', function() {
    this.classList.add('li_move')
})

box4.addEventListener('mouseout', function() {
    this.classList.remove('li_move')
})


box5.addEventListener('mouseover', function() {
    this.classList.add('li_move')
})

box5.addEventListener('mouseout', function() {
    this.classList.remove('li_move')
})


box6.addEventListener('mouseover', function() {
    this.classList.add('li_move')
})

box6.addEventListener('mouseout', function() {
    this.classList.remove('li_move')
})

let conceal = document.getElementsByTagName('button');
const [concealMenu] = conceal

let wrapperOfMenu = document.getElementsByClassName('menuTable');
const [wrapper] = wrapperOfMenu;

concealMenu.addEventListener('click', function() {
    wrapper.classList.toggle('menuTable_conceal')
})


concealMenu.addEventListener('click', function() {
    this.classList.toggle('button_rorate')
})

let navigation = document.getElementsByTagName('nav');

const [nav1, nav2, nav3, nav4] = navigation;

nav1.addEventListener('mouseover',function() {
    this.classList.add('headerNav_move')
})

nav1.addEventListener('mouseout',function() {
    this.classList.remove('headerNav_move')
})

nav2.addEventListener('mouseover',function() {
    this.classList.add('headerNav_move')
})

nav2.addEventListener('mouseout',function() {
    this.classList.remove('headerNav_move')
})


nav3.addEventListener('mouseover',function() {
    this.classList.add('headerNav_move')
})

nav3.addEventListener('mouseout',function() {
    this.classList.remove('headerNav_move')
})

nav4.addEventListener('mouseover',function() {
    this.classList.add('headerNav_move')
})

nav4.addEventListener('mouseout',function() {
    this.classList.remove('headerNav_move')
})


nav1.addEventListener('mousedown',function() {
    this.classList.add('headerNav_press')
})

nav1.addEventListener('mouseup',function() {
    this.classList.remove('headerNav_press')
})

nav2.addEventListener('mousedown',function() {
    this.classList.add('headerNav_press')
})

nav2.addEventListener('mouseup',function() {
    this.classList.remove('headerNav_press')
})

nav3.addEventListener('mousedown',function() {
    this.classList.add('headerNav_press')
})

nav3.addEventListener('mouseup',function() {
    this.classList.remove('headerNav_press')
})

nav4.addEventListener('mousedown',function() {
    this.classList.add('headerNav_press')
})

nav4.addEventListener('mouseup',function() {
    this.classList.remove('headerNav_press')
})

let itemCar = document.getElementsByClassName('car');
let buttonCar = document.getElementsByClassName('next');

const [next] = buttonCar;

const [car1, car2, car3] = itemCar;

next.addEventListener('click', function() {
    car1.classList.toggle('car_keyframes_move')
})

next.addEventListener('click', function() {
    car2.classList.add('car_keyframes_move')
})

next.addEventListener('click', function() {
    car3.classList.add('car_keyframes_move1')
} )

let buttonCar1 = document.getElementsByClassName('previous');

const [previous] = buttonCar1;

previous.addEventListener('click', function() {
    car1.classList.add('car_keyframes_moveLeft')
})

previous.addEventListener('click', function() {
    car2.classList.add('car_keyframes_moveLeft1')
})

previous.addEventListener('click', function() {
    car3.classList.add('car_keyframes_moveLeft2')
})