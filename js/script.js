
let playerScore = 0;
let computerScore = 0;

function playGame(playerInput){

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
        return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        }

    
    }

    function displayResult(argComputerMove, argPlayerMove){
    
        console.log('moves:', argComputerMove, argPlayerMove);

        printMessage('Komputer zagrał: '+ computerMove);
        printMessage('Ty zagrałeś: ' + playerMove);

        const winCondition = (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') ||
                             (argComputerMove === 'nożyce' && argPlayerMove === 'papier') ||
                             (argComputerMove === 'papier' && argPlayerMove === 'kamień')

        if(argComputerMove === argPlayerMove) printMessage('Mamy remis! Zagraj jeszcze raz!');
        else if(winCondition) {
            printMessage('Wygrał komputer, zagraj jeszcze raz!')
            return 1;
        }
        else {
            printMessage('Wygrałeś, brawo!')
            return 0;
        }
    }

    function score(argPoint){
        if (argPoint === 1) computerScore = computerScore+1;
        else if(argPoint === 0) playerScore = playerScore+1;
        console.log(computerScore, playerScore);
        document.getElementById('result').innerHTML = 'Komputer: ' + computerScore + ' Gracz: ' + playerScore;
    }
        
    clearMessages()

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);    

    score(displayResult(computerMove, playerMove));
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

  //document.getElementById('result').innerHTML = 'Komputer: ' + computerScore + ' Gracz: ' + playerScore;
