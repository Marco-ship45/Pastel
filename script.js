const interruptor = document.getElementById("modoOscuro");

if (interruptor) {

    if (localStorage.getItem("tema") === "oscuro") {

        document.body.classList.add("dark-mode");

        interruptor.checked = true;

    }

    interruptor.addEventListener("change", function () {

        if (this.checked) {

            document.body.classList.add("dark-mode");

            localStorage.setItem("tema", "oscuro");

        } else {

            document.body.classList.remove("dark-mode");

            localStorage.setItem("tema", "claro");

        }

    });

}

//Contacto//

const formulario = document.getElementById("formContacto");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🍰 ¡Gracias por contactarnos! Te responderemos muy pronto.");

        formulario.reset();

    });

}

//Boton promocion//

const btnPromocion = document.getElementById("btnPromocion");

if (btnPromocion) {

    btnPromocion.addEventListener("click", function () {

        const modal = new bootstrap.Modal(document.getElementById("modalPromocion"));

        modal.show();

    });

}

//Boton ordenar//


const botones = document.querySelectorAll(".btn-ordenar");

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        alert("🎂 Tu pastel ha sido agregado como pedido de ejemplo.");

    });

});