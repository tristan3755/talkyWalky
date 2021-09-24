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



