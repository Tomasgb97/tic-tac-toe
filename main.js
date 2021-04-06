
const placingboxes = document.querySelectorAll('.placing');

let playerxturn =true;

placingboxes.forEach(box => box.addEventListener('mouseover', function(){

    if(playerxturn){

       return  box.classList.add('placing-x')
    } else { return box.classList.add('placing-o')}

}))
placingboxes.forEach(box => box.addEventListener('mouseout', function(){

    box.classList.remove('placing-x');
    box.classList.remove('placing-o');

}))

let gameboard = (function(){

    let markSpot = document.querySelectorAll('[data-spot]');
    
    let checkwinner = () => {

        if( spaces[0] == 'X' && spaces[1] == 'X' && spaces[2] == 'X' ||
            spaces[0] == 'X' && spaces[3] == 'X' && spaces[6] == 'X' ||
            spaces[0] == 'X' && spaces[4] == 'X' && spaces[8] == 'X' ||
            spaces[1] == 'X' && spaces[4] == 'X' && spaces[7] == 'X' ||
            spaces[2] == 'X' && spaces[5] == 'X' && spaces[8] == 'X' ||
            spaces[3] == 'X' && spaces[4] == 'X' && spaces[5] == 'X' ||
            spaces[6] == 'X' && spaces[7] == 'X' && spaces[8] == 'X' ||
            spaces[2] == 'X' && spaces[4] == 'X' && spaces[6] == 'X'){

             return console.log('WINNER IS X !!')
        } else if ( spaces[0] == 'O' && spaces[1] == 'O' && spaces[2] == 'O' ||
                    spaces[0] == 'O' && spaces[3] == 'O' && spaces[6] == 'O' ||
                    spaces[0] == 'O' && spaces[4] == 'O' && spaces[8] == 'O' ||
                    spaces[1] == 'O' && spaces[4] == 'O' && spaces[7] == 'O' ||
                    spaces[2] == 'O' && spaces[5] == 'O' && spaces[8] == 'O' ||
                    spaces[3] == 'O' && spaces[4] == 'O' && spaces[5] == 'O' ||
                    spaces[6] == 'O' && spaces[7] == 'O' && spaces[8] == 'O' ||
                    spaces[2] == 'O' && spaces[4] == 'O' && spaces[6] == 'O'){
                        return console.log('Winner is O !')
                    }
        else if (!spaces.includes("")) {return console.log('Its a TIE !')}
    }
    let spaces = ["", "", "", "", "", "", "", "", ""];

    let renderMarks = () => {

        markSpot.forEach(function(element){

        
        const attribute = element.getAttribute('data-spot');
        element.addEventListener('click', function(){
            
            if(playerxturn && (spaces[(attribute-1)] == "")){
            gameboard.setMark(attribute, 'X');
            playerxturn = false;
            begin.change();
            checkwinner();
            return gameboard.renderMarks();}


            else if (!playerxturn && (spaces[(attribute-1)] == ""))
            {gameboard.setMark(attribute, 'O');
            playerxturn = true;
            begin.change();
            checkwinner();
             return gameboard.renderMarks();}


            else return}
         )
        return element.textContent = spaces[(attribute-1)];
          
        })

    }

    let setMark = (location, value) => {

        spaces.splice((location-1), 1, value);
        
    }
        return {renderMarks, setMark};
})();

 gameboard.renderMarks();




const playerone = (name) => {

    name = name;
    
    return {name};
}


const playertwo = (name) => {

    name = name;
    
    return {name};
}

const begin = (function(){
const player1name = document.getElementById('player1name');
const player2name = document.getElementById('player2name');
const startbutton = document.getElementById('startbutton');
const playerxdisplay = document.getElementById('playerxname');
const player0display = document.getElementById('playeroname');
const playerxtext =document.getElementById('playerxtext');
const playerotext =document.getElementById('playerotext');
const namesdiv = document.getElementById('namesdiv');

let change = () => {
    
    if(player0display.classList.contains('fadein')){
        
        player0display.classList.add('fadeout');
        player0display.classList.remove('fadein');
        playerxdisplay.classList.add('fadein');
        playerxdisplay.classList.remove('fadeout')}
        else {
            player0display.classList.remove('fadeout');
        player0display.classList.add('fadein');
        playerxdisplay.classList.remove('fadein');
        playerxdisplay.classList.add('fadeout')

        }
}

let start = startbutton.addEventListener('click', function(){

    playerone(player1name.value);
    playertwo(player2name.value);

    playerxdisplay.style.visibility = 'visible';

    playerxtext.textContent = player1name.value;
    
    playerotext.textContent = player2name.value;


     return namesdiv.classList.toggle('fadein');
})
return {start, change}})();
