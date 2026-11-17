const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;