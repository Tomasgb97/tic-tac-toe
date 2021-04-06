
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

             return begin.playerwins('X');
        } else if ( spaces[0] == 'O' && spaces[1] == 'O' && spaces[2] == 'O' ||
                    spaces[0] == 'O' && spaces[3] == 'O' && spaces[6] == 'O' ||
                    spaces[0] == 'O' && spaces[4] == 'O' && spaces[8] == 'O' ||
                    spaces[1] == 'O' && spaces[4] == 'O' && spaces[7] == 'O' ||
                    spaces[2] == 'O' && spaces[5] == 'O' && spaces[8] == 'O' ||
                    spaces[3] == 'O' && spaces[4] == 'O' && spaces[5] == 'O' ||
                    spaces[6] == 'O' && spaces[7] == 'O' && spaces[8] == 'O' ||
                    spaces[2] == 'O' && spaces[4] == 'O' && spaces[6] == 'O'){
                        return begin.playerwins('O');
                    }
        else if (!spaces.includes("")) {return begin.playerwins('tie)')}
    }
    let spaces = ["", "", "", "", "", "", "", "", ""];

    let renderMarks = () => {

        markSpot.forEach(function(element){

        
        const attribute = element.getAttribute('data-spot');
        element.addEventListener('click', function(){
            
            if(playerxturn && (spaces[(attribute-1)] == "")){
            gameboard.setMark(attribute, 'X');
            playerxturn = false;
            checkwinner();
            begin.change();
            return gameboard.renderMarks();}


            else if (!playerxturn && (spaces[(attribute-1)] == ""))
            {gameboard.setMark(attribute, 'O');
            playerxturn = true;
            checkwinner();
            begin.change();
             return gameboard.renderMarks();}


            else return}
         )
        return element.textContent = spaces[(attribute-1)];
          
        })

    }

    let reset = () =>{

        spaces = ["", "", "", "", "", "", "", "", ""];
        return renderMarks();

    }

    let setMark = (location, value) => {

        spaces.splice((location-1), 1, value);
        
    }
        return {renderMarks, setMark, reset};
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
const body = document.getElementById('body');

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

let playerwins = (player) => {
    if(player == 'X'){
        imagen = 'crownx';
        winneris = `WINNER IS ${player1name.value}`
        playerxturn = true;
    } else if(player == 'O'){
        imagen = 'crowno';
       winneris = `WINNER IS ${player2name.value}`
       playerxturn = true;
    }else{
        winneris = "IT'S A TIE !"
        imagen = 'tieimage';
        playerxturn =true;
    }
    
    const winnerDiv = document.createElement('div');
    winnerDiv.classList.add('winnerdiv');
    const header = document.createElement('h1');
    header.textContent = winneris;
    const crown = document.createElement('div');
    crown.classList.add(imagen);
    const restartbttn = document.createElement('button');
    restartbttn.textContent = `RE-START`
    restartbttn.id = 'restart'
    winnerDiv.appendChild(header);
    winnerDiv.appendChild(crown);
    winnerDiv.appendChild(restartbttn);

    restartbttn.addEventListener('click', function(){

        winnerDiv.classList.toggle('fadein');
        playerxdisplay.style.visibility= 'hidden';
        gameboard.reset();
        player0display.classList.remove('fadeout')
        player0display.classList.add('fadein');
        namesdiv.classList.toggle('fadein');
        player1name.value = "";
        player2name.value = "";

    })

    body.appendChild(winnerDiv);
    

}
return {start, change, playerwins}})();
