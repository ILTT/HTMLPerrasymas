import aprasymas from "./aprasymas";
const renderAprasymas=()=>
{
    let formElement=document.createElement(`aprasymas`);
    formElement.innerHTML=aprasymas();
    document.querySelector(`main`).appendChild(formElement)
}
export default renderAprasymas;