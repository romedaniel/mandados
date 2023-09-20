let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validarForm();
});


function validarForm(){
 if(input.value === ""){
    alert("¡Escriba un mandado a guardar!")
 }
 else{
    guardarDatos();
 }
};

let datos = {};

function guardarDatos(){
    datos["Mandado"] = input.value;
    publicarMandado();
}


function publicarMandado(){
    posts.innerHTML +=
    `
    <div>
        <p>${datos.Mandado}</p>
        <span class="opciones">
            <i onClick="editarMandado(this)" class="fas fa-edit"></i>
            <i onClick="borrarMandado(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};


function borrarMandado(e){
    e.parentElement.parentElement.remove();
}

function editarMandado(e){
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}