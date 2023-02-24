
let imgCounter = 0;

const nextImg = () => {
    $('#works-carousel')
        .children()
        .eq(imgCounter)
        .css('display', 'none')
        imgCounter++;
        if(imgCounter > $('#works-carousel').children().length -1){
            imgCounter = 0;
        }
        $('#works-carousel')
            .children()
            .eq(imgCounter)
            .fadeIn(370)
            .css('display', 'flex')
}
const lastImg = () => {
    $('#works-carousel')
        .children()
        .eq(imgCounter)
        .css('display', 'none')
        imgCounter--;
        if(imgCounter < 0){ 
            imgCounter = $('#works-carousel').children().length -1;
        }
        $('#works-carousel')
            .children()
            .eq(imgCounter)
            .fadeIn(370)
            .css('display', 'flex')
}
let projectsCounter=0
const nextProj = () => {
    $('#projects-body')
        .children('div')
        .eq(projectsCounter)
        .css('display', 'none')
        projectsCounter++;
        if(projectsCounter > $('#projects-body').children('div').length-1){
            projectsCounter = 0;
        }
        $('#projects-body')
            .children('div')
            .eq(projectsCounter)
            .fadeIn(500)
            .css('display', 'block')
}
const hideModal = () => {
    $('.modal-page').css('display', 'none')
}
const showModal = (modal) =>{
    hideModal();
    $(`${modal.data.text}`).fadeIn(800).css('display', 'flex')
}
const hideLinks = () => {
    $('.link').slideUp(200)
}
const hideBurger = () => {
    $('#hburg-flex').slideUp()
}
const showBurger = () => {
    $('#hburg-flex').slideDown()
}
const dropDown = () => {
        $('.link').slideDown(200);
}
const makeBlue = () => {
    $('body').animate({'background-color': 'rgba(90, 90, 134)'},700)
    $('h1').animate({'color': 'rgb(231, 232, 211)'}, 700)
    $('#header li').animate({'color': 'rgb(208, 209, 188)'},700)
}
const makePink = () => {
    $('body').animate({'background-color': 'rgb(236, 212, 224)'}, 1000)
    $('h1').animate({'color': 'rgb(195, 155, 187)'}, 1000)
    $('#header li').animate({'color': 'rgb(138, 114, 105)'}, 1000)
}
const makeTeal = () => {
    $('body').animate({'background-color': 'rgba(9, 109, 109)'}, 700)
    $('h1').animate({'color': 'rgb(177, 161, 59)'}, 700)
    $('#header li').animate({'color': 'rgb(197, 182, 85)'}, 700)
}


$(() => {
$('#home-button').click({text: '#home'}, showModal)
$('#about-button').click({text: '#about'}, showModal)
$('.back').click({text: '#about'}, showModal)
$('#life-button').click({text: '#life'}, showModal)
$('#work-button').click({text: '#work'}, showModal)
$('#hobbies-button').click({text: '#hobbies'}, showModal)
$('#works-button').click({text: '#works'}, showModal)
$('#projects-button').click({text: '#projects'}, showModal)
$('#right-button').on('click', nextImg)
$('#left-button').on('click', lastImg)
$('#right-big-button').on('click', nextImg)
$('#left-big-button').on('click', lastImg)
$('#hburg-flex').on('click', dropDown)
$('#hburg-flex').on('click', hideBurger)
$('.modal-page').on('click', showBurger)
$('.modal-page').on('click', hideLinks)
$('#colors-button').click({text: '#colors'}, showModal)
$('#blue').on('click', makeBlue)
$('#pink').on('click', makePink)
$('#teal').on('click', makeTeal)
setInterval(nextProj, 6000)

// setInterval(nextImg,3500)
})

