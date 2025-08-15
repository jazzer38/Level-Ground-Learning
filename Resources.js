document.addEventListener("DOMContentLoaded", function () {
    //All details in FAQ
    const faqItems = document.querySelector(".resources details");

    faqItems.forEach(function(item) {
        item.addEventListener("click", function() {
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }
            });

    console.log("FAQ clicked:", item.querySelector("summary").tectContent);
});
    });
});
