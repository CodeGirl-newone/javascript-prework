function buttonClicked(argButtonName) {  //gracz klika wybrany guzik
  const playerMove = argButtonName
  console.log('ruch gracza to: ', {playerMove});
  clearMessages();
  console.log({playerMove}, ' został kliknięty');

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ', {randomNumber});  //liczy cyfrę dla komputera
  
  const computerMove = getMoveName(randomNumber) 
    function getMoveName(argMoveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ', {argMoveId});
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } 
    }
  console.log('ruch komputera to: ', {computerMove});

  
  displayResult(playerMove, computerMove)  //pokazuje wynik rozgrywki
    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ', {argPlayerMove}, ', ', {argComputerMove});
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis');
      } else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Komputer zagrał ' + argComputerMove + ' , a gracz zagrał ' + argPlayerMove);
    } 
}


const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
