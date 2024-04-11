const editHighscoreBtn = document.querySelector('#editHighscore')

function renderHighscoreField() {
    const editHighscoreField = document.querySelector('#editHighscoreField');
    editHighscoreField.style.display = editHighscoreField.style.display === 'none' ? '' : 'none';
};

const editHighscore = async (event) => {
    event.preventDefault();
    const score = document.querySelector('#newHighscore').value.trim();
    const highscoreId = document.querySelector('#highscore-id').value.trim();
    if(newHighscore && highscoreId) {
        const response = await fetch(`/api/highscore/${highscoreId}`, {
            method: 'PUT',
            body: JSON.stringify({ score }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

editHighscoreBtn.addEventListener('click', renderHighscoreField);
document.querySelector('#editHighscoreForm').addEventListener('submit', editHighscore);