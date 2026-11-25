const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductSelect() {
  const productSelect = document.querySelector("#product");
  if (!productSelect) return;

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

function updateReviewCounter() {
  const countElement = document.querySelector("#review-count");
  if (!countElement) return;

  const currentCount = Number(localStorage.getItem("reviewCount")) || 0;
  const updatedCount = currentCount + 1;
  localStorage.setItem("reviewCount", updatedCount);
  countElement.textContent = updatedCount;
}

function updateFooterDates() {
  const yearSpan = document.querySelector("#currentyear");
  const lastModifiedPara = document.querySelector("#lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedPara) {
    lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
  }
}

populateProductSelect();
updateReviewCounter();
updateFooterDates();