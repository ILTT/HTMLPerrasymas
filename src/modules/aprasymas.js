const aprasymas = ()=>{
    return `
    <div id="atstable">
    <table class="table table-responsive table-dark border border-white">
        <thead>
        <tr>
            <th scope="row">Pavadinimas</th>
            <th scope="row">ingredientai</th>
            <th scope="row">Nuotrauka</th>
        </tr>    
        </thead>
        <tbody>
        <tr>
           <td id="patiekaloPav"></td>
           <td id="patiekaloIngr"></td>
           <td><img src="" id="patiekaloNuotr" class="h-25"> </img></td>
        </tr>
        </tbody>
    </table>
    <br id="exists">
    </div>
`
}
export default aprasymas;