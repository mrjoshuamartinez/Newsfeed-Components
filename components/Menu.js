// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
// The 'menuMaker' takes an array of menu items as its only argument.
function menuMaker(array){

  // <div class="menu">
  const menu = document.createElement('div');

  //<ul>
  const ul = document.createElement('ul');

  // Assigning Class Name
  menu.className = 'menu';

  // Appending Child
  menu.appendChild(ul);

  //   Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  //   Add those items to the <ul>
  array.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  });

  //   Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  const menuButton = document.querySelector('.menu-button');
  const hideMenu = document.querySelector('.articles');
  let menuOpen = false;

  //   Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click',() => {
    menu.classList.toggle('menu--open');
    menuOpen = true;
  })

  hideMenu.addEventListener('click', () => {
    if (menuOpen === false) {
      console.log('Menu is closed already!')
    } else if (menuOpen === true) {
      menuOpen = true;
      menu.classList.toggle('menu--open');
    }
  });

  //   Step 5: return your div with a 'menu' class.
  return menu;
};

console.log(menuMaker(menuItems));

//   Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
document.querySelector('.header').appendChild(menuMaker(menuItems));