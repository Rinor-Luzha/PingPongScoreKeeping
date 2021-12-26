const addPlOnePoint = document.querySelector('#plOnePoint');
const addPlTwoPoint = document.querySelector('#plTwoPoint');
const resetBtn = document.querySelector('#reset');

const plOneScore = document.querySelector('#firstPlayer');
const plTwoScore = document.querySelector('#secondPlayer');
const playTo = document.querySelector('#playTo');
const buttons = document.querySelector('.buttons');

addPlOnePoint.addEventListener('click', () => {
    if (parseInt(plOneScore.innerText) < parseInt(playTo.value) &&
        parseInt(plTwoScore.innerText) < parseInt(playTo.value)) {
        let score = parseInt(plOneScore.innerText);
        score++;
        plOneScore.innerText = score;
        if (score == parseInt(playTo.value)) {
            plOneScore.style.color = 'rgb(39, 192, 133)';
            plTwoScore.style.color = 'rgb(240, 80, 74)';
            buttons.classList.add('disabled');
        }
    }
})
addPlTwoPoint.addEventListener('click', () => {
    if (parseInt(plOneScore.innerText) < parseInt(playTo.value) &&
        parseInt(plTwoScore.innerText) < parseInt(playTo.value)) {
        let score = parseInt(plTwoScore.innerText);
        score++;
        plTwoScore.innerText = score;
        if (score == parseInt(playTo.value)) {
            plTwoScore.style.color = 'rgb(39, 192, 133)';
            plOneScore.style.color = 'rgb(240, 80, 74)';
            buttons.classList.add('disabled');
        }
    }
})
const reset = () => {
    plOneScore.innerText = 0;
    plTwoScore.innerText = 0;
    plTwoScore.style.color = 'black';
    plOneScore.style.color = 'black';
    buttons.classList.remove('disabled');
}
resetBtn.addEventListener('click', reset);
playTo.addEventListener('change', reset);
