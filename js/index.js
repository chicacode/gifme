/* 
Recreate Giphy with their API (https://developers.giphy.com/docs/api)

API Key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc
https://api.giphy.com/v1/gifs/search?api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc&q=pug&limit=25&offset=0&rating=g&lang=en

https://api.giphy.com/v1/gifs/trending?api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc&limit=25&rating=pg-13

https://api.giphy.com/v1/gifs/trending?api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc&limit=25&rating=r

*/

console.log("Hello Giphy")
const results = document.querySelector(".box-container");
const searchKeyword = document.getElementById("search-input");

const config = {
    baseUrl: "https://api.giphy.com/v1/gifs",
    apiKey: "api_key=2I8f4Stngla6Yy7O5DcMgzbaUirHKQOc"
}

let trendingGiphs = [];

// URLS
const TRENDING_GIPHS_URL = `${config.baseUrl}/trending?${config.apiKey}&limit=25&rating=pg-13`;
const SEARCH_GIPHS_URL = `${config.baseUrl}/search?${config.apiKey}`;

const getGiphData = async (url, keyword) =>{

    const apiURL = keyword ? `${url}&q=${keyword}&limit=25&offset=0&rating=g&lang=en` : url;
    console.log("apiURL", apiURL)
    try{
        const data = await fetch(apiURL);
        const response = await data.json();
    
        console.log(response)
    }catch(error){
        console.error("error", error)
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    getGiphData(TRENDING_GIPHS_URL)
})

