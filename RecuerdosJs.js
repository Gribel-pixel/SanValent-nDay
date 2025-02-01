document.addEventListener("DOMContentLoaded", function () {
    const photoCards = document.querySelectorAll(".photo-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        {
            threshold: 0.1, // Activa la animación cuando el 10% del elemento es visible
        }
    );

    photoCards.forEach((card) => {
        observer.observe(card);
    });
});