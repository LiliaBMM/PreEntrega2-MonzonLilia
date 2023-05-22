/*Clase constructora de paciente*/
class Pacientes {
    constructor(nombre, apellido, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
    }
}

/*Asignacion de informacion de cada paciente*/
const paciente1 = new Pacientes("Luis", "Perez" , 01),
      paciente2 = new Pacientes("Carla", "Lopez", 02),
      paciente3 = new Pacientes("Arturo", "Rivera", 03),
      paciente4 = new Pacientes("Marta","Franco", 01),
      paciente5 = new Pacientes("Felipe", "Avila", 02),
      paciente6 = new Pacientes("Laura", "Hernandez", 03),
      paciente7 = new Pacientes("Jorge", "Abreu", 00);


/*inicializo un arreglo vacio para generar el arreglo de pacientes*/
const listaPacientes = [ ]; 

listaPacientes.push(paciente1);
listaPacientes.push(paciente2);
listaPacientes.push(paciente3);
listaPacientes.push(paciente4);
listaPacientes.push(paciente5);
listaPacientes.push(paciente6);
listaPacientes.push(paciente7);

console.log(listaPacientes);

/*funcion de atencion al paciente, se asocia al id de cada uno*/

function atencion(nombrePaciente, apellidoPaciente, id){
    let especialista = id;
    switch(especialista){
        case 1:
            alert(`Bienvenido ${nombrePaciente} ${apellidoPaciente} enseguida lo atenderá el cirujano`);
            break;
        case 2:
            alert(`Bienvenido ${nombrePaciente} ${apellidoPaciente} enseguida lo atenderá el odontólogo`);
            break;
        case  3:
            alert(`Bienvenido ${nombrePaciente} ${apellidoPaciente} enseguida lo atenderá el pediatra`);   
            break;
        default:
            alert(`Lo sentimos mucho ${nombrePaciente} ${apellidoPaciente} no hay médico de esa especialidad`);
            break;    
        }
}

/*funcion que incluye nuevos pacientes al consultorio*/
function registro(){
    let nombre = prompt("Ingrese el nombre del paciente: ");
    let apellido = prompt("Ingrese el apellido del paciente: ");
    let id = prompt("Ingrese el número asociado al especialista: ");
    let paciente = new Pacientes(nombre, apellido, id);
    listaPacientes.push(paciente);
    alert(`Bienvenida ${nombre} ${apellido}`);
    console.log(listaPacientes);
}

/*funcion INICIO */
function inicio(){
    let solicitud = parseInt(prompt("Seleccione una opcion: \n 1. Registro de nuevo paciente \n 2. Solicitud de consulta \n 3. Tipo de especialista asociado: "));
    return solicitud;
}

/*Funcion que consulta los pacientes de cada especialista*/
function listaPorEspecialista(){
    let doctor = parseInt(prompt("Ingrese el número id asociado al paciente"));
    const paciente = listaPacientes.filter(item => item.id === doctor);
    paciente.forEach(item =>{
        let mensaje =`
        Los pacientes del doctor son: ${item.nombre} ${item.apellido} `
        alert(mensaje);
        console.log(paciente);
    })
   return;
}

/*Ejecucion del programa*/

alert("Bienvenido a nuestro centro médico");
let solicitud = inicio();
switch(solicitud){
    case 1:
        registro();
        break;
    case 2:
        let nombre = prompt("Ingrese el nombre del paciente");
        let apellido = prompt("Ingrese el apellido del paciente");
        let id = parseInt(prompt("Ingrese el número asociado al especialista"));
        atencion(nombre, apellido, id);
        break;
    case 3:
        listaPorEspecialista();
        break;  
    default:
        alert("Por favor, ingrese una opción valida");
        break;          
}
alert("Gracias por su preferencia");


