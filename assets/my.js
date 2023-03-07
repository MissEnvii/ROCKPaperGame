// app.js
  
// Complete logic of game inside this function
var game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    // Function to 
    var playGame = () => {
        var rockBtn = document.querySelector('.rock');
        var paperBtn = document.querySelector('.paper');
        var scissorBtn = document.querySelector('.scissor');
        var playerOptions = [rockBtn,paperBtn,scissorBtn];
        var computerOptions = ['rock','paper','scissors']
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                var movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                  
  
                var choiceNumber = Math.floor(Math.random()*3);
                var computerChoice = computerOptions[choiceNumber];
  
                // Function to check who wins
                winner(this.innerText,computerChoice)
                  
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
    // Function to decide winner
    var winner = (player,computer) => {
        var result = document.querySelector('.result');
        var playerScoreBoard = document.querySelector('.p-count');
        var computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
  
    // Function to run when game is over
    var gameOver = (playerOptions,movesLeft) => {
  
        var chooseMove = document.querySelector('.move');
        var result = document.querySelector('.result');
        var reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
  
  
    // Calling playGame function inside game
    playGame();
      
}
  
// Calling the game function
game();