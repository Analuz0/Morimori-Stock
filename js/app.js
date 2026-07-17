// Morimori Stock
// Aplicación principal


initializeStorage();


const buttons = document.querySelectorAll(".menu-btn");
const content = document.getElementById("content");



buttons.forEach(button => {

    button.addEventListener("click", () => {

        openSection(button.dataset.section);

    });

});



function openSection(section){

    switch(section){

        case "inventory":
            showInventory();
        break;


        case "production":
            showProduction();
        break;


        case "sales":
            showSale();
        break;


        case "waste":
            showWaste();
        break;


        case "history":
            showHistory();
        break;


        case "stats":
            showStats();
        break;


        case "products":
            showProducts();
        break;

    }

}




// =================
// INVENTARIO
// =================


function showInventory(){

    const products = getProducts();


    let html = `
    <h2>📦 Inventario</h2>
    `;


    products.forEach(product=>{

        if(product.active){

            html += `
            <div class="product-card">
                <strong>${product.name}</strong>
                <span>${product.stock}</span>
            </div>
            `;

        }

    });


    content.innerHTML = html;

}



// =================
// PRODUCCIÓN
// =================


function showProduction(){

    const products=getProducts();


    let html=`

    <h2>➕ Producción</h2>

    <select id="movementProduct">

    `;


    products.forEach(product=>{

        if(product.active){

            html+=`
            <option value="${product.id}">
            ${product.name}
            </option>
            `;

        }

    });


    html+=`

    </select>


    <input 
    id="movementAmount"
    type="number"
    placeholder="Cantidad">


    <button class="menu-btn" onclick="addProduction()">
    Guardar producción
    </button>

    `;


    content.innerHTML=html;

}




function addProduction(){

    makeMovement("Producción",1);

}



// =================
// VENTAS
// =================


function showSale(){

    showMovementForm("Venta",-1);

}



function showMovementForm(title,type){

    const products=getProducts();


    let html=`

    <h2>${type===1?"➕":"➖"} ${title}</h2>

    <select id="movementProduct">

    `;


    products.forEach(product=>{

        if(product.active){

            html+=`
            <option value="${product.id}">
            ${product.name} (Stock ${product.stock})
            </option>
            `;

        }

    });


    html+=`

    </select>


    <input
    id="movementAmount"
    type="number"
    placeholder="Cantidad">


    <button class="menu-btn"
    onclick="makeMovement('${title}',${type})">

    Guardar

    </button>

    `;


    content.innerHTML=html;

}





function makeMovement(type,operation){


    const id=Number(
        document.getElementById("movementProduct").value
    );


    const amount=Number(
        document.getElementById("movementAmount").value
    );


    if(!amount || amount<=0){

        alert("Cantidad inválida");
        return;

    }


    const products=getProducts();


    const product=products.find(
        p=>p.id===id
    );



    if(operation===-1 && product.stock<amount){

        alert("No hay suficiente stock");
        return;

    }



    product.stock += amount*operation;


    saveProducts(products);



    const history=getHistory();


    history.push({

        date:new Date().toLocaleString(),

        type:type,

        product:product.name,

        quantity:amount

    });


    saveHistory(history);



    alert("✅ Movimiento guardado");


    showInventory();


}




// =================
// MERMA
// =================


function showWaste(){

    showMovementForm("Merma",-1);

}



// =================
// HISTORIAL
// =================


function showHistory(){

    const history=getHistory();


    let html=`

    <h2>📜 Historial</h2>

    `;


    if(history.length===0){

        html+="<p>No hay movimientos</p>";

    }


    history.reverse().forEach(item=>{


        html+=`

        <div class="product-card">

        <strong>${item.type}</strong><br>

        ${item.product}
        (${item.quantity})

        <br>
        <small>${item.date}</small>

        </div>

        `;


    });



    content.innerHTML=html;


}



// =================
// ESTADÍSTICAS
// =================


function showStats(){

    const history=getHistory();


    let production=0;
    let sales=0;
    let waste=0;


    history.forEach(item=>{


        if(item.type==="Producción")
        production+=item.quantity;


        if(item.type==="Venta")
        sales+=item.quantity;


        if(item.type==="Merma")
        waste+=item.quantity;


    });



    content.innerHTML=`

    <h2>📊 Estadísticas</h2>

    <p>Producción total: ${production}</p>

    <p>Ventas totales: ${sales}</p>

    <p>Merma total: ${waste}</p>

    `;


}



// =================
// PRODUCTOS
// =================


function showProducts(){

    content.innerHTML=`

    <h2>⚙️ Productos</h2>

    <p>
    Próximamente aquí editaremos catálogo,
    precios normal y cafetería.
    </p>

    `;

}
