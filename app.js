
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
    $(`${modal.data.id}`).fadeIn(800).css('display', 'flex')
}
const hideLinks = () => {
    $('.link').slideUp(200)
}
const showAbout = (modal) => {
    hideModal();
    $(`${modal.data.id}-box`).load(`about.html ${modal.data.id}-text`)
    $(`${modal.data.id}`).fadeIn(800).css('display', 'flex')
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
    $('body').css('background-color', 'rgba(90, 90, 134)')
    $('h1').css('color', 'rgb(231, 232, 211)')
    $('#header li').css('color', 'rgb(208, 209, 188)')
}
const makeGrey = () => {
    $('body').css('background-color', 'rgb(79, 82, 99)')
    $('h1').css('color', 'rgb(171, 191, 207)')
    $('#header li').css('color', 'rgb(171, 191, 195)')
}
const makePink = () => {
    $('body').css('background-color', 'rgb(236, 212, 224)')
    $('h1').css('color', 'rgb(195, 155, 187)')
    $('#header li').css('color', 'rgb(138, 114, 105)')
}
const makeTeal = () => {
    $('body').css('background-color', 'rgba(9, 109, 109)')
    $('h1').css('color', 'rgb(177, 161, 59)')
    $('#header li').css('color', 'rgb(197, 182, 85)')
}
const makeWhite = () => {
    $('body').css('background-color', 'rgb(233, 230, 220)')
    $('h1').css('color', 'rgb(42, 41, 50)')
    $('#header li').css('color', 'rgb(42, 41, 50)')
}


$(() => {
    
$('#home-button').click({id: '#home'}, showModal)
$('#about-button').click({id: '#about'}, showModal)
$('.back').click({id: '#about'}, showModal)
$('#life-button').click({id: '#life'}, showAbout)
$('#work-button').click({id: '#work'}, showAbout)
$('#hobbies-button').click({id: '#hobbies'}, showAbout)
$('#works-button').click({id: '#works'}, showModal)
$('#projects-button').click({id: '#projects'}, showModal)
$('#right-button').on('click', nextImg)
$('#left-button').on('click', lastImg)
$('#right-big-button').on('click', nextImg)
$('#left-big-button').on('click', lastImg)
$('#hburg-flex').on('click', dropDown)
$('#hburg-flex').on('click', hideBurger)
$('.modal-page').on('click', showBurger)
$('.modal-page').on('click', hideLinks)
$('#colors-button').click({id: '#colors'}, showModal)
$('#blue').on('click', makeBlue)
$('#pink').on('click', makePink)
$('#teal').on('click', makeTeal)
$('#grey').on('click', makeGrey)
$('#white').on('click', makeWhite)
setInterval(nextProj, 6000)

// setInterval(nextImg,3500)
})

