let i = 1;
document.querySelector('#icon_partie1').addEventListener('click', () => {
    if(i === 1){
        document.querySelector('#partie1').style.display = 'inline'
        i = 0;
    }else{
        document.querySelector('#partie1').style.display = 'none'
        i = 1;
    }
});
//partie 2
let j = 1;
document.querySelector('#icon_partie2').addEventListener('click', () => {
    if(j === 1){
        document.querySelector('#partie2').style.display = 'inline'
        j = 0;
    }else{
        document.querySelector('#partie2').style.display = 'none'
        j = 1;
    }
});
let k = 1;
document.querySelector('#icon_partie3').addEventListener('click', () => {
    if(k === 1){
        document.querySelector('#partie3').style.display = 'inline'
        k = 0;
    }else{
        document.querySelector('#partie3').style.display = 'none'
        k = 1;
    }
});
let l = 1;
document.querySelector('#icon_entier').addEventListener('click', () => {
    if(l === 1){
        document.querySelector('#entier').style.display = 'inline'
        l = 0;
    }else{
        document.querySelector('#entier').style.display = 'none'
        l = 1;
    }
});
let m = 1;
document.querySelector('#icon_carte_waco').addEventListener('click', () => {
    if(m === 1){
        document.querySelector('#carte_waco').style.display = 'inline'
        m = 0;
    }else{
        document.querySelector('#carte_waco').style.display = 'none'
        m = 1;
    }
});

let q = 1;
document.querySelector('#menu').addEventListener('click', () => {
    if(q === 1){
        document.querySelector('#iframe_genially').style.display = 'inline'
        q = 0;
    }else{
        document.querySelector('#iframe_genially').style.display = 'none'
        q = 1;
    }
});

let r = 1;
document.querySelector('#menu').addEventListener('focus', () => {
    if(r === 1){
        document.querySelector('#iframe_genially').style.display = 'inline'
        r = 0;
    }else{
        document.querySelector('#iframe_genially').style.display = 'none'
        r = 1;
    }
});