$('#content').scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > 5 ) {
        document.getElementById('nav-navbar').classList.add('bg-navbar');
    }else{
        document.getElementById('nav-navbar').classList.remove('bg-navbar');
    }
});
document.getElementById('button-collapse').addEventListener('click', function () {
    if (document.getElementById('nav-navbar').classList.contains('bg-navbar')) {
        document.getElementById('nav-navbar').classList.remove('bg-navbar');
    } else {
        document.getElementById('nav-navbar').classList.add('bg-navbar');
    }
})