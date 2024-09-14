document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentsList = document.getElementById('comments-list');

    const comments = [];

    function renderComments() {
        commentsList.innerHTML = comments.map(comment => 
            `<div class="comment">${comment.text}</div>`).join('');
    }

    submitCommentButton.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (text) {
            comments.push({ text });
            renderComments();
            commentInput.value = '';
        }
    });
});
