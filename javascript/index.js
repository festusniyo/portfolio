const form = document.querySelector('form');
const createPost = async (e) =>{
    e.preventDefault();
    const doc ={
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
        

    }
    await fetch('http://localhost:3000/posts',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json'}
    })
    window.location.replace('view.html');
} 
form.addEventListener('submit', createPost);