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

    //tab section
    const tabs = document.querySelectorAll(".tabs-label");
    const tabContents = document.querySelectorAll(".tab-content-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            const index = this.getAttribute("data-index");

            tabs.forEach(t => {
                t.classList.remove("tab-active");
                t.setAttribute("aria-selected", "false");
                t.setAttribute("aria-expanded", "false");
            });

            tabContents.forEach(content => {
                content.classList.remove("is-active");
            });

            this.classList.add("tab-active");
            this.setAttribute("aria-selected", "true");
            this.setAttribute("aria-expanded", "true");

            const activeContent = document.querySelector(`.tab-content-item[data-index="${index}"]`);
            if (activeContent) {
                activeContent.classList.add("is-active");
            }
        });
    });

});