document.getElementById('hamburger-menu').onclick = function(){
    var element = document.getElementsByClassName('main-menu')[0];
    var classList = element.classList;
    classList.toggle('show');

    var mobileMenu = document.getElementsByClassName('hamburger-menu')[0];
    var mobileMenuClasses = mobileMenu.classList;
    mobileMenuClasses.toggle('active');

    return false;
};