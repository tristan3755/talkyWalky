let loupe=document.querySelector('.loupe')
let loupe1=document.getElementById('loupe1')
let manche=document.getElementById('manche')
let loupeTaille=document.querySelector('.loupeTaille')
let plus=document.querySelector('.plus')
let plus1=document.querySelector('.plus1')

loupe.addEventListener('mouseover',()=>{
loupe1.style.stroke="#B1B000"
manche.style.stroke="#B1B000"
loupeTaille.style.width="150%"
loupeTaille.style.height="150%"
plus.style.opacity="1"
plus.style.stroke="#B1B000"
plus1.style.opacity="1"
plus1.style.stroke="#B1B000"
})

loupe.addEventListener('mouseout',()=>{
    loupe1.style.stroke="#919192"
    manche.style.stroke="#919192"
    loupeTaille.style.width="100%"
    loupeTaille.style.height="100%"
    plus.style.opacity="0"
    plus1.style.opacity="0"
 
})
/*slider*/

let slider = document.querySelector('.slider')
let taille = slider.clientWidth

let rond1=document.querySelector('.rond1')
let rond2=document.querySelector('.rond2')
let rond3=document.querySelector('.rond3')
console.log(taille)

let droite = document.getElementById('flecheDroite')
let gauche = document.getElementById('flecheGauche')

let compteur = 0
window.addEventListener("resize", function(){
    taille =slider.clientWidth
});

if (compteur == 0) {
  gauche.style.opacity = "0"
  rond1.style.backgroundColor="white"
}
droite.addEventListener('click', () => {
  if (compteur < 2) {
    compteur++
    console.log(compteur)
    slider.scrollTo(taille * compteur, 0)
    gauche.style.opacity = '1'
  }
  if (compteur == 2) {
    droite.style.opacity = "0"
  }
})
gauche.addEventListener('click', () => {
  if (compteur > 0) {
    compteur--
    console.log(compteur)
    slider.scrollTo(taille * compteur, 0)
    droite.style.opacity = '1'
  }
  if (compteur == 0) {
    gauche.style.opacity = "0"
  }
})


droite.addEventListener('click', () => {
    if (compteur == 0) {
        rond1.style.backgroundColor="white"
        rond2.style.backgroundColor="transparent"
        rond3.style.backgroundColor="transparent"
      }
      if (compteur == 1) {
        rond1.style.backgroundColor="transparent"
        rond2.style.backgroundColor="white"
        rond3.style.backgroundColor="transparent"
      }
      if (compteur == 2) {
        rond1.style.backgroundColor="transparent"
        rond2.style.backgroundColor="transparent"
        rond3.style.backgroundColor="white"
      }


})

gauche.addEventListener('click', () => {
    if (compteur == 0) {
        rond1.style.backgroundColor="white"
        rond2.style.backgroundColor="transparent"
        rond3.style.backgroundColor="transparent"
      }
      if (compteur == 1) {
        rond1.style.backgroundColor="transparent"
        rond2.style.backgroundColor="white"
        rond3.style.backgroundColor="transparent"
      }
      if (compteur == 2) {
        rond1.style.backgroundColor="transparent"
        rond2.style.backgroundColor="transparent"
        rond3.style.backgroundColor="white"
      }


})

/*intersection observer*/
let target = document.querySelector('.article1');
let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
      console.log(entry.isIntersecting)
      console.log(entry.intersectionRatio)
      if (entry.intersectionRatio>=0.5) {
        console.log('j \'y suis')
        target.style.opacity='1'
        observer.disconnect()
      }
    })
  },{threshold: 0.5});


  observer.observe(target);


  let target2 = document.querySelector('.article2');
  let observer2 = new IntersectionObserver((entries) => {
  
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio>=0.3) {
          console.log('j \'y suis')
          target2.style.opacity='1'
          observer.disconnect()
        }
      })
    },{threshold: 0.3});
  
  
    observer2.observe(target2);

    let target3 = document.querySelector('.article3');
let observer3 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
      console.log(entry.isIntersecting)
      console.log(entry.intersectionRatio)
      if (entry.intersectionRatio>=0.3) {
        console.log('j \'y suis')
        target3.style.opacity='1'
        observer.disconnect()
      }
    })
  },{threshold: 0.3});


  observer3.observe(target3);


  let target4 = document.getElementById('abonnement');
  let observer4 = new IntersectionObserver((entries) => {
  
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio>=0.2) {
          console.log('j \'y suis')
          target4.style.opacity='1'
          target4.style.transform="translateX(0)"
          observer.disconnect()
        }
      })
    },{threshold: 0.2});
  
  
    observer4.observe(target4);
  

    let target5 = document.getElementById('contactForm');
    let observer5 = new IntersectionObserver((entries) => {
    
        entries.forEach((entry) => {
          console.log(entry.isIntersecting)
          console.log(entry.intersectionRatio)
          if (entry.intersectionRatio>=0.4) {
            console.log('j \'y suis')
            target5.style.opacity='1'
            target5.style.transform="translatex(0)"
            observer.disconnect()
          }
        })
      },{threshold: 0.4});
    
    
      observer5.observe(target5);