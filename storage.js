const localBtn = document.getElementById('increamanetLocalScore');

const setScores = () => {
    const sessionElement = document.getElementById('sessionScore');
    const localElement = document.getElementById('localScore');

    let sessionScore = parseInt(sessionStorage.getItem('sessionScore'));
    let localScore = parseInt(localStorage.getItem('localScore'));
    
    sessionElement.textContent = Number.isNaN(sessionScore) ? 0 : sessionScore;
    localElement.textContent = Number.isNaN(localScore) ? 0 : localScore;
}

setScores();

localBtn.addEventListener('click', () => {
    let localScore = parseInt(localStorage.getItem('localScore'));
    console.log(localScore)
    localScore = Number.isNaN(localScore) ? 0 : localScore
    localScore++;
    console.log(localScore)
    updateScoreInDOM(localScore,'localScore')
    localStorage.setItem('localScore', localScore);
})


const sessionBtn = document.getElementById('increamanetSessionScore');
sessionBtn.addEventListener('click', () => {
    let sessionScore = parseInt(sessionStorage.getItem('sessionScore'));
    sessionScore = Number.isNaN(sessionScore) ? 0 : sessionScore
    sessionScore++;
    sessionStorage.setItem('sessionScore', sessionScore);
    updateScoreInDOM(sessionScore,'sessionScore')

})


const updateScoreInDOM = (score, item) => {
    const element = document.getElementById(item);
    element.textContent = score;
}



