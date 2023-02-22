
const hideModal = () => {
    $('.modal-page').css('display', 'none')
}
const showHome = () => {
    hideModal();
    $('#home').fadeIn(1000)
}
const showAbout = () =>{
    hideModal();
    $('#about').fadeIn(1000)
}



$(() => {
$('#about-button').on('click', showAbout)
$('#home-button').on('click', showHome)

})