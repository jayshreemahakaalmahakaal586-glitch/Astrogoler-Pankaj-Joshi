document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("a");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const link = button.getAttribute("href");

            if (link && link.startsWith("tel:")) {
                console.log("Call button clicked");
            }

            if (link && link.includes("wa.me")) {
                console.log("WhatsApp button clicked");
            }

        });

    });

});
