// Morimori Stock
// Aplicación principal


// Iniciar almacenamiento

initializeStorage();



const buttons = document.querySelectorAll(".menu-btn");
const content = document.getElementById("content");



buttons.forEach(button => {


    button.addEventListener("click", () => {


        const section = button.dataset.section;


        openSection(section);


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

            content.innerHTML = `
                <h2>➖ Venta</h2>
                <p>Próximamente podrás registrar ventas.</p>
            `;

        break;



        case "waste":

            content.innerHTML = `
                <h2>🗑️ Merma</h2>
                <p>Próximamente podrás registrar mermas.</p>
            `;

        break;



        case "history":

            content.innerHTML = `
                <h2>📜 Historial</h2>
                <p>Próximamente aparecerán los movimientos.</p>
            `;

        break;



        case "stats":

            content.innerHTML = `
                <h2>📊 Estadísticas</h2>
                <p>Próximamente aparecerán las estadísticas.</p>
            `;

        break;



        case "products":

            content.innerHTML = `
                <h2>⚙️ Productos</h2>
                <p>Próximamente podrás administrar productos.</p>
            `;

        break;


    }


}





// Mostrar inventario

function showInventory(){


    const products = getProducts();



    let html = `

        <h2>📦 Inventario</h2>

        <div class="inventory-list">

    `;



    products.forEach(product => {


        if(product.active){


            html += `

            <div class="product-card">

                <strong>${product.name}</strong>

                <span>
                    ${product.stock}
                </span>

            </div>

            `;


        }


    });



    html += `

        </div>

    `;



    content.innerHTML = html;


}
function showProduction(){

    const products = getProducts();


    let html = `

    <h2>➕ Producción</h2>

    <label>
        Producto
    </label>

    <select id="productionProduct">

    `;


    products.forEach(product => {

        if(product.active){

            html += `
            <option value="${product.id}">
                ${product.name}
            </option>
            `;

        }

    });


    html += `

    </select>


    <label>
        Cantidad
    </label>

    <input 
        id="productionAmount"
        type="number"
        placeholder="Ej. 24"
    >


    <button 
        class="menu-btn"
        onclick="addProduction()">

        Guardar producción

    </button>

    `;


    content.innerHTML = html;

}





function addProduction(){


    const productId = Number(
        document.getElementById("productionProduct").value
    );


    const amount = Number(
        document.getElementById("productionAmount").value
    );


    if(!amount || amount <= 0){

        alert("Ingresa una cantidad válida");

        return;

    }



    const products = getProducts();


    const product = products.find(
        p => p.id === productId
    );



    product.stock += amount;



    saveProducts(products);



    const history = getHistory();


    history.push({

        date: new Date().toLocaleString(),

        type: "Producción",

        product: product.name,

        quantity: amount

    });



    saveHistory(history);



    alert(
        `✅ ${amount} ${product.name} agregados`
    );



    showInventory();


}
