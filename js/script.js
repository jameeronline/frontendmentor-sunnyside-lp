document.getElementById('hamburger-menu').onclick = function(){
    var element = document.getElementsByClassName('main-menu')[0];
    var classList = element.classList;
    classList.toggle('show');
    return false;
};