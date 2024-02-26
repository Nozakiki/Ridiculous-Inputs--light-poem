// Function to add the keyframe animation for shrinking and disappearing
function addShrinkAnimation() {
  // Remove any existing style elements with the id "shrinkAnimationStyle"
  var existingStyle = document.getElementById('shrinkAnimationStyle');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create a new style element
  var style = document.createElement('style');
  style.id = 'shrinkAnimationStyle';
  
  // Define the keyframes for the animation
  var keyframes = `
    @keyframes shrinkAndDisappear {
      0% {
        width: 20px;
        height: 20px;
        opacity: 1;
      }
      100% {
        width: 0;
        height: 0;
        opacity: 0;
      }
    }
  `;
  
  // Set the keyframes as the inner HTML of the style element
  style.innerHTML = keyframes;
  
  // Append the style element to the document head
  document.head.appendChild(style);
}

// Function to add the animate class to shrinking circles
function triggerShrinkingAnimation() {
  // Get all shrinking circles
  var circles = document.querySelectorAll(".shrinking-circle");
  
  // Add the animate class to each shrinking circle
  circles.forEach(function(circle) {
    circle.classList.add("animate");
  });

  // After the animation completes, remove the animate class to allow it to repeat
  setTimeout(function() {
    circles.forEach(function(circle) {
      circle.classList.remove("animate");
    });
  }, 5000); // Assuming the animation duration is 5 seconds (5000 milliseconds)
}

// Get a reference to the power button (pon)
var powerOnButton = document.getElementById("powerbutton");

// Add a click event listener to the power on button
powerOnButton.addEventListener("click", function(event) {
  var container = document.getElementById("container");
  container.setAttribute("data-active", "true");
});

// Get a reference to the power off button (poff)
var powerOffButton = document.getElementById("poweroff");

// Add a click event listener to the power off button
powerOffButton.addEventListener("click", function(event) {
  // Set data-active attribute to trigger CSS changes
  var container = document.getElementById("container");
  container.setAttribute("data-active", "true2");
  
  // Add the keyframe animation every time poff is clicked
  addShrinkAnimation();
  
  // Trigger the shrinking animation
  triggerShrinkingAnimation();
});



