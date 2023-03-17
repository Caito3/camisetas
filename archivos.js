

function agrandar(reference){
    var agran = document.getElementById("agran")
    agran.style.display = "flex" 
    var ex = document.getElementById("ex")
    ex.src= reference
}
function traer(){
    agran.style.display = "none"
}
var a = 0

function mas (){

    if ( a >= 0){
    a +=1
    
    var carro = document.getElementById("tex")
    carro.value = a
    }
}



function menos(){
    if ( a > 0){
    a -= 1
    var carro = document.getElementById("tex")
    carro.value=a
}

}
function bot(){

    var pro = document.getElementById("pro")
    
    pro.style.display="none"
}
function ag(){
    var tCarro = document.getElementById("ar")
    var prod = document.getElementById("tex").value
    var ara = document.getElementById("prod")
    var pag = document.getElementById("pag")
    ara.style.display = "block"
    tCarro.innerHTML = prod
    pag.innerHTML =13000 * prod
    pag.style.display ="block"
}

function carro(){
    var proa = document.getElementById("pro")
    proa.style.display= "flex"
}
function pag(){
    var pagar = document.getElementById("pagar")
    var prod = document.getElementById("tex").value
    
    pagar.innerHTML = prod
    pagar.style.display="block"
}