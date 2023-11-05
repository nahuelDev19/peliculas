/*function but(){
    let input= document.getElementById("miInput")
    let ul=document.getElementById("miId")

    let todo="<li>"+ input + "</li>"
}
*/
/*

function but() {
    let nuevoElemento = document.getElementById("nuevoElemento").value;
    let elementosAgregados = document.getElementById("elementosAgregados");

    if (nuevoElemento.trim() !== "") {
        let nuevoItem = document.createElement("li");
        nuevoItem.innerText = nuevoElemento;
        elementosAgregados.appendChild(nuevoItem);
        document.getElementById("nuevoElemento").value = "";
    }
}
*/ 
function miFun(){
    let input = document.getElementById("miInput").value;
    let ul = document.getElementById("miId");

    if (input) {
        let todo = "<li>" + input + "</li>"; 
        ul.insertAdjacentHTML("beforeend", todo); 
}}