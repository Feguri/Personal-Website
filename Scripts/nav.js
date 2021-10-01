// @ts-check
const expand = () => {
    // document.getElementsByTagName('header')[0].style.height = '185px';

    document.getElementsByTagName('main')[0].style.marginTop = '-80px';
    document.getElementById('second-nav').style.display = 'flex';
    document.getElementById('second-nav').style.justifyContent = 'flex-start';
    document.getElementById('second-nav').style.zIndex = '10';
    document.getElementsByTagName('header')[0].style.borderBottom = 'none';
    


    document.getElementById('nav').removeEventListener('click', expand);;
    document.getElementById('nav').addEventListener('click', collapse);
}

const collapse = () => {
    document.getElementsByTagName('main')[0].style.marginTop = '70px';
    document.getElementById('second-nav').style.display = 'none';
    document.getElementsByTagName('header')[0].style.borderBottom = '1px solid white';

    document.getElementById('nav').removeEventListener('click', collapse);
    document.getElementById('nav').addEventListener('click', expand);
}



document.getElementById('nav').addEventListener('click', expand);