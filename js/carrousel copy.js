(function(){
    // fonction IFEE
    console.log('début du carrousel');   
    let elmCarrousel  = document.querySelector('.carrousel');
    let elmBouton__x = document.querySelector('.bouton__x');
    let suivant = document.querySelector('.flecheSuivant');
    let precedent = document.querySelector('.flechePrecedent');
    //console.log(bouton__ouvrir.tagName);
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerie__img = elmGalerie.querySelectorAll('img'); // images de la galerie
    let elmCarrousel__figure = document.querySelector('.carrousel__figure'); // conteneur des images
    let elmCarrousel__form = document.querySelector('.carrousel__form');// conteneur de radio bouton
    let imgActive = document.querySelector('.carrousel__img--activer'); 
    let indexImgActive = 0;    
    let index = 0;
    let index__precedent = -1;  
  
    elmBouton__x.addEventListener('mousedown', function(){              
        elmCarrousel.parentNode.removeChild(elmCarrousel);      
    })

    for (let index = 0; index < elmGalerie__img.length; index++) {

        elmGalerie__img[index].addEventListener('click', function(){
          
            elmCarrousel.classList.add('carrousel--ouvrir')         
           // if(elmCarrousel__form.length == 0){     
               ajouter_carrousel(index);      
            //}  
            if (index == 0){
                precedent.disabled = true;
            }
            if (index == elmCarrousel__figure.children.length){
                suivant.disabled = true;
            }
            let selector = `input[name="radCarrousel"][data-index="${index}"]`;
            let radioBtn = document.querySelector(selector);
            radioBtn.checked = true;  
        })           
    }
 
    suivant.addEventListener('click', function(){     
        let selector = `input[name="radCarrousel"][data-index="${indexImgActive + 1}"]`;
        if (indexImgActive < elmCarrousel__figure.children.length - 1){
          let radioBtn = document.querySelector(selector);
          radioBtn.checked = true;    
        }     

        if (indexImgActive == elmCarrousel__figure.children.length - 2){
            suivant.disabled = true;
        }
        else suivant.disabled = false;
        precedent.disabled = false;
        indexImgActive += 1;   
        activer__image(indexImgActive)         
    })

    precedent.addEventListener('click', function(){
        let selector = `input[name="radCarrousel"][data-index="${indexImgActive - 1}"]`;        
        indexImgActive -= 1; 
        if (indexImgActive >= 0){
            let radioBtn = document.querySelector(selector);
            radioBtn.checked = true;    
        }

        if (indexImgActive == 0){
            precedent.disabled = true;
        }
        suivant.disabled = false;                
        activer__image(indexImgActive)         
    })

    //****************************************************************** */

    function ajouter_carrousel(index) {  
        let imageActiveActuelle = document.querySelector('.carrousel__img--activer')
        if(imageActiveActuelle) imageActiveActuelle.classList.remove('carrousel__img--activer') 
        for (const elmImg of elmGalerie__img) {
            ajouter_img(elmImg) // ajoute l'image dans le carrousel                
            ajouter_radio() // ajoute des radio bouton dans carrousel__form
        }  
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer')
    }

    //****************************************************************** */

    function ajouter_img(elmImg){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add('carrousel__img')
        elmCarrousel__img.dataset.index = index
        elmCarrousel__figure.appendChild(elmCarrousel__img)   
    }

    //****************************************************************** */

    function ajouter_radio(){
        let elmCarrousel__radio = document.createElement('input')
        elmCarrousel__radio.setAttribute('type', 'radio')
        elmCarrousel__radio.setAttribute('name', 'radCarrousel')
        elmCarrousel__radio.dataset.index = index
        index ++
        elmCarrousel__form.appendChild(elmCarrousel__radio)    
        elmCarrousel__radio.addEventListener('mousedown', function(){
            activer__image(this.dataset.index)            
        })
    }  

    //****************************************************************** */

    function activer__image(index){
        if (index < 0 || index >= elmCarrousel__figure.children.length) {
            return;
        }          
        if(index__precedent != -1){
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer');
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer');
        index__precedent = index;
    }       
    
})() 