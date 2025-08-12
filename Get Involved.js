
//Animated counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200;
    const updateCount = () => {
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
            count.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});