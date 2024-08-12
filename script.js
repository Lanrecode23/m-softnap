const contactForm = document.getElementById('contactForm');
const email = document.getElementById('Email');
const text = document.getElementById('Message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (email.value === "" || text.value === "") {
        alert('fill in the blank space');
    }
});


AOS.init({
  duration: 1000,
  once: true,
});
