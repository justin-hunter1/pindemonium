// function renderHighscoreForm() {
//     const addHighscoreForm = document.querySelector('#addHighscore');
//     addHighscoreForm.style.display = addHighscoreForm.style.display === 'none' ? '' : 'none';
// };
// document.querySelector('#addHighscoreBtn').addEventListener('click', renderHighscoreForm);

const addHighscoreHandler = async (event) => {
    event.preventDefault();
    const score = document.querySelector('#highscore').value.trim();
    const mid = document.querySelector('#machine-id').value.trim();
    // const verified = true
    if(highscore && mid) {
        const response = await fetch('/api/highscore/', {
            method: 'POST',
            body: JSON.stringify({ score, mid }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace(`/machine/${mid}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#highscore-submit').addEventListener('submit', addHighscoreHandler);