
const resultsFavorites = document.querySelector(".box-container-favorites");

let favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];


if (favoritesList.length === 0) {
    const noResults = document.createElement("div");
    noResults.innerHTML = "<p class='text-center'>There are no favorites yet!</p>";

    resultsFavorites.appendChild(noResults);
}

function displayPhotosForFavorites() {
    favoritesList.map((item) => {
        resultsFavorites.innerHTML += `
          <div class="box-container-favorites">
          <img src="${item.images.original.url}" alt="${item.images.original.url}"> 
          <a href="${item.url}" target="_blank" class="link-favorites">${item.title}</a>
          </div>
          `;
    });
}

displayPhotosForFavorites();