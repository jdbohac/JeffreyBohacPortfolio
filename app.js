
let imgCounter = 0;
// works page carousel next image function
const nextImg = () => {
    $('#works-carousel')
        .children()
        .eq(imgCounter)
        .css('display', 'none')
        imgCounter++;
        //If there are no more images, reset counter
        if(imgCounter > $('#works-carousel').children().length -1){
            imgCounter = 0;
        }
        $('#works-carousel')
            .children()
            .eq(imgCounter)
            .fadeIn(370)
            .css('display', 'flex')
}
// works page carousel last image
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
//project carousel only goes one way
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
//hides any html on the #modal-flex element
const hideModal = () => {
    $('.modal-page').css('display', 'none')
}
//take modal div id as an argument and displays the appropriate page
const showModal = (modal) =>{
    hideModal();
    $(`${modal.data.id}`).fadeIn(800).css('display', 'flex')
}
//loads paragraph from about.html and displays it in appropriate 'about me' page
const showAbout = (modal) => {
    hideModal();
    $(`${modal.data.id}-box`).load(`about.html ${modal.data.id}-text`)
    $(`${modal.data.id}`).fadeIn(800).css('display', 'flex')
}
const dropDown = () => {
    //opens link menu
        $('.link').slideDown(200);
    //hides hamburger bars    
        $('#hburg-flex').slideUp()
}
const hideLinks = () => {
    //hamburger reappears
    $('#hburg-flex').slideDown()
    //hides links menu
    $('.link').slideUp(200)
}
// 'make' functions change css rules for background and text colors
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
    //showModal is called to display the current page based on div id
$('#home-button').click({id: '#home'}, showModal)
$('#about-button').click({id: '#about'}, showModal)
    //shows main about page when 'back' button is clicked
$('.back').click({id: '#about'}, showModal)
//showAbout function loads paragraph text from about.html to appropriate pages
$('#life-button').click({id: '#life'}, showAbout)
$('#work-button').click({id: '#work'}, showAbout)
$('#hobbies-button').click({id: '#hobbies'}, showAbout)
$('#works-button').click({id: '#works'}, showModal)
$('#projects-button').click({id: '#projects'}, showModal)
//carousel buttons
$('#right-button').on('click', nextImg)
$('#left-button').on('click', lastImg)
$('#right-big-button').on('click', nextImg)
$('#left-big-button').on('click', lastImg)
//handles dropdown menu
$('#hburg-flex').on('click', dropDown)
$('.modal-page').on('click', hideLinks)
//color scheme page displays
$('#colors-button').click({id: '#colors'}, showModal)
//changes color scheme when buttons are clicked
$('#blue').on('click', makeBlue)
$('#pink').on('click', makePink)
$('#teal').on('click', makeTeal)
$('#grey').on('click', makeGrey)
$('#white').on('click', makeWhite)
//project preview cycle every 6 seconds
setInterval(nextProj, 6000)
})

