// Get body element from html
const body = document.querySelector('body');
// get info box element
const infoBox = document.getElementById('infobox');
// create container element for cursor
const cursor = document.createElement('div');
// add image tag to cursor element
cursor.innerHTML = `<img src='img/cursor-img.png'>`;
// add styling to cursor
cursor.style.position = 'absolute';
cursor.style.borderRadius = '50%';
// add cursor element to body element
body.appendChild(cursor);
// add event listener for mouse motion to window
window.addEventListener('mousemove', (e) => {
  // set cursor position to mouse position
  cursor.style.top = e.pageY + 3 + 'px';
  cursor.style.left = e.pageX + 3 + 'px';
  // check for nav hover
  if (e.target.tagName == 'LI') {
    // turn off cursor image
    cursor.style.display = 'none';
  } else {
    // turn cursor image back on
    cursor.style.display = 'block'
  }
  // display button title on hover
  infoBox.innerText = e.target.title;
});


