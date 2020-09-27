let Main = document.getElementById('Main-animation');
let Nav = document.getElementById('bars');

addEventListener("click", () => {
    Main.style.backgroundColor = 'blue';

    let i = 0;
    function maFonction(){
        // alert('1er boucle: ' + i)
        Main.style.left = i * -20 + '%';
        i++
        if(i>10){return}
        setTimeout( maFonction(), 1000 )
    }
    maFonction()
});