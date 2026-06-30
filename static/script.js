console.log("JavaScript connected!"); 

document.getElementById("canopyQuestions").innerHTML = `
           <h5>1. Tipo de Canopy</h5> 
        <select name="tipo">
            <option value=""></option>
            <option value="Sencillo">Sencillo</option>
            <option value="Doble">Doble</option>
        </select>
        <br><br> 

        <h5>2. # Coloumnas por Isla</h5>
        <textarea name="columnas"></textarea>
        <br><br> 

        <h5>3. Iluminacion</h5>
         <select name="canopy_lights">
            <option value=""></option>
            <option value="18k">18k</option>
            <option value="21k">21k</option>
            <option value="Otro">Otro: especificar en comentario</option>
        </select>
        <br><br> 

        <h5>4. LED</h5>
        <h6>Marca:</h6>
        <textarea name="canopy_lights1"></textarea>
        <br> 
        <h6>Watts:</h6>
        <textarea name="canopy_lights1"></textarea>
        <br><br> 

        <h5>5. Estado Pintura</h5>
          <select name="pintura">
            <option value=""></option>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
        </select>
        <br><br> 

        <h5>6. Estado Estructural a la vista</h5>
        <select name="estructura">
            <option value=""></option>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
        </select>
        <br><br> 

        <h5>7. CCTV</h5>
        <select name="CCTV">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 

        <h5>8. Goteras</h5>
        <select name="goteras">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 

        <h5>Comentarios:</h5>

        <textarea
            name="comentarios_canopy"
            rows="4"
            placeholder="Escriba observaciones adicionales...">
        </textarea>

<br><br>
`;

document.getElementById("CITQuestions").innerHTML = `
    <h5>1. Consola Marca</h5>
        <textarea name="consola_marca"></textarea>
        <br><br> 

    <h5>2. Referencia</h5>
        <textarea name="referencia"></textarea>
        <br><br> 
    
    <h5>3. Display Touch</h5>
        <select name="disp">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 
    
    <h5>4. Control Inventarios</h5>
        <select name="cont_in">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 
    
     <h5>5. Detección de Fuga</h5>
        <select name="fuga">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 
    
     <h5>6. Sensores en Sump BS</h5>
        <select name="sensores">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 

        <h5>6. Sensores en Sump Dispensador</h5>
        <select name="sensores_dis">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br> 

     <h5>7. Alarma de sobrellenado</h5>
        <select name="alarma">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>
        
     <h5>8. Tecnología</h5>
        <select name="tec">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br> 
        <h6>Marca</h6>
        <textarea name="tec1"></textarea>
        <br> 
        <h6>Impresión Factura</h6>
        <textarea name="tec"></textarea>
        <br> 
        <h6>Control Flotas</h6>
        <textarea name="tec"></textarea>
        <br> 
        <h6>Fidelización</h6>
        <textarea name="tec"></textarea>
        <br> 
        <br><br> 

        <textarea
            name="comentarios_CIT"
            rows="4"
            placeholder="Escriba observaciones adicionales...">
        </textarea>

<br><br>

`;
// PIPES 
document.getElementById("pipeQuestions").innerHTML = `
<h5>Cantidad de Tuberías:</h5>
<input type="number" name="cantidad_tuberias" id="cantidad_tuberias" min="1" max="20">

<br><br>

<button type="button" id="crearTuberias">Crear Tuberías</button>

<br><br>

<div id="tuberiasContainer"></div>
`;

