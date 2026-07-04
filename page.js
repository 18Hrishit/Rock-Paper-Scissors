let val = 2;
let compmove = "";
let result = "";
const score = JSON.parse(localStorage.getItem('score') || '{"wins":0,"losses":0,"ties":0}');
    function pick_num() {
        val = Math.random();
        return val;}
    function comp_chose(val) {
        if (val >= 0 && val < 1 / 3) {
            compmove = 'Rock';}
        else if (val >= 1 / 3 && val < 2 / 3) {
            compmove = 'Paper';}
        else {
            compmove = 'Scissors';}
        return compmove;}
    function position(option) {
        const comp = comp_chose(pick_num());
            if (comp === option ) {
            result = 'It\'s a Draw';}
            else if(comp==='Paper'&&option==='Rock') result = 'You Lost';
            else if(comp==='Paper'&&option==='Scissors') result = 'You Won';
            else if(comp==='Rock'&&option==='Paper') result = 'You Won';
            else if(comp==='Rock'&&option==='Scissors') result = 'You Lost';
            else if(comp==='Scissors'&&option==='Rock') result = 'You Won';
            else if(comp==='Scissors'&&option==='Paper') result = 'You Lost';
            points(result);
            saveScore();
        //     alert(`You picked ${option} , Computer picked ${comp}\n${result}\n score is\nWon:${score.wins}\nLost:${score.losses}\nDraw:${score.ties}`);
        document.getElementById('wins').textContent = score.wins;
        document.getElementById('losses').textContent = score.losses;
        document.getElementById('ties').textContent = score.ties;
        }
    
    function saveScore() {
        localStorage.setItem('score', JSON.stringify(score));
    }

    function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        saveScore();
    }
    function points(result){
        if(result === 'You Won') score.wins++; 
        else if(result === 'You Lost') score.losses++;
        else if(result === 'It\'s a Draw') score.ties++;
    }