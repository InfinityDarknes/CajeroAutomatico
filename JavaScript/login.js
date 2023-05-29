//let usuario = usuarios.find(elemento => elemento.nombre === 'Joel');
//Arreglo de datos para validar
const usuarios = [
{nombre:'Brayan', password:'gatos123', balance:'1000'},
{nombre:'Joel', password:'password123',balance:'5000'},
{nombre:'Memo', password:'hola123',balance:'4500'}
];
//Funcion para capturar los datos del usuario 
function login(){
    var usuarioInput = document.getElementById("usuario").value;
    var passwordInput = document.getElementById("password").value;
    validarUsuario(usuarioInput,passwordInput);
}
//Funcion para validar los datos del usuario
function validarUsuario(usuarioInput, passwordInput){
    let usuarioEncontrado = false;
    
    for (i in usuarios){
        if (usuarioInput == usuarios[i].nombre && passwordInput == usuarios[i].password){                        
            usuarioEncontrado = true;
            let usuarioData = usuarios[i].nombre;
            let balanceData = usuarios[i].balance;
            sessionStorage.setItem("Nombre",usuarioData);
            sessionStorage.setItem("Balance",balanceData);
            break;
        }
    }
    
    if (usuarioEncontrado == true){
        
        location.href = 'datosBancarios.html';
    }
    else{
        alert('Usuario o contrasena incorrectos intente de nuevo');
    }
}

// cerrar sesion temporal hasta que lo mejore
function cerrarSesion(){
    location.href = 'login.html';
}