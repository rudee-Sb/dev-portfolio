document.querySelectorAll('.project-card').forEach(card => {
    const preview = card.querySelector('.proj-preview');

    card.addEventListener('mousemove', (r) => {
        const rect = card.getBoundingClientRect();
        const x = r.clientX - rect.left;
        const y = r.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const offsetX = (x - centerX) / centerX;
        const offsetY = (y - centerY) / centerY;

        const rotateX = offsetY * 10;
        const rotateY = offsetX * -10;

        preview.style.transform = `rotate(${rotateX}deg) rotate(${rotateY}deg)`;
    
    });

    card.addEventListener('mouseleave', () => {
        preview.style.transform = `rotateX(0deg) rotateY(0deg)` 
    });
    
});

const progressbars = document.querySelectorAll('.skill-progress');
const skill_sec = document.querySelector('.skills-sec');
let hasAnimated = false;

skill_sec.addEventListener('mousemove', (e) => {
    if (hasAnimated) return;

    const rect = skill_sec.getBoundingClientRect();
    const cursorX = e.clientX - rect.top; // Mouse X within the section
    const cursorPercentX = cursorX / rect.height;

    if (cursorPercentX >= 0.24) {
        progressbars.forEach(bar => {
            const value = bar.getAttribute('data-progress');
            bar.style.width = value;
        });
        hasAnimated = true;
    }
});

