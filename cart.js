let cartData = JSON.parse(localStorage.getItem("productPage"))||[];
let container = document.getElementById("product")
displayProduct(data)
function displayProduct(data){
    container.innerHTML = ""
    data.forEach((element) => {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let price = document.createElement("h3")
        let name = document.createElement("h3")
        let desc = document.createElement("p")
        let addToCart = document.createElement("button");

        card.setAttribute("class", "card")
        img.setAttribute("src", element.img)
        price.innerText = element.price;
        name.textContent = element.name;
        desc.textContent = element.desc;
        addToCart.textContent = "Add to Cart";

        addToCart.addEventListener("click",()=>{
            if(check(element)){
                // document.getElementById("alert").innerText="Already Placed Order"
                alert("Product Already In Cart")
            }else{
                productData.push({...element,quantity:1})
                localStorage.setItem("productPage", JSON.stringify(productData))
                // document.getElementById("alert").innerText = "Successfully Placed Order"
                alert("Product Added To Cart")
            }
        })

        card.append(img,price,name,desc,addToCart)
        container.append(card)
    });
}