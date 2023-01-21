const data = [
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/1162/large/18340173_wkb_18b4728_pri_larg.jpg",
        price: "$128.99",
        name: "Craquest Premium Break Caliper",
        desc: "18-B4728: Front Right, Remanufactured, Includes Bracket, Anti-Corrosion Coated",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/1162/large/3760510_wkb_184300_pri_larg.jpg",
        price: "$45.99",
        name: "Craquest Premium Break Caliper",
        desc: "18-4300: Front Right, Remanufactured, Includes Bracket, Anti-Corrosion Coated",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/1162/large/10841067_wkb_18b4919a_pri_larg.jpg",
        price: "$133.99",
        name: "Craquest Premium Break Caliper",
        desc: "B4919A: Front Left, Remanufactured, Includes Bracket, Anti-Corrosion Coated",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/220/large/10004706_wea_nad1393_pri_larg.jpg",
        price: "$31.99",
        name: "Craquest Standard Break Pads",
        desc: "Organic(4-Pad Set)",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/219/large/15750044_wea_mkd785_pri_larg.jpg",
        price: "$39.99",
        name: "Craquest Standard Break Pads",
        desc: "Semi-Metallic(4-Pad Set)",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/219/large/10004549_wea_nad1421_pri_larg.jpg",
        price: "$41.99",
        name: "Craquest Standard Break Pads Front",
        desc: "Semi-Metallic(4-Pad Set)",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/12419626_fdv_fda8755a_pri_larg.jpg",
        price: "$19.79",
        name: "FRAME DRIVE",
        desc: "Drive Rigid Panel Engine Air Filter: Standard, Meets or Exceeds",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/12419664_fdv_fda10171_alt1_pri_larg.jpg",
        price: "$15.79",
        name: "FRAME DRIVE",
        desc: "Drive Rigid Panel Engine Air Filter: Standard, Meets or Exceeds",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/12419574_fdv_fda7626_alt2_pri_larg.jpg",
        price: "$21.29",
        name: "FRAME DRIVE",
        desc: "Drive Rigid Panel Engine Air Filter: Standard, Meets or Exceeds",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/26/large/5020646_edb_1406_pri_larg.jpg",
        price: "$415.29",
        name: "Edelbrock Performer Carburetor",
        desc: "#1406 600 CFM With Electric Choke, Satin Finish(Non-EGR)",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/26/large/11920262_edb_1906_pri_larg.jpg",
        price: "$445.99",
        name: "Edelbrock Performer Carburetor",
        desc: "#1906 650 CFM With Electric Choke, Satin Finish(Non-EGR)",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/26/large/6340008_hol_080457s_pri_larg.jpg",
        price: "$427.39",
        name: "Holley Street Carburetor",
        desc: "#600 CFM With Electric Choke, 4 Barrel, Square Bore, Single Inlet",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2916/large/2040433_eny_35752_pri_larg.jpg",
        price: "$131.99",
        name: "DieHard Red Battery",
        desc: "7589DT Group Size, 650 CCA 93 Minute Reserve Capicity, Reliable Starting Power",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2916/large/2130021_eny_650_pri_larg.jpg",
        price: "$131.99",
        name: "DieHard Red Battery",
        desc: "65 Group Size, 650 CCA 80 Minute Reserve Capicity, Reliable Starting Power",
    },
    {
        img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2916/large/2070073_eny_24f2_pri_larg.jpg",
        price: "$131.99",
        name: "DieHard Red Battery",
        desc: "24F Group Size, 550 CCA 85 Minute Reserve Capicity, Reliable Starting Power",
    },
]

let container = document.getElementById("product")
displayProduct(data)
function displayProduct(data){
    // container.innerHTML = ""
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

        card.append(img,price,name,desc,addToCart)
        container.append(card)
    });
}