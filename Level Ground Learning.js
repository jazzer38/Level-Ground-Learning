/*Select testimonial elements*/
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

/*Function to make the testimonial show*/
function showTestimonial(index) {
    testimonials.forEach((t, i) => {

        /*Make only current testimonial visible*/
        t.classList.toggle('active', i === index);
    });
}

/*Show the previous testimonial with the button click*/
document.getElementById('prevTestimonial').onclick = () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
};

/*Show the next testimonial with the button click*/
document.getElementById('nextTestimonial').onclick = () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
};

/*Show the first testimonial when the page loads*/
showTestimonial(currentIndex);