import sitePaieska from "./sitePaieska";
import renderAprasymas from "./renderAprasymas";
const paieskosIsvedimas=()=>
{
    document.querySelector(`form`).addEventListener(`submit`,(e)=> {
        e.preventDefault()
        const searchTerm = document.querySelector(`.term`).value;
        let searchResponse
        sitePaieska(searchTerm)
            .then(result => searchResponse = result)

            .then((result)=>{
                if(searchResponse.meals==null)
                {
                    console.log("Patiekalo tokiu pavadinimu nėra")
                    if (document.body.contains(document.getElementById(`exists`))) {
                       var trinti=document.getElementById(`atstable`)
                        trinti.remove();
                    }
                    document.getElementById(`isvedimasJeiNera`).innerHTML=`Patiekalo tokiu pavadinimu nėra, prašome bandyti dar kartą`
                }
                else {
                    console.log(searchResponse.meals[0]);
                    if (document.body.contains(document.getElementById(`exists`))) {
                        document.getElementById(`patiekaloPav`).innerHTML=`${searchResponse.meals[0].strMeal}`;
                        document.getElementById(`patiekaloIngr`).innerHTML=`${searchResponse.meals[0].strIngredient1},`;

                        document.getElementById(`isvedimasJeiNera`).innerHTML = ``;
                    }else
                    renderAprasymas();
                    document.getElementById(`patiekaloPav`).innerHTML = `${searchResponse.meals[0].strMeal}`;
                    document.getElementById(`patiekaloIngr`).innerHTML = `
                    ${searchResponse.meals[0].strIngredient1},${searchResponse.meals[0].strIngredient2},
                    ${searchResponse.meals[0].strIngredient3},${searchResponse.meals[0].strIngredient4},
                    ${searchResponse.meals[0].strIngredient5}`
                    document.getElementById(`patiekaloNuotr`).src = `${searchResponse.meals[0].strMealThumb}`;
                    document.getElementById(`isvedimasJeiNera`).innerHTML = ``;
                }
        })
    })
}
export default paieskosIsvedimas;