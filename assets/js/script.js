document.addEventListener("DOMContentLoaded", function () {
    //mobile header menu
    const mobMenu = document.querySelector(".mobmenu");
    const siteHeader = document.querySelector(".site-header");
    if (mobMenu && siteHeader) {
        mobMenu.addEventListener("click", function (event) {
            siteHeader.classList.toggle("is-active");
            event.stopPropagation();
        });
        document.addEventListener("click", function (event) {
            if (!siteHeader.contains(event.target) && !mobMenu.contains(event.target)) {
                siteHeader.classList.remove("is-active");
            }
        });
    }

    // open section on mobile
    document.querySelectorAll(".collapse-mob .open-btn").forEach(button => {
        button.addEventListener("click", function () {
            const parentSection = this.closest(".collapse-mob");
            if (parentSection) {
                parentSection.classList.toggle("is-active");
            }
        });
    });

});