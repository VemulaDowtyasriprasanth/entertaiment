document.getElementById('post-button').addEventListener('click', function() {
    var postContent = document.getElementById('post-text').value;
    if (postContent) {
        createPost(postContent);
        document.getElementById('post-text').value = ''; // Clear the textarea
    }
});

function createPost(content) {
    var feed = document.getElementById('feed');
    var postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.textContent = content;
    feed.prepend(postDiv); // Adds the new post at the top of the feed
}
