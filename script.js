// Change text content dynamically
function changeText() {
    const text = document.getElementById('dynamic-text');
    text.textContent = "🎉 The text has been changed dynamically!";
  }
  
  // Modify CSS styles via JavaScript
  function toggleStyle() {
    const text = document.getElementById('dynamic-text');
    text.classList.toggle('highlight');
  }
  
  // Add a new element when button is clicked
  function addElement() {
    const section = document.getElementById('extra-content');
    const newDiv = document.createElement('div');
    newDiv.textContent = "🆕 This element was added dynamically.";
    newDiv.classList.add('highlight');
    newDiv.id = 'new-element';
    section.appendChild(newDiv);
  }
  
  // Remove the added element
  function removeElement() {
    const element = document.getElementById('new-element');
    if (element) {
      element.remove();
    }
  }
  