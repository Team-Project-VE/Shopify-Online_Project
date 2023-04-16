// import i18n from "../../i18n";

// document.querySelector('#title').textContent = i18n.t('title');
// document.querySelector('#description').textContent = i18n.t('description');

// function changeLanguage(lng) {
//   i18n.changeLanguage(lng).then(() => {
//     document.getElementById('title').textContent = i18n.t('title');
//     document.getElementById('description').textContent = i18n.t('description');
//   });
// }

const products = document.querySelector('.fas');
const productsDropDown = document.querySelector('#products-drop-down');
const animatedText = 'Leather bags worth hugging';
const animatedTextTwo = 'Ikigai';
const animatedTextThree = 'Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.';
const animatedHeading = document.querySelector('.content-heading');
const animatedHeadingTwo = document.querySelector('.content-span');
const animatedHeadingThree = document.querySelector('.content-paragraph');
const shopNowButton = document.querySelector('.shop-now-button');

function typeWriterThree(element, animatedTextThree, index, delay) {
  if (index < animatedTextThree.length) {
    element.innerHTML += animatedTextThree.charAt(index);
    index++;
    setTimeout(() => typeWriterThree(element, animatedTextThree, index), delay);
  }
}

window.addEventListener('load', () => {
  typeWriterThree(animatedHeadingThree, animatedTextThree, 0, 100);
})

function typeWriterTwo(element, animatedTextTwo, index, delay) {
  if (index < animatedTextTwo.length) {
    element.innerHTML += animatedTextTwo.charAt(index);
    index++;
    setTimeout(() => typeWriterTwo(element, animatedTextTwo, index), delay);
  }
}

window.addEventListener('load', () => {
  typeWriterTwo(animatedHeadingTwo, animatedTextTwo, 0, 100);
})

function typeWriter(element, animatedText, index, delay) {
  if (index < animatedText.length) {
    element.innerHTML += animatedText.charAt(index);
    index++;
    setTimeout(() => typeWriter(element, animatedText, index, delay), delay);
  }
}

window.addEventListener('load', () => {
  typeWriter(animatedHeading, animatedText, 0, 100);
});


products.addEventListener('click', () => {
  if (productsDropDown.style.display == 'none') {
    productsDropDown.style.display = 'flex';
  } else {
    productsDropDown.style.display = 'none';
  }
});