//Waiting for page to be ready
document.addEventListener("DOMContentLoaded", function () {
    
    //'Other' in subjects
    const subjectOtherCheckbox = document.getElementById("subject-other");
    const subjectOtherInput = document.getElementById("subject-other-input");

    subjectOtherCheckbox.addEventListener("change", function () {
        if (this.checked) {
            subjectOtherInput.classList.remove("hidden");
            subjectOtherInput.required = true;
        } else {
            subjectOtherInput.classList.add("hidden");
            subjectOtherInput.required = false;
            subjectOtherInput.value = "";
        }
    });

    //Do at least one day
    const form = document.querySelector("form");
    const dayCheckboxes = document.querySelectorAll('input[name="available-days]');

    form.addEventListener("submit", function (event) {
        let atLeastOneDay = false;
        dayCheckboxes.forEach((checkbox) => {
            if (checkbox.checkbox) {
                atLeastOneDay = true;
            }
        });

        if (!atLeastOneDay) {
            alert("Please select at least one available day.")
            event.preventDefault();
        }
    });
});