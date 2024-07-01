let turn = 'x'; 
let arrayitem = []; 
let title = document.querySelector('.title'); 
let fin=9 ; 
for (let i = 1; i < 10; i++) {
    arrayitem.push(document.querySelector(`#item${i}`));
}

arrayitem.forEach((item) => {
    item.addEventListener("click", () => game(item));
  
});

function game(item) {
    if (item.textContent === '') {
        item.textContent = turn;
        if (checkWin()) {
            setTimeout(() => alert(`${turn.toUpperCase()} wins!`),10);
            resetGame();
        } else {
            turn = turn === 'x' ? 'o' : 'x';
            title.textContent = turn.toUpperCase();
            fin--;
        }
    }
    if(fin==0){
        setTimeout(() => alert(`game over no one win `),10);
        resetGame();
    }
}

function checkWin() {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (arrayitem[a].textContent && 
            arrayitem[a].textContent === arrayitem[b].textContent && 
            arrayitem[a].textContent === arrayitem[c].textContent) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    setTimeout(()=>{
    arrayitem.forEach(item => item.textContent = '');
    turn = 'x';
    fin=9 ; 
    title.innerHTML = `<span>X O </span> GAME`;
    },100)
    
}
