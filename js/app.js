// Morimori Stock
// Aplicación de inventario


const buttons = document.querySelectorAll(".menu-btn");
const content = document.getElementById("content");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;

        openSection(section);

    });

});



function openSection(section) {


    switch(section) {


        case "inventory":

            content.innerHTML = `
                <h2>📦 Inventario</h2>
                <p>Aquí aparecerá tu stock actual.</p>
            `;

        break;



        case "production":

            content.innerHTML = `
                <h2>➕ Producción</h2>
                <p>Registrar nuevas piezas producidas.</p>
            `;

        break;



        case "sales":

            content.innerHTML = `
                <h2>➖ Venta</h2>
                <p>Registrar productos vendidos.</p>
            `;

        break;



        case "waste":

            content.innerHTML = `
                <h2>🗑️ Merma</h2>
                <p>Registrar productos perdidos o descartados.</p>
            `;

        break;



        case "history":

            content.innerHTML = `
                <h2>📜 Historial</h2>
                <p>Aquí aparecerán todos los movimientos.</p>
            `;

        break;



        case "stats":

            content.innerHTML = `
                <h2>📊 Estadísticas</h2>
                <p>Aquí veremos producción, ventas y mermas históricas.</p>
            `;

        break;



        case "products":

            content.innerHTML = `
                <h2>⚙️ Productos</h2>
                <p>Aquí podrás administrar tu catálogo.</p>
            `;

        break;


    }


}
