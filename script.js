// MUSIC BUTTON

const musicButton = document.getElementById("musicBtn");

let musicOn = false;

musicButton.addEventListener("click", function () {

    musicOn = !musicOn;

    if (musicOn) {

        musicButton.textContent = "❚❚";

        musicButton.style.transform =
            "rotate(12deg) scale(1.05)";

        alert(
            "Music controls are ready. Add a legally obtained audio file if you want background music."
        );

    } else {

        musicButton.textContent = "♫";

        musicButton.style.transform =
            "rotate(0deg) scale(1)";

        alert("Music paused.");

    }

});


// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
