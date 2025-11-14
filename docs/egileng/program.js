const track = document.getElementById("image-track");
let isMouseDown = false;
let currentPercentage = 0;
let speed = 0.03; // Controls how fast the slides move automatically
let animationFrameId;

// Function to move slides automatically
const moveSlidesAutomatically = () => {
  if (!isMouseDown) {
    currentPercentage -= speed; // Slide left
    if (currentPercentage <= -100) {
      currentPercentage = 0; // Loop back to start
    }

    track.style.transform = `translate(${currentPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
      image.style.objectPosition = `${80 + currentPercentage - 20}% center`;
    }

    // Keep requesting the animation frame until mouse is pressed
    animationFrameId = requestAnimationFrame(moveSlidesAutomatically);
  }
};

// Start the automatic movement when the page loads
window.onload = () => {
  track.dataset.prevPercentage = currentPercentage;
  moveSlidesAutomatically(); // Start automatic movement
};

// Mouse down event (stop automatic movement, start drag)
window.onmousedown = (e) => {
  isMouseDown = true;
  cancelAnimationFrame(animationFrameId); // Stop automatic movement
  track.dataset.mouseDownAt = e.clientX; // Store the mouse down position
  track.dataset.prevPercentage = currentPercentage; // Store where the animation left off
};

// Mouse move event (dragging logic)
window.onmousemove = (e) => {
  if (!isMouseDown || track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  currentPercentage = nextPercentage; // Update current percentage
  track.dataset.percentage = currentPercentage;

  track.style.transform = `translate(${currentPercentage}%, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${80 + currentPercentage - 20}% center`;
  }
};

// Mouse up event (stops dragging)
window.onmouseup = () => {
  isMouseDown = false;
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = currentPercentage; // Update prevPercentage
};

// window.onload = () => {
//   const images = Array.from(track.getElementsByClassName("image"));

//   // Function to shuffle the array
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   };

//   // Shuffle the images
//   shuffleArray(images);

//   // Re-append the images in the new order
//   images.forEach((image) => track.appendChild(image));
// };
