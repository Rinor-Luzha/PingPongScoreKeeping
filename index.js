const addPlOnePoint = document.querySelector('#plOnePoint');
const addPlTwoPoint = document.querySelector('#plTwoPoint');
const reset = document.querySelector('#reset');

const plOneScore = document.querySelector('#firstPlayer');
const plTwoScore = document.querySelector('#secondPlayer');
const playTo = document.querySelector('#playTo');
const buttons = document.querySelector('.buttons');

addPlOnePoint.addEventListener('click', () => {
    if (parseInt(plOneScore.innerText) < parseInt(playTo.value) &&
        parseInt(plTwoScore.innerText) < parseInt(playTo.value)) {
        let i = parseInt(plOneScore.innerText);
        i++;
        plOneScore.innerText = i;
        if (i == parseInt(playTo.value)) {
            plOneScore.style.color = 'rgb(39, 192, 133)';
            plTwoScore.style.color = 'rgb(240, 80, 74)';
            buttons.classList.add('disabled');
        }
    }
})
addPlTwoPoint.addEventListener('click', () => {
    if (parseInt(plOneScore.innerText) < parseInt(playTo.value) &&
        parseInt(plTwoScore.innerText) < parseInt(playTo.value)) {
        let i = parseInt(plTwoScore.innerText);
        i++;
        plTwoScore.innerText = i;
        if (i == parseInt(playTo.value)) {
            plTwoScore.style.color = 'rgb(39, 192, 133)';
            plOneScore.style.color = 'rgb(240, 80, 74)';
            buttons.classList.add('disabled');
        }
    }
})
reset.addEventListener('click', () => {
    plOneScore.innerText = 0;
    plTwoScore.innerText = 0;
    plTwoScore.style.color = 'black';
    plOneScore.style.color = 'black';
    buttons.classList.remove('disabled');
})
