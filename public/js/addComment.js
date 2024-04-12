const mid = document.querySelector('#machine-id').value.trim();

const addCommentHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#comment-text').value.trim();

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

async function deleteComment(id) {
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to delete the comment.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.querySelector('.comments');

    if (commentsContainer) {
        commentsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteCommentBtn')) {
                const commentId = event.target.previousElementSibling.value;
                console.log(commentId);
                deleteComment(commentId);
            }
        });
    }
});


document.querySelector('#comment-submit').addEventListener('submit', addCommentHandler);
