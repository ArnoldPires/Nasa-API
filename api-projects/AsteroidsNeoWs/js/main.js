document.querySelector("button").addEventListener("click", sendRequest);
async function sendRequest() {
 let API_KEY = "xOpOvmhlHVfwYU3cjqHqKNygbarnrwuzWZD9UdsH";
 let response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
 let data = await response.json()
 useApiData(data)
}
function useApiData(data) {
    document.querySelector('img').innerHTML += data.explanation
    document.querySelector('h3').innerHTML += `<img src="${data.url}">`
}