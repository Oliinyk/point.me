document.addEventListener("DOMContentLoaded", function () {
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
});