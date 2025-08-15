const filterDropdown = document.getElementById("subjectFilter");
const tutorCards = document.querySelectorAll(".tutor-card");

filterDropdown.addEventListener("change", function() {
    const selectedSubject = this.value;

    tutorCards.forEach(card => {
        const subjects = card.getAttribute("data-subjects").split(" ");
        if (selectedSubject === "all" || subjects.includes(selectedSubject)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});