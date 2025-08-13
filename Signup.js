document.addEventListener("DOMContentLoaded", function () {
    // Subject 'Other' toggle
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

    // "How did you hear about us" Other toggle
    const hearAboutSelect = document.getElementById("hear-about");
    const hearAboutOther = document.getElementById("hear-about-other");

    hearAboutSelect.addEventListener("change", function () {
        if (this.value === "Other") {
            hearAboutOther.classList.remove("hidden");
            hearAboutOther.required = true;
        } else {
            hearAboutOther.classList.add("hidden");
            hearAboutOther.required = false;
            hearAboutOther.value = "";
        }
    });

    // Require at least one day
    const form = document.querySelector("form");
    const dayCheckboxes = document.querySelectorAll('input[name="available-days"]');

    form.addEventListener("submit", function (event) {
        let atLeastOneDay = false;
        dayCheckboxes.forEach(checkbox => {
            if (checkbox.checked) atLeastOneDay = true;
        });
        if (!atLeastOneDay) {
            alert("Please select at least one available day.");
            event.preventDefault();
        }
    });
});