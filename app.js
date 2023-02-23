
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
$('#right-resize-button').on('click', nextImg)
$('#hburg-flex').on('click', dropDown)
$('#hburg-flex').on('click', hideBurger)
$('.modal-page').on('click', showBurger)
$('.modal-page').on('click', hideLinks)
})