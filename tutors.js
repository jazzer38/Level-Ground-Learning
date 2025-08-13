//Get the dropdown
const filterDropdown = document.getElementById("subjectFilter");

//Put tutor cards on the page
const tutorCards = document.querySelectorAll(".tutor-card");

//Listen for when thee user changes the subjects that are selected
filterDropdown.addEventListener("change", function() {

    //Get the selected subject from the dropdown
    const selectedSubject = this.ariaValueMax;

    //Loop through each tutor card
    tutorCards.forEach(card => {
        //Get the subjects each tutor teaches
        const subjects = card.getAttribute("data-subjects").split(" ");

        //If the filter is "all" or only certain tutors teach it
        if (selectedSubject === "all" || subjects.include(selectedSubject)) {
           //Show the car
            card.style.display = "block";
        } else {
            //Otherwise hide it
            card.style.display = "none";
        }
    });
});
