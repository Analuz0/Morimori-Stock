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
