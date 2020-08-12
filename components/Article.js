// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.

import {data} from './Data';
console.log(data);

// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

// Step 1: Write a component called 'articleMaker' to create an article.

const articleMaker = (objArg) => {

  // Your component is a function that takes an article object as its only argument,
  // and returns a DOM node looking like the one below:



  // <div class="article">
  const articleDiv = document.createElement('div');
  console.log(articleDiv);

  //   <h2>{title of the article}</h2>
  const articleTitle = document.createElement ('h2');
  console.log(articleTitle);

  //   <p class="date">{date of the article}</p>
  const articleDate = document.createElement ('p');
  console.log(articleDate);

  //   {three separate paragraph elements}
  // #1
  const articleP1 = document.createElement ('p');
  console.log(articleP1);

  // #2
  const articleP2  = document.createElement ('p');
  console.log(articleP2);

  // #3
  const articleP3 = document.createElement ('p');
  console.log(articleP3);

  //   <span class="expandButton">+</span>
  const expandButton = document.createElement('span');
  console.log(expandButton);

  // Appending Children

  articleDiv.appendChild(articleTitle);
  articleDiv.appendChild(articleDate);
  articleDiv.appendChild(articleP1);
  articleDiv.appendChild(articleP2);
  articleDiv.appendChild(articleP3);
  articleDiv.appendChild(expandButton);

  // Assigning Classnames

  articleDiv.className ='article';
  articleDate.className = 'date';
  expandButton.className ='expandButton';

  // Assigning Text Content

  articleTitle.textContent = objArg.title;
  articleDate.textContent = objArg.date;
  articleP1.textContent = objArg.firstParagraph;
  articleP2.textContent = objArg.secondParagraph;
  articleP3.textContent = objArg.thirdParagraph;
  expandButton.textContent ="+";

  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.

  expandButton.addEventListener('click', () =>{
    articleDiv.classList.toggle('article-open');
  });

    // Step 3: Don't forget to return something from your function!
    return articleDiv;

}

console.log(articleMaker(data));

// Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
// to create a div.article element and append it to the DOM inside div.articles (see index.html).
const articles = document.querySelector('.articles');

// Loop created
data.forEach(item => {
  articles.appendChild(articleMaker(item));
});

console.log(data);

// Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
// Refresh the page to see the new article.
//   data.forEach(newArticle => {
//     mainDiv.appendChild(articleMaker(newArticle));
//   });