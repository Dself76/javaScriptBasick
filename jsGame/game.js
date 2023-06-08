// Define an array of color names
const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet",
    "Black",
    "White",
    "Gray"
  ];
  
  // Generate a random index from the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // Get the random color name
  const randomColor = colors[randomIndex];
  
  // Function to display the color name on the page
  function displayColorName() {
    document.getElementById("colorName").textContent = randomColor;
  }
  
  // Function to check if the selected color matches the displayed color
  function checkColorMatch(selectedColor) {
    if (selectedColor === randomColor) {
      displayMessage("Correct! You matched the color.");
      generateNewColor();
    } else {
      displayMessage("Incorrect! Try again.");
    }
  }
  
  // Function to generate a new color for matching
  function generateNewColor() {
    const newIndex = Math.floor(Math.random() * colors.length);
    randomColor = colors[newIndex];
    displayColorName();
  }
  
  // Function to display a message on the page
  function displayMessage(message) {
    document.getElementById("message").textContent = message;
  }
  