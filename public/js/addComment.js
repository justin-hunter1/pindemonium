const addCommentHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#comment-text').value.trim();
    const mid = document.querySelector('#machine-id').value.trim();
    if(comment && mid) {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ comment, mid }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace(`/machine/${mid}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#comment-submit').addEventListener('submit', addCommentHandler);