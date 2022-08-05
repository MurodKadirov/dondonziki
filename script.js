window.addEventListener('load', () => {
    const choices = document.querySelectorAll('.choices')
    const score = document.querySelector('.score')
    const modal = document.querySelector('.modal')
    const result = document.querySelector('#result')
    const restart = document.querySelector('#restart')
    scoreBoard = {
        player: 0, 
        computer: 0,
    };

// Play Game
    function play(event) {
        restart.style.dispay = 'inline-block'
        const playerChoice = event.target.id 
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice)
    }

// GetComputerChoise
    function getComputerChoice() {
        const rand = Math.random()
        if(rand < 0.34){
            return 'rock'
        }else if (rand < 0.67){
            return 'paper'
        }else{
            return 'scissors'
        }
    }

// GetWinner
    function getWinner(p, c){
        if(p === c){
            return 'draw'
        } else if (p === 'rock'){
            if(c === 'paper'){
                return 'computer'
            }else{
                return 'player'
            }
        } else if (p === 'paper'){
            if(c === 'scissors'){
                return 'computer'
            }else{
                return 'player'
            }
        } else if (p === 'scissors'){
            if(c === 'rock'){
                return 'computer'
            }else{
                return 'player'
            }
        } 
    }

// ShowWinner
    function showWinner(winner, computerChoice){
        if(winner === 'player'){
            scoreBoard.player++
            result.innerHTML = ` 
                <h1 class="text-win"> You Win </h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>Computer Choce <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        } else if (winner === 'computer'){
            scoreBoard.computer++
            result.innerHTML = `
                <h1 class="text-lose"> You Lose </h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>Computer Choce <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        } else{
            result.innerHTML = `
                <h1> It's A Draw </h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>Computer Choce <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }
        score.innerHTML = `
            <p> Player : ${scoreBoard.player} </p>
            <p> Computer : ${scoreBoard.computer} </p>
        `
        modal.style.display = 'block'
    }

// RestartGame 
    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
            <p> Player : ${scoreBoard.player} </p>
            <p> Computer : ${scoreBoard.computer} </p>
        `
    }

// ClearModal
    function clearModal(event) {
        if(event.target == modal){
            modal.style.display = 'none'
        }
    }

// Event
    choices.forEach(choices => choices.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)

})
