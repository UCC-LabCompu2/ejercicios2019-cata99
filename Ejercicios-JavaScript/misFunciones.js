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

function dibujarCircCuadr(){
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ff273c";
    ctx.beginPath();
    ctx.rect(0,0,30,40);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#af3679";
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.width/2,18,0,2*Math.PI);
    ctx.fill();
    ctx.closePath()

}

function dibujarCuadriculado (){
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= "#0000";
    ctx.beginPath();
    for (var i=10;i<canvas.width;i+=10) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }

    for (var i=10;i<canvas.width;i+=10) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    ctx.stroke();
    ctx.closePath();

}

function dibujarImg() {
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");

    var img= new Image();
    img.src= "images/auto.png";

    img.onload=function (){
        ctx.drawImage(img,50,50);
    }


}