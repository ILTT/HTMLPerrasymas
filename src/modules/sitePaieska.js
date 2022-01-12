const sitePaieska=(term)=>{
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response=>response.json())
}
export default sitePaieska