const btncalcular = document.querySelector('#btncalcular');
const btnlimpiar = document.querySelector('#btnlimpiar');




const calculo = () => {
    const nombre = document.querySelector('#nombre').value;
    const peso = document.querySelector('#peso').value;
    const alturaencm = document.querySelector('#altura').value/100;
    const imc = Math.round(peso /(alturaencm * alturaencm));    
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = 'estás muy delgado';
      } 
    else if (imc < 25) {
        clasificacion = 'estás saludable';
      } 
    else {
        clasificacion = 'tienes sobrepeso';
      }
    alert("Hola "+nombre+" Tienes un IMC de "+ imc +" y "+ clasificacion + ".");

}

const limpiar = () =>{
    const form = document.querySelector('#formulario');
    form.reset(); // con el metodo reset reinicias los inputs de tu formulario 
}

btncalcular.addEventListener('click', calculo);

btnlimpiar.addEventListener('click', limpiar);