function crearTuberia(numero) {
    return `
    <div class="pipe-card">
        <h3>Tubería ${numero}</h3>

        <h5>1. Tipo</h5>
        <select name="tuberia${numero}_tipo_pipe">
            <option value=""></option>
            <option value="Succión">Succión</option>
            <option value="Presión">Presión</option>
        </select>
        <br><br>

        <h5>2. Tipo Tubería Combustible</h5>
        <select name="tuberia${numero}_tipo_com_pipe">
            <option value=""></option>
            <option value="Metálico">Metálico</option>
            <option value="Doble Pared">Doble Pared</option>
            <option value="Otro">Otro</option>
        </select>
        <br><br>

        <h5>3. Marca</h5>
        <textarea name="tuberia${numero}_marca_pipe"></textarea>
        <br><br>

        <h5>4. Fecha de Instalación: DD/MM/AA</h5>
        <textarea name="tuberia${numero}_fecha_pipe"></textarea>
        <br><br>

        <h5>5. Estado</h5>
        <select name="tuberia${numero}_estado_pipe">
            <option value=""></option>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
        </select>
        <br><br>

        <h5>6. Geoducto</h5>
        <select name="tuberia${numero}_geo">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

        <h5>7. Sump Bomba Sumergible</h5>
        <select name="tuberia${numero}_sumergible">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

        <h5>8. Tipo Bomba Sumergible</h5>
        <select name="tuberia${numero}_tipo_sum">
            <option value=""></option>
            <option value="FV">FV</option>
            <option value="P">P</option>
        </select>
        <br><br>

        <h5>9. Hermeticidad</h5>
        <select name="tuberia${numero}_hermeticidad">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

        <h5>10. Sump Debajo Disp</h5>
        <select name="tuberia${numero}_disp_pipe">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

        <h5>11. Tipo Disp</h5>
        <select name="tuberia${numero}_tipo_disp">
            <option value=""></option>
            <option value="FV">FV</option>
            <option value="P">P</option>
        </select>
        <br><br>

        <h5>12. Hermeticidad</h5>
        <select name="tuberia${numero}_hermeticidad1">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

        <h5>13. Cajas a Prueba de Explosión</h5>
        <select name="tuberia${numero}_cajas">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

        <h5>Comentarios:</h5>
        <textarea name="tuberia${numero}_comentarios" rows="4" placeholder="Escriba observaciones adicionales..."></textarea>
        <br><br>
    </div>
    <hr>
    `;
}

document.getElementById("crearTuberias").addEventListener("click", function() {
    const cantidad = document.getElementById("cantidad_tuberias").value;
    const container = document.getElementById("tuberiasContainer");

    container.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {
        container.innerHTML += crearTuberia(i);
    }
});

//FINISH PIPES 


// faltan preguntas 3-5

document.getElementById("disQuestions").innerHTML = `
<h5>Cantidad de Dispensadores:</h5>

<input type="number" name="cantidad_dispensadores" id="cantidad_dispensadores" min="1" max="20">

<br><br>

<button type="button" id="crearDispensadores">
Crear Dispensadores
</button>

<br><br>

<div id="dispensadoresContainer"></div>

`;

function crearDispensador(numero){

return `

<div class="disp-card">

<h3>Dispensador ${numero}</h3>

<h5>Ubicación en Isla:</h5>
<textarea name="disp${numero}_ubicacion"></textarea>

<br><br>

<h5>Marca:</h5>
<textarea name="disp${numero}_marca"></textarea>

<br><br>

<h5>Modelo:</h5>
<textarea name="disp${numero}_modelo"></textarea>

<br><br>

<h5>Productos</h5>

<label><input type="checkbox" name="disp${numero}_productos" value="M"> M</label><br>

<label><input type="checkbox" name="disp${numero}_productos" value="D"> D</label><br>

<label><input type="checkbox" name="disp${numero}_productos" value="E"> E</label><br>

<label><input type="checkbox" name="disp${numero}_productos" value="R"> R</label>

<br><br>

<h5>Tipo Producto x Manguera</h5>

<select name="disp${numero}_tipo_manguera">
    <option value=""></option>
    <option value="1x1">1x1</option>
    <option value="1x2">1x2</option>
    <option value="2x2">2x2</option>
    <option value="2x4">2x4</option>
    <option value="3x6">3x6</option>
    <option value="Otro">Otro</option>
</select>

<br><br>

<h5>Estado Funcionamiento</h5>

<select name="disp${numero}_estado">
<option value=""></option>
<option value="Bueno">Bueno</option>
<option value="Regular">Regular</option>
<option value="Malo">Malo</option>
</select>

<br><br>

<h5>Anclaje</h5>

<select name="disp${numero}_anclaje">
<option value=""></option>
<option value="Si">Si</option>
<option value="No">No</option>
</select>

<br><br>

<h5>Faldón para Instalar Imagen</h5>

<select name="disp${numero}_faldon">
<option value=""></option>
<option value="Bueno">Bueno</option>
<option value="Regular">Regular</option>
<option value="Malo">Malo</option>
</select>

<br><br>

<h5>Parada Emergencia</h5>

<select name="disp${numero}_emergencia">
<option value=""></option>
<option value="Pista">Pista</option>
<option value="Oficina">Oficina</option>
<option value="Tablero">Tablero</option>
</select>

<br><br>

<h5>Conexión a Tierra</h5>

<select name="disp${numero}_tierra">
<option value=""></option>
<option value="Si">Si</option>
<option value="No">No</option>
</select>

<br><br>

<h5>Válvula Impacto</h5>

<select name="disp${numero}_impactos">
<option value=""></option>
<option value="Si">Si</option>
<option value="No">No</option>
</select>

<br><br>

<h5>BreakAway</h5>

<select name="disp${numero}_breakaway">
<option value=""></option>
<option value="100%">100%</option>
<option value="50%">50%</option>
<option value="0%">0%</option>
</select>

<br><br>

<h5>Impresora Factura</h5>

<select name="disp${numero}_impresora">
<option value=""></option>
<option value="Si">Si</option>
<option value="No">No</option>
</select>

<br><br>

<h5>Uniones en Mangueras</h5>

<select name="disp${numero}_manguera">
<option value=""></option>
<option value="Si">Si</option>
<option value="No">No</option>
</select>

<br><br>

<h5>Pistola con Gatillo Seguridad</h5>

<select name="disp${numero}_pis_com">
<option value=""></option>
<option value="Si">Si</option>
<option value="No">No</option>
</select>
<br><br> 

<h5>Comentarios:</h5>

<textarea
name="disp${numero}_comentarios"
rows="4"
placeholder="Escriba observaciones adicionales...">
</textarea>

<br><br>

<hr>

</div>

`;
}

