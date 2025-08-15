// ==================== FACT SLIDER ====================

const factItems = document.querySelectorAll(".fact");
const factLeftArrow = document.querySelector(".fact-slider .arrow.left");
const factRightArrow = document.querySelector(".fact-slider .arrow.right");

let factIndex = 0;
let factAnimating = false; // Prevent spamming clicks mid-animation

function showFact(newIndex, direction = 1) {
    if (factAnimating) return;
    factAnimating = true;

    const currentFact = factItems[factIndex];
    const nextFact = factItems[newIndex];

    // Reset classes
    factItems.forEach(f => f.classList.remove("active", "slide-in-left", "slide-in-right"));

    // Animate out current fact
    currentFact.style.opacity = "0";
    currentFact.style.transform = `translateX(${direction * -50}px) scale(0.8) rotateY(${direction * -45}deg)`;

    // Prepare next fact off-screen
    nextFact.style.opacity = "0";
    nextFact.style.transform = `translateX(${direction * 50}px) scale(0.8) rotateY(${direction * 45}deg)`;

    setTimeout(() => {
        // Animate in next fact
        nextFact.classList.add("active");
        nextFact.style.opacity = "1";
        nextFact.style.transform = "translateX(0) scale(1) rotateY(0)";
        factIndex = newIndex;
        factAnimating = false;
    }, 300);
}

factLeftArrow.addEventListener("click", () => {
    const newIndex = (factIndex - 1 + factItems.length) % factItems.length;
    showFact(newIndex, -1);
});

factRightArrow.addEventListener("click", () => {
    const newIndex = (factIndex + 1) % factItems.length;
    showFact(newIndex, 1);
});

// Initialize
factItems.forEach((fact, i) => {
    fact.style.transition = "all 0.5s ease";
    if (i !== factIndex) {
        fact.style.opacity = "0";
        fact.style.transform = "scale(0.8)";
    } else {
        fact.classList.add("active");
        fact.style.opacity = "1";
        fact.style.transform = "scale(1)";
    }
});


// ==================== TESTIMONIAL SLIDER ====================

const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

const prevTestimonialBtn = document.getElementById("prevTestimonial");
const nextTestimonialBtn = document.getElementById("nextTestimonial");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        testimonial.style.opacity = "0";
        testimonial.style.transform = "translateX(50px) scale(0.95)";
    });

    const current = testimonials[index];
    current.classList.add("active");
    current.style.opacity = "1";
    current.style.transform = "translateX(0) scale(1)";
}

prevTestimonialBtn.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(testimonialIndex);
});
nextTestimonialBtn.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
});

showTestimonial(testimonialIndex);


// ==================== SMOOTH SCROLL ====================

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        // Only smooth scroll if link is an anchor in the same page
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==================== SECTION FADE-IN ANIMATION ====================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".goal-fact-slider, .info-logo-relation, .articles-container, .testimonials")
    .forEach(section => {
        observer.observe(section);
    });