const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');   
const renderPosts=async (term) => {
    let url ='http://localhost:3000/posts';
    if(term){
      url += `&q=${term}`;   
    }

    const res = await fetch(url);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += ` 
            <div class="post">
                <h2>${post.name}</h2>
                <p><small>${post.email}</small></p>
                <p><small>${post.subject}</small></p>
                <p>${post.message.slice(0, 200)}</p>
                <a href="details.html?id=${post.id}">read more....</a>
            </dv>
        ` 
    })
    container.innerHTML = template; 
}
searchForm.addEventListener('submit' , (e) =>{
   e.preventDefault();
   renderPosts(searchForm.term.value.trim()); 
})
window.addEventListener('DOMContentLoaded', () => renderPosts());  