document.getElementById("crearDispensadores").addEventListener("click",function(){

const cantidad=document.getElementById("cantidad_dispensadores").value;

const container=document.getElementById("dispensadoresContainer");

container.innerHTML="";

for(let i=1;i<=cantidad;i++){

container.innerHTML+=crearDispensador(i);

}

}); 

document.getElementById("pisoQuestions").innerHTML = `

 <h5>1. Demarcación de Islas, Tanques, Pista:</h5>
        <select name="demarcacion">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

    <h5>2. Postes de Protección Isla a cada lado:</h5>
        <select name="postes">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

    <h5>3. Existe Isla para Combustible?:</h5>
        <select name="isla">
            <option value=""></option>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select>
        <br><br>

<h5>4. Pisos Área Tanques</h5>

<label>Concreto y Juntas:</label>
<select name="concreto_juntas">
    <option value=""></option>
    <option value="Bueno">Bueno</option>
    <option value="Regular">Regular</option>
    <option value="Malo">Malo</option>
</select>

<br><br>

<label>Rejilla Perimetral:</label>
<select name="rejilla_perimetral">
    <option value=""></option>
    <option value="Bueno">Bueno</option>
    <option value="Regular">Regular</option>
    <option value="Malo">Malo</option>
</select>
<br><br> 

<h5>5. Piso área Islas</h5>

<label>Concreto y Juntas:</label>
<select name="concreto_juntas1">
    <option value=""></option>
    <option value="Bueno">Bueno</option>
    <option value="Regular">Regular</option>
    <option value="Malo">Malo</option>
</select>

<br><br>

<label>Rejilla Perimetral:</label>
<select name="rejilla_perimetral1">
    <option value=""></option>
    <option value="Bueno">Bueno</option>
    <option value="Regular">Regular</option>
    <option value="Malo">Malo</option>
</select>
<br><br> 

<h5>6. Trampa de Grasas Combustible</h5>

<label>Cajas en General trampa:</label>
<select name="cajas_piso">
    <option value=""></option>
    <option value="Bueno">Bueno</option>
    <option value="Regular">Regular</option>
    <option value="Malo">Malo</option>
</select>

<br><br>

<label>Desarendor:</label>
<select name="desarendor">
    <option value=""></option>
    <option value="No">No</option>
    <option value="Si">Si</option>
</select>
<br><br> 

<h5>7. Trampa de Grasas Lavadero Vehículos:</h5>
<select name="grasas">
    <option value=""></option>
    <option value="Bueno">Bueno</option>
    <option value="Regular">Regular</option>
    <option value="Malo">Malo</option>
</select>
<br><br>

<h5>8. Vertimiento Aguas:</h5>
<select name="vertimiento">
    <option value=""></option>
    <option value="Lluvias">Lluvias</option>
    <option value="Negras">Negras</option>
    <option value="Mixta">Mixta</option>
</select>

<br><br>

<h5>Comentarios:</h5>

<textarea
name="comentarios_piso"
rows="4"
placeholder="Escriba observaciones adicionales...">
</textarea>

<br><br>

`;

