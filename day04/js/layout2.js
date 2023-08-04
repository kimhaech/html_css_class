window.onload=function(){// window 가 다 읽어질 때 수행
    let element = document.getElementsByClassName('main_menu')[0];

    element.addEventListener('click', function(){
        document.getElementsByTagName('nav')[0].classList.toggle('visible');
    });
}