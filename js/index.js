/* 
Recreate Giphy with their API (https://developers.giphy.com/docs/api)

API Key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc
https://api.giphy.com/v1/gifs/search?api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc&q=pug&limit=25&offset=0&rating=g&lang=en

https://api.giphy.com/v1/gifs/trending?api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc&limit=25&rating=pg-13

https://api.giphy.com/v1/gifs/trending?api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc&limit=25&rating=r

*/

const results = document.querySelector(".box-container");

const searchForm = document.querySelector("#search");
const searchKeyword = document.getElementById("search-input");
const noResultBanner = document.getElementById("no-result");

const config = {
    baseUrl: "https://api.giphy.com/v1/gifs",
    apiKey: "api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc"
}

let trendingGiphs = [];
let allGiphsList = []

let favoritesList = [];

// URLS
const TRENDING_GIPHY_URL = `${config.baseUrl}/trending?${config.apiKey}`;
const SEARCH_GIPHY_URL = `${config.baseUrl}/search?${config.apiKey}`;
const RANDOM_GIPHY_URL = `${config.baseUrl}/random?${config.apiKey}`;


const showUI = (data) => {

    while (results.firstChild) {
        results.removeChild(results.firstChild)
    }

    data.forEach(({ type, id, url, title, rating, images, isFav }) => {
        let divContainer = document.createElement('div');
        let img = document.createElement('img');
        let anchorTag = document.createElement('a');
        let name = document.createElement('p');
        let typeContainer = document.createElement('span');
        let ratingContainer = document.createElement('div');
        let textContainer = document.createElement('div');
        let faviconContainer = document.createElement('span');

        textContainer.classList.add("container-description")
        faviconContainer.classList.add('container-favicon');
        let isFavIcon = document.createElement('button');
        isFavIcon.classList.add('button-fav-icon');

        isFavIcon.innerHTML = `${isFav ? '<i class="mdi mdi-heart"></i>' : '<i class="mdi mdi-heart-outline"></i>'}`;

        isFavIcon.onclick = function () {
            return setFavorite(id)
        }


        img.src = images.original.url;
        anchorTag.href = url;
        anchorTag.setAttribute('target', '_blank');
        anchorTag.appendChild(img);
        name.textContent = `${title}`;
        typeContainer.textContent = `${type}`;
        ratingContainer.textContent = `${rating}`;
        divContainer.classList.add("card-box-container");
        divContainer.appendChild(anchorTag);
        divContainer.appendChild(anchorTag);
        textContainer.appendChild(name);
        divContainer.appendChild(textContainer);
        faviconContainer.appendChild(isFavIcon);
        divContainer.appendChild(faviconContainer);
        results.appendChild(divContainer);

    })
}

const parseList = (array) => {
    return array.map(({ type, id, url, title, rating, images }) => {
        return {
            type: type,
            id: id,
            url: url,
            title: title,
            rating: rating,
            images: images,
            isFav: false,
        }
    })

}

const getGiphData = async (url, keyword) => {

    const apiURL = keyword ? `${url}&q=${keyword}&limit=30&offset=0&rating=g&lang=en` : url;
    try {
        const data = await fetch(apiURL);
        const response = await data.json();
        allGiphsList = parseList(response.data);
        showUI(allGiphsList)
    } catch (error) {
        console.error("error", error)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getGiphData(TRENDING_GIPHY_URL)
});

const validateForm = (e) => {
    e.preventDefault();

    const searchKeywordValue = searchKeyword.value;

    if (searchKeywordValue === '') {
        showNoResultBanner('add valid value');
        return false;
    }

}

const showNoResultBanner = (message) => {
    const noResult = document.createElement("p");
    const noAlert = document.querySelector("alert");

    if (!noAlert) {
        noResult.classList.add("alert", "error");
        noResult.innerHTML = `  <strong>Error</strong>
        <span class="block">${message}</span>`;
        noResultBanner.appendChild(noResult);

        setTimeout(() => {
            noResult.remove();
        }, 3000)
    }

}
favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];
// favorites.forEach(function (favorite) {
//     document.getElementById(favorite).className = 'fav';
// });



const setFavorite = (id) => {
    let favoriteId = id;

    let modifiedData = allGiphsList.map((item) => {

        if (item.id === favoriteId) {

            item.isFav = true;
            item.className = 'fav';
            favoritesList.push(item);
        }
        return item;
    });

    const res = [...favoritesList.reduce((a,c)=>{
        a.set(c.id, c);
        return a;
      }, new Map()).values()];
      
      console.log("res",res);

    showUI(modifiedData);
    localStorage.setItem('favoritesList', JSON.stringify(res));

}

// Events:

searchKeyword.addEventListener("keyup", e => {
    searchGiphy()
})

const searchGiphy = async () => {
    // const result = movieList.filter(filterByName).filter(filterByYear)
    const searchKeywordValue = searchKeyword.value;

    let { data } = await getGiphData(SEARCH_GIPHY_URL, searchKeywordValue);
    // return generateUI(result);
}

