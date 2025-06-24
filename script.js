// grab all the necessary elements
// and set up the event listener for the button click
const button = document.querySelector(".start-animation-button");
const aniplex = document.querySelector(".aniplex");
const music = document.querySelector(".music");

// Event listener for the button click
button.addEventListener("click", () => {
  // Remove the animation class to reset it
  // and then re-add it to restart the animation
  aniplex.classList.remove("animate");

  // This forces reflow to restart animation
  void aniplex.offsetWidth;

  //   THis is where the animation is started
  aniplex.classList.add("animate");

  //   Play background music if not already playing, not really necessary
  // but ensures the music starts fresh
  if (music.paused) {
    music.currentTime = 0;
    music.play();
  }
});

// how is my documentation?
// if u like it please fucking hire me
// This is a simple script to handle the animation and music playback

// Accessibility menu and theme logic
const accessibilityToggle = document.querySelector(".accessibility-toggle");
const accessibilityMenu = document.querySelector(".accessibility-menu");
const themeButtons = document.querySelectorAll(".theme-btn");
const html = document.documentElement;

// Toggle accessibility menu visibility
accessibilityToggle.addEventListener("click", () => {
  accessibilityMenu.classList.toggle("active");
});

// Theme switching logic
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove all theme classes from <html>
    html.classList.remove(
      "theme-default",
      "theme-dark",
      "theme-high-contrast",
      "theme-pastel",
      "theme-blue",
      "theme-green",
      "theme-red",
      "theme-orange",
      "theme-mono",
      "theme-cyber",
      "theme-sunset",
      "theme-mint",
      "theme-rose",
      "theme-night"
    );
    // Add the selected theme class
    html.classList.add(btn.dataset.theme);

    // Highlight the active button
    themeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// close the accessibility menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !accessibilityToggle.contains(event.target) &&
    !accessibilityMenu.contains(event.target)
  ) {
    accessibilityMenu.classList.remove("active");
  } else {
    // If the click is inside the menu, do nothing
    return;
  }
});

// Set default theme on load
window.addEventListener("DOMContentLoaded", () => {
  // Set the first theme button as active (Default)
  html.classList.add("theme-default");
  // Find the first theme-btn with data-theme="theme-default"
  const defaultBtn = document.querySelector(
    '.theme-btn[data-theme="theme-default"]'
  );
  if (defaultBtn) defaultBtn.classList.add("active");
});
