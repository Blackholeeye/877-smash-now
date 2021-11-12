// EMAIL ADDRESS
const email = '877smashnowleague@gmail.com';

// Get body element from html
const body = document.querySelector('body');
// get info box element
const infoBox = document.getElementById('infobox');
// botton label box
const buttonBox = document.getElementById('buttonbox');
// create container element for cursor
const cursor = document.createElement('div');

// pages
const welcomeMsg = `
  <h2>Welcome, All!</h2>
  <p>We are a Super Smash Bros. League of Kitsap County locals. If you love Super Smash Bros. as much as we do, come join us at our tournaments and events. Please, feel free to contact us with any inquiries.</p>
`
const smashNews = `
  <h2>Smash News!</h2>
  <p>Stay updated on all of our Tournaments and Events.</p>`;
const tournamentNews = `
  <h2>Tournament News!</h2>
  <p>Past, present, and future Tournaments.</p>
`;
const stats = `
  <h2>Stats!</h2>
  <p>Tournament results.</p>
`;
const donate = `
  <h2>Donate!</h2>
  <p>We are a <b>Not For Profit</b> organization, committed to building a community based on good times and good vibes, and playing our favorite game, Super Smash Bro's.
  If you are interested in making a donation to our growing organization, reach out to us at <a href="mailto:${email}">${email}</a>.
  We appreciate anything that will make our tournaments more efficent and fun!</p>
`;

// add image tag to cursor element
cursor.innerHTML = `<img src='img/cursor-img.png'>`;
// add styling to cursor
cursor.style.position = 'absolute';
cursor.style.borderRadius = '50%';
cursor.style.zIndex = '100';
// add cursor element to body element
body.appendChild(cursor);

// add event listener for mouse motion to window
window.addEventListener('mousemove', (e) => {
  // set cursor position to mouse position
  cursor.style.top = e.pageY + 3 + 'px';
  cursor.style.left = e.pageX + 3 + 'px';
  // turn string of classes in array
  let classNameArray = e.target.className.split(' ');
  // if class of "button"
  if (classNameArray.includes('button')) {
    // display button title on hover
    buttonBox.innerText = e.target.title;
    buttonBox.style.display = 'block';
    switch(e.target.id) {
      case 'smashNews':
        buttonBox.style.bottom = '40vh';
        break;
      case 'tournamentNews':
        buttonBox.style.bottom = '30vh';
        break;
      case 'stats':
        buttonBox.style.bottom = '20vh';
        break;
      case 'donate':
        buttonBox.style.bottom = '30vh';
        break;
      case 'facebook':
        buttonBox.style.right = '0';
        buttonBox.style.top = '15vh';
        break;
      case 'instagram':
        buttonBox.style.right = '0';
        buttonBox.style.top = '25vh';
        break;
      case 'discord':
        buttonBox.style.right = '0';
        buttonBox.style.top = '35vh';
        break;
      case 'email':
        buttonBox.style.right = '0';
        buttonBox.style.top = '25vh';
        break;
      default:
        buttonBox.style.display = 'none';
    }
  } else {
    buttonBox.style.right = 'unset';
    buttonBox.style.top = 'unset';
    buttonBox.style.bottom = 'unset';
    buttonBox.style.display = 'none';
  }
});

// mouse down event
window.addEventListener('mousedown', (e) => {
  console.log("mousedown", e.target.classList);
  switch(e.target.className) {
    case 'button up':
      infoBox.innerHTML = smashNews;
      break;
    case 'button right':
      infoBox.innerHTML = tournamentNews;
      break;
    case 'button down':
      infoBox.innerHTML = stats;
      break;
    case 'button left':
      infoBox.innerHTML = donate;
      break;
    default:
      infoBox.innerHTML = welcomeMsg;
  }
  if (e.target.classList.contains('button')) {
    e.target.classList.add('isPressed');
  }
});

// mouse up event
window.addEventListener('mouseup', (e) => {
  console.log("mouseup", e.target.classList);
  if (e.target.classList.contains('button')) {
    e.target.classList.remove('isPressed');
  }
});
