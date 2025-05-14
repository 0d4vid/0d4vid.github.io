document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#0cffe1", "#f012ff"]
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0cffe1",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Changing text effect
    const words = ['Websites', 'Web Apps', 'Softwares', 'Experiences', 'Designs', 'Solutions', 'AI Agents', 'AI Bots', 'Mobile Apps'];
    let wordIndex = 0;
    const text = document.getElementById('changingText');

    function changeWord() {
        wordIndex = (wordIndex + 1) % words.length;
        text.style.animation = 'none';
        text.style.opacity = 0;

        setTimeout(() =>{
            text.textContent = words[wordIndex];
            text.style.opacity = 1;
            void text.offsetWidth;
            text.style.animation = 'fade 0.2s, typing 1.5s steps(20, end), blink-caret 0.75s step-end';
        }, 1000)
    }
    setInterval(changeWord, 4000)

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Close mobile menu if open
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Update active link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Form input effect
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (input) {
            input.addEventListener('focus', () => {
                group.classList.add('focus');
            });
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    group.classList.remove('focus');
                }
            });
        }
    });

    // Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const btn = this.querySelector('button');
        const originalText = btn.textContent;
        
        // Simple validation
        if (!this.name.value || !this.email.value || !this.message.value) {
            e.preventDefault(); // Only prevent default if validation fails
            btn.textContent = 'Please fill all fields!';
            btn.style.backgroundColor = '#ff3e3e';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
            }, 2000);
            return;
        }
        
        // Show sending state
        btn.textContent = 'Sending...';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = 'Message Sent! ✓';
            btn.style.backgroundColor = '#0cffe1';
            setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);

        }, 3000);
        
    });
}

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});