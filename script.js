document.getElementById('button-collapse').addEventListener('click', function(){
    if (document.getElementById('nav-navbar').classList.contains('bg-navbar')) {
        document.getElementById('nav-navbar').classList.remove('bg-navbar');
    }else{
    document.getElementById('nav-navbar').classList.add('bg-navbar');
}
})