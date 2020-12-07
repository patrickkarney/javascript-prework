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

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier'
} else{
    computerMove = 'nożyce'
}*/

printMessage('Mój ruch to: ' + computerMove);

//Player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} */
printMessage('Twój ruch to: ' + playerMove);

//Possible outcomes

if(randomNumber == playerInput){
    printMessage('Mamy remis! Zagraj jeszcze raz!');
} else if(randomNumber>playerInput && Math.abs(randomNumber-playerInput) == 1){
    printMessage('Wygrał komputer, zagraj jeszcze raz!');
} else if(randomNumber<playerInput && Math.abs(randomNumber-playerInput) == 1){
    printMessage('Wygrałeś, brawo!');
} else if(randomNumber == '3' && playerInput == '1'){
    printMessage('Wygrałeś, brawo!');
} else if(randomNumber == '1' && playerInput == '3'){
    printMessage('Wygrał komputer, zagraj jeszcze raz!');
}
