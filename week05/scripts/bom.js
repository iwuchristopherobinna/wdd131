
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener("click", function () {
	
	if (inputElement.value != "") {
		
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		
		li.appendChild(deleteBtn);
		
		listElement.appendChild(li);
		
		inputElement.value = "";
	}
	
	inputElement.focus();
});

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const chapter = input.value.trim();
    displayList(chapter);
    chaptersArray.push(chapter);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}