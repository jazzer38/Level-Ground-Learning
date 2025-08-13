/* -------------------- Facts Generator -------------------- */
const facts = [
    "Tutoring can improve a student's grades and confidence.",
    "Regular tutoring helps students retain information longer.",
    "Students who get tutoring often perform better on standardized tests.",
    "Tutoring can be customized to fit the student's learning style."
];

const factButton = document.getElementById('factGenerator');
const factText = document.getElementById('factText');

factButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
});

/* -------------------- Testimonials Slider -------------------- */
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

// Show testimonial by index
function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

// Previous button
document.getElementById('prevTestimonial').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

// Next button
document.getElementById('nextTestimonial').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

// Show first testimonial on page load
showTestimonial(currentIndex);