/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function saludar(){
    alert("hola mmundo!");
}

function convertir(id_elem, valor){
    if(isNaN(valor)){
        alert("El valor de "+id_elem+" debe ser numerico.");
        document.getElementById(id_elem).value= "";
        }
    if(!isNaN(valor)) {
        if (id_elem == 'metro') {
            document.getElementById("pulgada").value = valor* 39.3701;
            document.getElementById("pie").value = valor * 3.28084;
            document.getElementById("yarda").value = valor * 1.09361;
        }
        if(id_elem=='pulgada'){
            document.getElementById("metro").value=valor*0.0254;
            document.getElementById("pie").value=valor*0.08333;
            document.getElementById("yarda").value=valor*0.027778;
        }
        if(id_elem=='pie'){
            document.getElementById("metro").value=valor*0.3048;
            document.getElementById("pulgada").value=valor*12;
            document.getElementById("yarda").value=valor*0.3333333;
        }
        if(id_elem=='yarda'){
            document.getElementById("metro").value=valor*0.9144;
            document.getElementById("pulgada").value=valor*36;
            document.getElementById("pie").value=valor*3;
        }
    }
}

function suma(){
   document.opeMat.sum_total.value = Number (document.opeMat.sum_num1.value) + Number(document.opeMat.sum_num2.value);
}

function resta() {
    document.opeMat.res_total.value= Number(document.opeMat.res_num1.value) - Number(document.opeMat.res_num2.value);
}

function multiplicacion() {
    document.opeMat.mul_total.value= Number( document.opeMat.mul_num1.value)* Number(document.opeMat.mul_num2.value);

}

function division() {
    document.opeMat.div_total.value= Number(document.opeMat.div_num1.value)/Number(document.opeMat.div_num2.value);
}

function gradosRadianes(id_elem,valor_elem) {
    document.getElementById("grados").value= valor_elem*Math.PI /180;
}

function radianesGrados(id_elem,valor_elem){
    document.getElementById("radianes").value= valor_elem* 180/ Math.PI;
}

function mo(id_elem) {
    if(id_elem=="ocultarDiv") {
        document.getElementById("unDiv").style.display = 'none';
    }
    if(id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display='block';
    }
}