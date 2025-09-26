// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Scroll Animations =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// ===== Project Lightbox =====
const projectImages = document.querySelectorAll('.project-card img');
projectImages.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <span class="close">&times;</span>
            <img src="${img.src}" alt="${img.alt}">
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', e => {
            if(e.target === modal) modal.remove();
        });
    });
});

// ===== Contact Form Validation =====
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    // Reset previous errors
    [name, email, message].forEach(input => input.style.borderColor = '#2a2a2a');

    if(name.value.trim() === ''){
        valid = false;
        name.style.borderColor = 'red';
    }
    if(email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)){
        valid = false;
        email.style.borderColor = 'red';
    }
    if(message.value.trim() === ''){
        valid = false;
        message.style.borderColor = 'red';
    }

    if(valid){
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});