document.getElementById("tankQuestions").innerHTML = `
<h5>Cantidad de Tanques:</h5>
<input type="number" name="cantidad_tanques" id="cantidad_tanques" min="1" max="10">

<br><br>

<button type="button" id="crearTanques">Crear Tanques</button>

<br><br>

<div id="tanquesContainer"></div>
`;

function crearTanque(numero) {
    return `
    <div class="tank-card">
        <h4>Tanque ${numero}</h4>

        <h5>Capacidad(kGal):</h5>
        <textarea name="tanque${numero}_capacidad"></textarea>
        <br><br>

        <h5>Tipo:</h5>
        <select name="tanque${numero}_tipo_tank">
            <option value=""></option>
            <option value="Metálico">Metálico</option>
            <option value="FVDP">FVDP</option>
            <option value="Otro">Otro</option>
        </select>
        <br><br>

        <h5>Marca:</h5>
        <textarea name="tanque${numero}_marca_tank"></textarea>
        <br><br>

        <h5>Tabla de Aforo Física:</h5>
        <select name="tanque${numero}_tabla_aforo">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Fecha de Instalación:</h5>
        <textarea name="tanque${numero}_fecha_tank"></textarea>
        <br><br>

        <h5>Fecha de Prueba Hermeticidad:</h5>
        <textarea name="tanque${numero}_fecha_tank1"></textarea>
        <br><br>

        <h5>Producto y Tamaño Bomba Sumergible:</h5>

        <label>Motor:</label>
        <textarea name="tanque${numero}_motor"></textarea>
        <br><br>

        <label>Extra:</label>
        <textarea name="tanque${numero}_extra"></textarea>
        <br><br>

        <label>Diesel:</label>
        <textarea name="tanque${numero}_diesel"></textarea>
        <br><br>

        <label>Regular:</label>
        <textarea name="tanque${numero}_regular"></textarea>
        <br><br>

        <h5>Conexión a Tierra Carrotanque:</h5>
        <select name="tanque${numero}_tierra_carro">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Conexión a Tierra BS:</h5>
        <select name="tanque${numero}_tabla_bs">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Detector de Fuga en BS:</h5>
        <select name="tanque${numero}_detector">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>T y Válvula Sobrellenado:</h5>
        <select name="tanque${numero}_t_y_v">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Llenado Remoto:</h5>
        <select name="tanque${numero}_llenado">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Cant Pozo Monitor:</h5>
        <textarea name="tanque${numero}_cant_pozo"></textarea>
        <br><br>

        <h5>Spill Container en Descarga:</h5>
        <select name="tanque${numero}_spill">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Tubo de Descargue:</h5>
        <select name="tanque${numero}_tubo_descargue">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Tipo Válvula Desfogue:</h5>
        <select name="tanque${numero}_tipo_valvula">
            <option value=""></option>
            <option value="PV">PV</option>
            <option value="CG">CG</option>
            <option value="V">V</option>
        </select>
        <br><br>

        <h5>Cajas a Prueba de Explosión:</h5>
        <select name="tanque${numero}_cajas_tank">
            <option value=""></option>
            <option value="No">No</option>
            <option value="Si">Si</option>
        </select>
        <br><br>

        <h5>Comentarios:</h5>

<h5>Comentarios:</h5>

<textarea
name="tanque${numero}_comentarios"
rows="4"
placeholder="Escriba observaciones adicionales...">
</textarea>

<br><br>
    </div>
    <hr>
    `;
}

document.getElementById("crearTanques").addEventListener("click", function() {
    const cantidad = document.getElementById("cantidad_tanques").value;
    const container = document.getElementById("tanquesContainer");

    container.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {
        container.innerHTML += crearTanque(i);
    }
});
   

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(button) {
    button.addEventListener("click", function() {
        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});