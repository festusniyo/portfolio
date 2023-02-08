const contactForm = document.getElementById("contact-form"),
      name = document.getElementById("name"),
      email = document.getElementById("email"),
      message = document.getElementById("message");
const sendEmail = (e) => {
  e.preventDefault();
      
    const serviceID = "service_apy3n75";
    const templateID = "template_6uh139r";
  
    emailjs.send(serviceID, templateID, '#contact-form','')
    .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
        })
        .catch(err=>console.log(err));
  
};
contactForm.addEventListener('submit', sendEmail);