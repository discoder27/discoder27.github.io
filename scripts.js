document.addEventListener('DOMContentLoaded', function () {
    
    const blogList = document.getElementById('blog-list');
   
    //Moved file into one folder
    fetch('posts.json')

        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            //Iterate over values of the json
            Object.values(posts).forEach(post => {
                const postElement = document.createElement('div');
                //changed style of text
                postElement.style.color = '#d87093';
                //added text to element
                postElement.innerHTML = post;
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});