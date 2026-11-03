const currentYearSpan = document.querySelector('#currentyear');
const lastModifiedParagraph = document.querySelector('#lastModified');

const today = new Date();
currentYearSpan.textContent = today.getFullYear();

lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});