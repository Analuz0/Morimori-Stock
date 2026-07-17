// Morimori Stock
// Base de datos local


const STORAGE_KEYS = {

    products: "morimori_products",
    history: "morimori_history"

};



// Catálogo Morimori

const defaultProducts = [

{
id:1,
name:"Croissant natural",
category:"Croissant",
stockGroup:"croissant",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:2,
name:"Croissant nuez",
category:"Croissant",
stockGroup:"croissant",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:3,
name:"Croissant moka",
category:"Croissant",
stockGroup:"croissant_moka",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:4,
name:"Croissant macaron matcha frambuesa",
category:"Croissant especial",
stockGroup:"croissant_matcha",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:5,
name:"Croissant macaron cherry cola",
category:"Croissant especial",
stockGroup:"croissant_cherry",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:6,
name:"Croissant macaron fresas con crema",
category:"Croissant especial",
stockGroup:"croissant_fresa",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:7,
name:"Chocolatín",
category:"Pan laminado",
stockGroup:"chocolatin",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:8,
name:"Suizo coco mango y maracuyá",
category:"Suizo",
stockGroup:"suizo_coco",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:9,
name:"Suizo avellana chocolate y caramelo",
category:"Suizo",
stockGroup:"suizo_avellana",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:10,
name:"Trenza frutos rojos",
category:"Pan laminado",
stockGroup:"trenza",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:11,
name:"Danesa cajeta",
category:"Danesa",
stockGroup:"danesa",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:12,
name:"Danesa mango",
category:"Danesa",
stockGroup:"danesa",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:13,
name:"Cruffin guayaba con queso",
category:"Cruffin",
stockGroup:"cruffin",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:14,
name:"Cruffin Carlota con merengue",
category:"Cruffin",
stockGroup:"cruffin",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:15,
name:"Monkey Nutella",
category:"Monkey",
stockGroup:"monkey_nutella",
price:0,
cafePrice:0,
stock:0,
active:true
},

{
id:16,
name:"Monkey Mojito",
category:"Monkey",
stockGroup:"monkey_mojito",
price:0,
cafePrice:0,
stock:0,
active:true
}

];




// Inicialización temporal
// Fuerza cargar catálogo nuevo

function initializeStorage(){


    if(!localStorage.getItem(STORAGE_KEYS.products)){


        localStorage.setItem(
            STORAGE_KEYS.products,
            JSON.stringify(defaultProducts)
        );


    }



    if(!localStorage.getItem(STORAGE_KEYS.history)){


        localStorage.setItem(
            STORAGE_KEYS.history,
            JSON.stringify([])
        );


    }


}


}





function getProducts(){

    return JSON.parse(
        localStorage.getItem(STORAGE_KEYS.products)
    ) || [];

}





function saveProducts(products){

    localStorage.setItem(
        STORAGE_KEYS.products,
        JSON.stringify(products)
    );

}





function getHistory(){

    return JSON.parse(
        localStorage.getItem(STORAGE_KEYS.history)
    ) || [];

}





function saveHistory(history){

    localStorage.setItem(
        STORAGE_KEYS.history,
        JSON.stringify(history)
    );
function getStockByGroup(stockGroup){

    const products = getProducts();

    const product = products.find(
        p => p.stockGroup === stockGroup
    );

    return product ? product.stock : 0;

}
}
