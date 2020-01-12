const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //first. the computer's options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option=>{
            option.addEventListener('click', function(){
                const computerNumber =Math.floor(Math.random()*3); // Math.floor = deduce the largest or same constant of conclusion which is drawed by Math.random
                const computerChoice = computerOptions[computerNumber]; // Beforehand, I made the array of computer options"[rock,paper,scissors] and const "computerNumber" impose random number from 0 to 2 which is used for concluding what the computer choose amongst three options.
                
            });
        });
    };

    const compareHands = (playerChoice,computerChoice)=>{
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
        }
    }

    startGame();
    playMatch();
};

game();