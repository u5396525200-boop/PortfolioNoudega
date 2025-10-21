

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ' ]' ).classList.add(active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}
const formData = new FormData();
formData.append("access_key", "b5d7e66b-a8ff-45e4-a0a6-8236436e3d55");
formData.append("name", "John Doe");
formData.append("email", "john@example.com");
formData.append("message", "Hello World!");

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData
});