
from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("form.html")


@app.route("/submit", methods=["POST"])
def submit():
    # Station information
    station_name = request.form.get("station_name")
    engineer_name = request.form.get("engineer_name")
    inspection_date = request.form.get("inspection_date")

    # Canopy information
    canopy_type = request.form.get("tipo")
    columnas = request.form.get("columnas")
    canopy_lights = request.form.get("canopy_lights")
    canopy_lights1 = request.form.get("canopy_lights1")
    pintura = request.form.get("pintura")
    estructura = request.form.get("estructura")
    CCTV = request.form.get("CCTV")
    goteras = request.form.get("goteras")
    comentarios_canopy = request.form.get("comentarios_canopy")

    # Consola de Inventario y Tecnología
    marca = request.form.get("consola_marca")
    referencia = request.form.get("referencia")
    display = request.form.get("disp")
    cont_in = request.form.get("cont_in")
    fuga = request.form.get("fuga")
    sensores = request.form.get("sensores")
    alarma = request.form.get("alarma")
    tec = request.form.get("tec")
    tec1 = request.form.get("tec1")
    comentarios_CIT = request.form.get("comentarios_CIT")


    # Tuberia Combustible 
    tipo_pipe = request.form.get("tipo_pipe")
    tipo_com_pipe = request.form.get("tipo_com_pipe")
    marca_pipe = request.form.get("marca_pipe")
    fecha_pipe = request.form.get("fecha_pipe")
    estado_pipe = request.form.get("estado_pipe")
    geo = request.form.get("geo")
    sumergible = request.form.get("sumergible")
    tipo_sum = request.form.get("tipo_sum")
    hermetricidad = request.form.get("hermetricidad")
    disp_pipe = request.form.get("disp_pipe")
    tipo_disp = request.form.get("tipo.disp")
    hermetricidad1 = request.form.get("hermetricidad1")
    cajas = request.form.get("cajas")
    comentarios_pipe = request.form.get("comentarios_pipe")


    #Dispensadores Combustible 
        # Dispensadores Combustible
    cantidad_dispensadores = request.form.get("cantidad_dispensadores")

    if cantidad_dispensadores == "" or cantidad_dispensadores is None:
        cantidad_dispensadores = 0
    else:
        cantidad_dispensadores = int(cantidad_dispensadores)

    reporte_dispensadores = ""

    for i in range(1, cantidad_dispensadores + 1):
        reporte_dispensadores += f"""
        <h3>Dispensador {i}</h3>

        <p><span class="label">Ubicación:</span> {request.form.get(f"disp{i}_ubicacion")}</p>
        <p><span class="label">Marca:</span> {request.form.get(f"disp{i}_marca")}</p>
        <p><span class="label">Modelo:</span> {request.form.get(f"disp{i}_modelo")}</p>
        <p><span class="label">Productos:</span> {request.form.get(f"disp{i}_productos")}</p>
        <p><span class="label">Tipo Producto x Manguera:</span> {request.form.get(f"disp{i}_tipo_manguera")}</p>
        <p><span class="label">Estado:</span> {request.form.get(f"disp{i}_estado")}</p>
        <p><span class="label">Anclaje:</span> {request.form.get(f"disp{i}_anclaje")}</p>
        <p><span class="label">Faldón:</span> {request.form.get(f"disp{i}_faldon")}</p>
        <p><span class="label">Parada Emergencia:</span> {request.form.get(f"disp{i}_emergencia")}</p>
        <p><span class="label">Conexión a Tierra:</span> {request.form.get(f"disp{i}_tierra")}</p>
        <p><span class="label">Válvula Impacto:</span> {request.form.get(f"disp{i}_impactos")}</p>
        <p><span class="label">BreakAway No. Reconectable:</span> {request.form.get(f"disp{i}_breakaway")}</p>
        <p><span class="label">Impresora Factura:</span> {request.form.get(f"disp{i}_impresora")}</p>
        <p><span class="label">Uniones en Manguera:</span> {request.form.get(f"disp{i}_manguera")}</p>
        <p><span class="label">Pistola combustible con gatillo Seguridad:</span> {request.form.get(f"disp{i}_pis_com")}</p>
        <p><span class="label">Comentarios:</span> {request.form.get(f"disp{i}_comentarios")}</p>

        <hr>
        """

    #Pista y Playa 
    demarcacion = request.form.get("demarcacion")
    postes = request.form.get("postes")
    isla = request.form.get("isla")
    concreto_juntas = request.form.get("concreto_juntas")
    rejilla_perimetral = request.form.get("rejilla_perimetral")
    concreto_juntas1 = request.form.get("concreto_juntas1")
    rejilla_perimetral1 = request.form.get("rejilla_perimetral1")
    cajas_piso = request.form.get("cajas_piso")
    desarendor = request.form.get("desarendor")
    grasas = request.form.get("grasas")
    vertimiento = request.form.get("vertimiento")
    comentarios_piso = request.form.get("comentarios_piso")


    #Tanques 
    #Tanques 
    cantidad_tanques = int(request.form.get("cantidad_tanques", 0))

    reporte_tanques = ""

    for i in range(1, cantidad_tanques + 1):
        reporte_tanques += f"""
        <h3>Tanque {i}</h3>

        <p><span class="label">Capacidad(kGal):</span> {request.form.get(f"tanque{i}_capacidad")}</p>
        <p><span class="label">Tipo:</span> {request.form.get(f"tanque{i}_tipo_tank")}</p>
        <p><span class="label">Marca:</span> {request.form.get(f"tanque{i}_marca_tank")}</p>
        <p><span class="label">Tabla de Aforo Física:</span> {request.form.get(f"tanque{i}_tabla_aforo")}</p>
        <p><span class="label">Fecha Instalación:</span> {request.form.get(f"tanque{i}_fecha_tank")}</p>
        <p><span class="label">Fecha Prueba Hermeticidad:</span> {request.form.get(f"tanque{i}_fecha_tank1")}</p>

        <p><span class="label">Producto y Tamaño Bomba Sumergible:</span></p>
        <ul>
            <li><strong>Motor:</strong> {request.form.get(f"tanque{i}_motor")}</li>
            <li><strong>Extra:</strong> {request.form.get(f"tanque{i}_extra")}</li>
            <li><strong>Diesel:</strong> {request.form.get(f"tanque{i}_diesel")}</li>
            <li><strong>Regular:</strong> {request.form.get(f"tanque{i}_regular")}</li>
        </ul>

        <p><span class="label">Conexión a Tierra Carrotanque:</span> {request.form.get(f"tanque{i}_tierra_carro")}</p>
        <p><span class="label">Conexión a Tierra BS:</span> {request.form.get(f"tanque{i}_tabla_bs")}</p>
        <p><span class="label">Detector de Fuga BS:</span> {request.form.get(f"tanque{i}_detector")}</p>
        <p><span class="label">T y Válvula Sobrellenado:</span> {request.form.get(f"tanque{i}_t_y_v")}</p>
        <p><span class="label">Llenado Remoto:</span> {request.form.get(f"tanque{i}_llenado")}</p>
        <p><span class="label">Cant Pozo Monitor:</span> {request.form.get(f"tanque{i}_cant_pozo")}</p>
        <p><span class="label">Spill Container en Descarga:</span> {request.form.get(f"tanque{i}_spill")}</p>
        <p><span class="label">Tubo de Descargue:</span> {request.form.get(f"tanque{i}_tubo_descargue")}</p>
        <p><span class="label">Tipo Válvula Desfogue:</span> {request.form.get(f"tanque{i}_tipo_valvula")}</p>
        <p><span class="label">Cajas a Prueba de Explosión:</span> {request.form.get(f"tanque{i}_cajas_tank")}</p>
        <p><span class="label">Comentarios:</span> {request.form.get(f"tanque{i}_comentarios")}</p>

        <hr>
        """

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Reporte de Inspección</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                margin: 40px;
                color: #222;
            }}

            h1 {{
                text-align: center;
                border-bottom: 2px solid #333;
                padding-bottom: 10px;
            }}

            h2 {{
                margin-top: 30px;
                background-color: #f0f0f0;
                padding: 10px;
            }}

            p {{
                font-size: 16px;
            }}

            .section {{
                margin-bottom: 25px;
            }}

            .label {{
                font-weight: bold;
            }}

            .footer {{
                margin-top: 40px;
                font-size: 14px;
                color: #555;
            }}
        </style>
    </head>

    <body>
        <h1>Reporte de Inspección de Estación</h1>

        <div class="section">
            <h2>Información General</h2>
            <p><span class="label">Estación:</span> {station_name}</p>
            <p><span class="label">Ingeniero Responsable:</span> {engineer_name}</p>
            <p><span class="label">Fecha de Inspección:</span> {inspection_date}</p>
        </div>

        <div class="section">
            <h2>Inspección de Canopy</h2>
            <p><span class="label">Tipo de Canopy:</span> {canopy_type}</p>
            <p><span class="label">Condición del Canopy:</span> {columnas}</p>
            <p><span class="label">Información de Luces:</span> {canopy_lights}</p>
            <p><span class="label">LED:</span> {canopy_lights1}</p>
            <p><span class="label">Estado de Pintura:</span> {pintura}</p>
            <p><span class="label">Estado Estructural a la Vista:</span> {estructura}</p>
            <p><span class="label">Información CCTV:</span> {CCTV}</p>
            <p><span class="label">Hay Goteras?:</span> {goteras}</p>
            <p><strong>Comentarios:</strong></p><p>{comentarios_canopy}</p>
        </div>

        <div class="section"> 
        <h2>Consola de Inventario y Tecnología</h2>
        <p><span class="label">Marca de Consola:</span> {marca}</p>
        <p><span class="label">Referencia:</span> {referencia}</p>
        <p><span class="label">Display Touch:</span> {display}</p>
        <p><span class="label">Control Inventarios:</span> {cont_in}</p>
        <p><span class="label">Detección de Fuga:</span> {fuga}</p>
        <p><span class="label">Sensores en Sump BS:</span> {sensores}</p>
        <p><span class="label">Alarma de Sobrellenado:</span> {alarma}</p>
        <p><span class="label">Tecnología:</span> {tec}</p>
        <p><span class="label">Marca:</span> {tec1}</p>
        <p><strong>Comentarios:</strong></p><p>{comentarios_CIT}</p>


        </div> 

        <div class="section">
        <h2>Tubería Combustible</h2>
        <p><span class="label">Tipo:</span> {tipo_pipe}</p>
        <p><span class="label">Tipo Tubería Combustible:</span> {tipo_com_pipe}</p>
        <p><span class="label">Marca:</span> {marca_pipe}</p>
        <p><span class="label">Fecha Instalación:</span> {fecha_pipe}</p>
        <p><span class="label">Estado:</span> {estado_pipe}</p>
        <p><span class="label">Geoducto:</span> {geo}</p>
        <p><span class="label">Sump Bomba Sumergible:</span> {sumergible}</p>
        <p><span class="label">Tipo:</span> {tipo_sum}</p>
        <p><span class="label">Hermeticidad:</span> {hermetricidad}</p>
        <p><span class="label">Geoducto:</span> {geo}</p>
        <p><span class="label">Sump debajo Disp:</span> {disp_pipe}</p>
        <p><span class="label">Tipo:</span> {tipo_disp}</p>
        <p><span class="label">Hermeticidad:</span> {hermetricidad1}</p>
        <p><span class="label">Cajas a Prueba de Explosión:</span> {cajas}</p>
        <p><strong>Comentarios:</strong></p><p>{comentarios_pipe}</p>

        <div> 

        
    <div class="section">
            <h2>Dispensadores Combustible</h2>
            <p><span class="label">Cantidad de Dispensadores:</span> {cantidad_dispensadores}</p>

            {reporte_dispensadores}
    </div>

        <div class="section">
        <h2>Piso: Pista y Playa</h2>
        <p><span class="label">Demarcación Área de Islas, Tanques y Pista:</span> {demarcacion}</p>
        <p><span class="label">Postes de Protección Isla a cada lado:</span> {postes}</p>
        <p><span class="label">Existe Isla para Combustible?:</span> {isla}</p>
        <p><span class="label">Pisos área Tanques:</span><p> 
        <ul>
            <li><strong>Concreto y Juntas:</strong> {concreto_juntas}</li>
            <li><strong>Rejilla Perimetral:</strong> {rejilla_perimetral}</li>
        </ul>
        <p><span class="label">Pisos área Islas:</span><p> 
        <ul>
            <li><strong>Concreto y Juntas:</strong> {concreto_juntas1}</li>
            <li><strong>Rejilla Perimetral:</strong> {rejilla_perimetral1}</li>
        </ul>
       <p><span class="label">Trampa de Grasas Combustible:</span><p> 
        <ul>
            <li><strong>Cajas en General Trampa:</strong> {cajas_piso}</li>
            <li><strong>Desarenador:</strong> {desarendor}</li>
        </ul>

        <p><span class="label">Trampa de Grasas Lavadero Vehículos:</span> {grasas}</p>
        <p><span class="label">Vertimiento Aguas:</span> {vertimiento}</p>
        <p><strong>Comentarios:</strong></p><p>{comentarios_piso}</p>

        <div> 

<div class="section">
    <h2>Tanques</h2>
    <p><span class="label">Cantidad de Tanques:</span> {cantidad_tanques}</p>

    {reporte_tanques}
</div>

<br><br> 
<button onclick="window.print()">
    Descargar PDF de Reporte 
</button>
    """

if __name__ == "__main__":
    app.run(debug=True)