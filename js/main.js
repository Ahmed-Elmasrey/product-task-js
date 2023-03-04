var allProducts = document.querySelectorAll(".items .btn")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var total = document.querySelector("#total")
var totalPrice = 0

allProducts.forEach( function (item){
        item.onclick = function (){
            totalPrice += +(item.getAttribute("price"))
            btn.style.display = "block"
        }
})

btn.onclick = function (){
    total.innerHTML=totalPrice
}