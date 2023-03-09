(function(){
    // fonction IFEE
    console.log('début du carrousel');

    let bouton__ouvrir = document.querySelector('.bouton__ouvrir');
    let elmCarrousel  = document.querySelector('.carrousel');
    let elmBouton__x = document.querySelector('.bouton__x');
    //console.log(bouton__ouvrir.tagName);

    bouton__ouvrir.addEventListener('mousedown', function(){
        console.log('boite modale');
        elmCarrousel.classList.add('carrousel--ouvrir')
    })

    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boite modale');
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })

})() 