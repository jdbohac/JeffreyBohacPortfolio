
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
            .fadeIn(800)
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
            .fadeIn(800)
            .css('display', 'flex')
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
        $('.link').slideToggle(200);
}
const makeBlue = () => {
    $('body').css('background-color', 'rgba(90, 90, 134)')
    $('h1').css('color', ('rgb(225, 226, 188'))
    $('#header li').css('color', 'rgb(225, 226, 188')
}
const makePink = () => {
    $('body').css('background-color', 'rgb(236, 212, 224)')
    $('h1').css('color', 'rgb(218, 180, 210)')
    $('#header li').css('color', 'rgb(138, 114, 105)')
}
const makeTeal = () => {
    $('body').css('background-color', 'rgba(9, 109, 109)')
    $('h1').css('color', 'rgb(197, 182, 85)')
    $('#header li').css('color', 'rgb(197, 182, 85)')
}


$(() => {
$('#home-button').click({text: '#home'}, showModal)
$('#about-button').click({text: '#about'}, showModal)
$('.back').click({text: '#about'}, showModal)
$('#life-button').click({text: '#life'}, showModal)
$('#work-button').click({text: '#work'}, showModal)
$('#hobbies-button').click({text: '#hobbies'}, showModal)
$('#works-button').click({text: '#works'}, showModal)
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
})

