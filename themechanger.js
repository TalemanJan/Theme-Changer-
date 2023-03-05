
// get the theme preference from local storage, or default to 'light' if no preference is set
const themePreference = localStorage.getItem('theme') ;

// set the initial theme based on the user's preference
setTheme(themePreference);

// add event listeners to the theme buttons
const lightThemeButton = document.getElementById('light-theme');
const darkThemeButton = document.getElementById('dark-theme');
lightThemeButton.addEventListener('click', () => setTheme('light'));
darkThemeButton.addEventListener('click', () => setTheme('dark'));

// define a function to set the theme based on the user's preference
function setTheme(theme) {
  // use switch operator to handle different themes
  switch (theme) {
    case 'light':
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      break;
    case 'dark':
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      break;
    default:
      console.error(`Invalid theme: ${theme}`);
      return;
  }
  // store the user's preference in local storage
}