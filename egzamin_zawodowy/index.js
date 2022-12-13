//pobieramy blok-prawy
const blokPrawy = document.querySelector('.blok-prawy');

//pobieramy przyciski koloru tła
const btnColor=document.querySelectorAll('button');

//klikamy w pierwszy przycisk 
btnColor[0].addEventListener('click', function(){
    blokPrawy.style.backgroundColor = 'Indigo';
});

//klikamy w drugi przycisk 
btnColor[1].addEventListener('click', function(){
    blokPrawy.style.backgroundColor = 'SteelBlue';
});

//klikamy w trzecu przycisk 
btnColor[2].addEventListener('click', function(){
    blokPrawy.style.backgroundColor = 'Olive';
});

//pobieramy liste z kolorami czcionki 
const czcionkasel = document.querySelector('select');

//zmiana koloru czcionki po wyborze
czcionkasel.addEventListener('change',function(){
blokPrawy.style.color = czcionkasel.value
})

//pobieramy pole z rozmiarem czcionki
const rozmiarCzcionki = document.querySelector('input[name="czcionka"]')

//zmieniamy rozmiar czcionki
rozmiarCzcionki.addEventListener('blur', function(){
    blokPrawy.style.fontSize = rozmiarCzcionki.value;
})

//pobieramy pole ramka
const ramka = document.querySelector('input[name="ramka"]');

const image = document.querySelector('section img')

ramka.addEventListener('change', function(){
    if(!ramka.checked){
        image.style.border = 'none';
    }
    if(ramka.checked){
        image.style.border = '1px solid white';
    }
})

const punkt = document.querySelector('ul')
const Punktor = document.querySelectorAll('input[name="punktory"]')


Punktor[0].addEventListener('click', function(){
    punkt.style.listStyleType = 'disc';
})

Punktor[1].addEventListener('click', function(){
    punkt.style.listStyleType = 'square';
})

Punktor[2].addEventListener('click', function(){
    punkt.style.listStyleType = 'circle';
})