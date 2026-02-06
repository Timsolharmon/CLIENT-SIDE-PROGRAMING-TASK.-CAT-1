// Navigation functionality
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-links a');
            const pages = document.querySelectorAll('.page');
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-links');
            const navbar = document.getElementById('navbar');
            
            // Page navigation
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Show selected page
                    const targetId = link.getAttribute('href').substring(1);
                    pages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === targetId) {
                            page.classList.add('active');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Hamburger menu toggle
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Simple form validation
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    
                    if (name && email && message) {
                        // In a real application, you would send the form data to a server here
                        alert('Thank you for your message! I will get back to you soon.');
                        contactForm.reset();
                    } else {
                        alert('Please fill in all fields before submitting.');
                    }
                });
            }
            
            // Initialize with home page active
            document.querySelector('.nav-links a[href="#home"]').classList.add('active');
        });
        
        // Add interactive 3D effect to cards on mouse move
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card, .content-section, .profile-container');
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            cards.forEach(card => {
                card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg) translateZ(20px)`;
            });
        });
        
        // Reset card transforms when not interacting
        document.querySelectorAll('.card, .content-section, .profile-container').forEach(card => {
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
            });
    });
