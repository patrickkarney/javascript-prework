
function playGame(playerInput){

    clearMessages()

    //Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
        return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    //Player move

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    //Possible outcomes

    function displayResult(argComputerMove, argPlayerMove){
    
        console.log('moves:', argComputerMove, argPlayerMove);

        printMessage('Komputer zagrał: '+ computerMove);
        printMessage('Ty zagrałeś: ' + playerMove);

        if(argComputerMove == argPlayerMove){
            printMessage('Mamy remis! Zagraj jeszcze raz!');
        } else if(argComputerMove>argPlayerMove && Math.abs(argComputerMove-argPlayerMove) == 1){
            printMessage('Wygrał komputer, zagraj jeszcze raz!');
        } else if(argComputerMove<argPlayerMove && Math.abs(argComputerMove-argPlayerMove) == 1){
            printMessage('Wygrałeś, brawo!');
        } else if(argComputerMove == '3' && argPlayerMove == '1'){
            printMessage('Wygrałeś, brawo!');
        } else if(argComputerMove == '1' && argPlayerMove == '3'){
            printMessage('Wygrał komputer, zagraj jeszcze raz!');
        }

    }

    displayResult(randomNumber, playerInput);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
