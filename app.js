
//initiate variables for carousels
let imgCounter = 0;
let projectsCounter=0;
// 'works' page carousel next image function
const nextImg = () => {
    //hide current img in carousel
    //increment counter to select next img
    $('#works-carousel')
        .children()
        .eq(imgCounter)
        .css('display', 'none')
        imgCounter++;
        //If there are no more images, reset counter
        if(imgCounter > $('#works-carousel').children().length -1){
            imgCounter = 0;
        }
    //display currently selected img
        $('#works-carousel')
            .children()
            .eq(imgCounter)
            .fadeIn(370)
            .css('display', 'flex')
}
// works page carousel last image
const lastImg = () => {
    //hide currently selected img
    //decrement counter to select previous img
    $('#works-carousel')
        .children()
        .eq(imgCounter)
        .css('display', 'none')
        imgCounter--;
    //if previous image is the first in the 
    //div, selects last img in the carousel div
        if(imgCounter < 0){ 
            imgCounter = $('#works-carousel').children().length -1;
        }
    //display currently selected img
        $('#works-carousel')
            .children()
            .eq(imgCounter)
            .fadeIn(370)
            .css('display', 'block')
}
//project carousel only goes one way
const nextProj = () => {
    //hides currently displayed project
    $('#projects-body')
        .children('div')
        .eq(projectsCounter)
        .css('display', 'none')
        projectsCounter++;
        //if there are no more reset counter
        if(projectsCounter > $('#projects-body').children('div').length-1){
            projectsCounter = 0;
        }
        //dipslay currently selected project
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
//accepts modal id as argument
const showAbout = (modal) => {
    hideModal();
    //grabs box in which text will be  inserted with id-box
    //loads 'p' element from about.html with id-text
    $(`${modal.data.id}-box`).load(`about.html ${modal.data.id}-text`)
    //displays modal w/text
    $(`${modal.data.id}`).fadeIn(800).css('display', 'flex')
}
const dropDown = () => {
    //opens link menu
        $('#links-menu').slideDown(200);
    //hides hamburger bars    
        $('#hburg-flex').slideUp()
}
const hideLinks = () => {
    //hamburger reappears
    $('#hburg-flex').slideDown()
    //hides links menu
    $('#links-menu').slideUp(200)
}
// 'make' functions change css rules for background and text colors
const makeBlue = () => {
    $('body').css('background-color', 'rgba(90, 90, 134)')
    $('#header').css('background-color', 'rgba(90, 90, 134)')
    $('h1').css('color', 'rgb(231, 232, 211)')
    $('#header li').css('color', 'rgb(208, 209, 188)')
}
const makeGrey = () => {
    $('body').css('background-color', 'rgb(79, 82, 99)')
    $('#header').css('background-color', 'rgb(79, 82, 99)')
    $('h1').css('color', 'rgb(171, 191, 207)')
    $('#header li').css('color', 'rgb(171, 191, 195)')
}
const makePink = () => {
    $('body').css('background-color', 'rgb(236, 212, 224)')
    $('#header').css('background-color', 'rgb(236, 212, 224)')
    $('h1').css('color', 'rgb(195, 155, 187)')
    $('#header li').css('color', 'rgb(138, 114, 105)')
}
const makeTeal = () => {
    $('body').css('background-color', 'rgba(9, 109, 109)')
    $('#header').css('background-color', 'rgba(9, 109, 109)')
    $('h1').css('color', 'rgb(177, 161, 59)')
    $('#header li').css('color', 'rgb(197, 182, 85)')
}
const makeWhite = () => {
    $('body').css('background-color', 'rgb(233, 230, 220)')
    $('#header').css('background-color', 'rgb(233, 230, 220)')
    $('h1').css('color', 'rgb(42, 41, 50)')
    $('#header li').css('color', 'rgb(42, 41, 50)')
}
const makeOrange = () => {
    $('body').css('background-color', 'rgb(245, 192, 149)')
    $('#header').css('background-color', 'rgb(245, 192, 149)')
    $('h1').css('color', 'rgba(168, 243, 212, 0.964)')
    $('#header li').css('color', 'rgba(199, 240, 195, 0.964)')
}

//enough functions it's time for events!
$(() => {
    //showModal is called to display the current page based on div id
$('#home-button').click({id: '#home'}, showModal)
$('#about-button').click({id: '#about'}, showModal)
    //shows main about page when 'back' button is clicked
$('.back').click({id: '#about'}, showModal)
//showAbout function loads paragraph text from about.html to appropriate pages
$('#life-button').click({id: '#life'}, showAbout)
$('#work-button').click({id: '#work'}, showAbout)
$('#dev-button').click({id: '#development'}, showAbout)
$('#hobbies-button').click({id: '#hobbies'}, showAbout)
//more modal pages
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
//display contact page
$('#contact-button').click({id: '#contact'}, showModal)
//changes color scheme when buttons are clicked
$('#blue').on('click', makeBlue)
$('#pink').on('click', makePink)
$('#teal').on('click', makeTeal)
$('#grey').on('click', makeGrey)
$('#white').on('click', makeWhite)
$('#orange').on('click', makeOrange)
//project preview cycle every 6 seconds
setInterval(nextProj, 6000)
})

