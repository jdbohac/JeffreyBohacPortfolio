
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
const showHome = () => {
    hideModal();
    $('#home').fadeIn(800)
}
const showAbout = () =>{
    hideModal();
    $('#about').fadeIn(800)
}
const showWorks = () => {
    hideModal();
    $('#works').fadeIn(800).css('display', 'flex')
}
const emBiggen = () => {
    const $background = $('<div>').attr('id', 'big-background')
    const $img = $('<img>').attr('url', `works${imgCounter}.jpeg`).attr('id', 'big-img')
    $img.appendTo($background)
    $('#works').append($background)


}


$(() => {
$('#about-button').on('click', showAbout)
$('#home-button').on('click', showHome)
$('#works-button').on('click', showWorks)
$('#right-button').on('click', nextImg)
$('#left-button').on('click', lastImg)
$('#right-resize-button').on('click', nextImg)
// $('.carousel-img').on('click', emBiggen)
})