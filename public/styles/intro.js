document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro-screen");

  // Fade out after 3 seconds
  setTimeout(() => {
    intro.classList.add("fade-out");

    // Wait for fade-out animation to finish, then go to home
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  }, 3000);
});
