// Morimori Stock
// Sistema de almacenamiento local


const STORAGE_KEYS = {

    products: "morimori_products",
    history: "morimori_history"

};



// Productos iniciales

const defaultProducts = [

    {
        id: 1,
        name: "Croissant",
        stock: 0,
        active: true
    },

    {
        id: 2,
        name: "Chocolatín",
        stock: 0,
        active: true
    },

    {
        id: 3,
        name: "Suizo",
        stock: 0,
        active: true
    },

    {
        id: 4,
        name: "Danesa",
        stock: 0,
        active: true
    },

    {
        id: 5,
        name: "Cruffin Guayaba",
        stock: 0,
        active: true
    },

    {
        id: 6,
        name: "Cruffin Oreo",
        stock: 0,
        active: true
    },

    {
        id: 7,
        name: "NY Cookie",
        stock: 0,
        active: true
    },

    {
        id: 8,
        name: "Brownie",
        stock: 0,
        active: true
    },

    {
        id: 9,
        name: "Macaron",
        stock: 0,
        active: true
    }

];



// Inicializar base de datos

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



// Obtener productos

function getProducts(){

    return JSON.parse(
        localStorage.getItem(STORAGE_KEYS.products)
    ) || [];

}



// Guardar productos

function saveProducts(products){

    localStorage.setItem(
        STORAGE_KEYS.products,
        JSON.stringify(products)
    );

}



// Obtener historial

function getHistory(){

    return JSON.parse(
        localStorage.getItem(STORAGE_KEYS.history)
    ) || [];

}



// Guardar historial

function saveHistory(history){

    localStorage.setItem(
        STORAGE_KEYS.history,
        JSON.stringify(history)
    );

}
