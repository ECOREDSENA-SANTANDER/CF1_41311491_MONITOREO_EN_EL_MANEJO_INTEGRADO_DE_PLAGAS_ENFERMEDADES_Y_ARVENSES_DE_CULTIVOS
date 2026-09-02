<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías y recursos para el monitoreo agrícola

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t3/img01.png', alt='')
    p El desarrollo tecnológico ha transformado los procesos de monitoreo agrícola, permitiendo obtener información más precisa, confiable y oportuna para la toma de decisiones en los sistemas de producción. La incorporación de equipos de medición, sensores, dispositivos de georreferenciación y herramientas digitales ha fortalecido las actividades de observación, registro y análisis de las variables productivas, contribuyendo a mejorar la eficiencia de los programas de Manejo Integrado de Plagas (MIP).

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.col-10.col-md-9.mb-3
        img(src='@/assets/curso/temas/t3/img02.png', alt='')
      .col-lg-7.mb-3
        .row.justify-content-center.align-items-center.bg01.p-3.mb-2
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t3/img03.png', alt='')
          .col-lg-10
            p Actualmente, el monitoreo agrícola combina la observación directa realizada por el personal técnico con el uso de tecnologías que facilitan la captura, almacenamiento y procesamiento de la información. Estas herramientas permiten registrar datos relacionados con las condiciones climáticas, edáficas y fitosanitarias, así como localizar con precisión los sitios de evaluación mediante sistemas de posicionamiento global y equipos de geoposicionamiento satelital.
        p La adecuada selección y utilización de estos recursos depende de los objetivos del monitoreo, del tipo de cultivo, de las variables que se desean evaluar y de las condiciones del sistema de producción. Su correcta operación contribuye a mejorar la calidad de la información, optimizar el uso de los recursos disponibles y fortalecer la toma de decisiones técnicas.
      
    separador(data-aos="zoom-in-left")
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1. Equipos para monitoreo y medición

    .bloque-texto-g.bloque-texto-g--inverso.bg09.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los equipos para monitoreo y medición son dispositivos e instrumentos diseñados para obtener información cuantitativa y cualitativa sobre las variables productivas del cultivo. Su utilización permite realizar mediciones objetivas, reducir los errores asociados a la observación visual y mejorar la confiabilidad de la información recopilada durante las actividades de monitoreo.
          br
         
    p Estos equipos pueden emplearse para medir variables climáticas, edáficas, fisiológicas y fitosanitarias, constituyendo una herramienta indispensable para la agricultura moderna y los programas de Manejo Integrado de Plagas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia de los equipos de monitoreo

    .row.justify-content-center.align-items-center.mb-3.bg10.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t3/img05.png', alt='')
        .col-lg-7.p-3
          .row.mb-2
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t3/img06.png', alt='')
            .col-lg-12
              p.px-2 El uso de equipos especializados en el monitoreo agrícola permite obtener mediciones precisas, objetivas y confiables, reduciendo errores y subjetividad en la captura de información. Además, facilita el seguimiento de las condiciones del cultivo, las variables ambientales y la dinámica de plagas, enfermedades y arvenses, optimizando el tiempo y la cobertura del trabajo de campo. Estos dispositivos también mejoran la calidad y trazabilidad de los registros mediante el almacenamiento de datos, imágenes y coordenadas geográficas, proporcionando información verificable que fortalece la toma de decisiones y la evaluación de las estrategias de Manejo Integrado de Plagas, Enfermedades y Arvenses.
          
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 11.
      span Clasificación de los equipos de monitoreo

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Tipo de equipo
                th.text-izq.bg04 Variables que mide
                th.text-izq.bg04 Ejemplos
            tbody
              tr.bg05
                td #[b Equipos meteorológicos]
                td Temperatura, humedad, precipitación, viento, radiación solar.
                td Estaciones meteorológicas, termómetros, higrómetros, pluviómetros, anemómetros.

              tr
                td #[b Equipos edáficos]
                td Humedad, temperatura, pH, conductividad eléctrica del suelo.
                td Medidores de humedad, pH-metros, conductímetros, sondas multiparamétricas.

              tr.bg05
                td #[b Equipos fitosanitarios]
                td Presencia y abundancia de plagas y enfermedades.
                td Lupa de campo, trampas cromáticas, trampas de feromonas, microscopios portátiles.

              tr
                td #[b Equipos de georreferenciación]
                td Coordenadas geográficas y ubicación espacial.
                td Receptores GPS/GNSS, equipos de geoposicionamiento satelital.

              tr.bg05
                td #[b Equipos digitales]
                td Registro y procesamiento de información.
                td Tabletas, teléfonos inteligentes, colectores de datos y aplicaciones móviles.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Características de los equipos de monitoreo

    p Los equipos utilizados en monitoreo agrícola deben cumplir ciertas características para garantizar mediciones confiables.

    SlyderF(columnas="col-lg-6 col-xl-4").mb-3(data-aos="zoom-in-left")
      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t3/1.png' alt='')
        h4.text-center Precisión
        p Capacidad para generar mediciones cercanas al valor real.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t3/2.png' alt='')
        h4.text-center Exactitud
        p Grado de coincidencia entre la medición obtenida y el valor verdadero.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t3/3.png' alt='')
        h4.text-center Sensibilidad
        p Capacidad para detectar pequeñas variaciones en la variable medida.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-4.col-md-3
            img(src='@/assets/curso/temas/t3/4.png' alt='')
        h4.text-center Portabilidad
        p Facilidad de transporte y utilización en campo.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-6.col-md-3
            img(src='@/assets/curso/temas/t3/5.png' alt='')
        h4.text-center Resistencia
        p Capacidad para operar en diferentes condiciones ambientales.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-4.col-md-3
            img(src='@/assets/curso/temas/t3/6.png' alt='')
        h4.text-center Facilidad de uso
        p Operación sencilla mediante procedimientos claramente definidos.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t3/7.png' alt='')
        h4.text-center Compatibilidad
        p Posibilidad de integrar la información con otros dispositivos y programas informáticos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Recomendaciones para el uso de equipos          

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5.col-md-9
        img(src="@/assets/curso/temas/t3/img07.png")
      .col-lg-7.p-3
        .row.mb-2
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t3/img03.png', alt='')
          .col-lg-12
            p.px-2 Para garantizar mediciones confiables en el monitoreo agrícola, es necesario verificar el estado de los equipos antes, durante y después de cada jornada. Se deben revisar baterías, sensores, componentes y realizar la limpieza y calibración según las indicaciones del fabricante. Además, los equipos deben protegerse durante su transporte y almacenamiento, evitando golpes, humedad y temperaturas extremas. Finalmente, es importante registrar cualquier falla o anomalía para realizar oportunamente el mantenimiento o reparación correspondiente y asegurar la calidad de la información obtenida.


    separador(data-aos="zoom-in-left")
    #t_3_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.2. Recursos, herramientas e insumos utilizados en el monitoreo
    
    p Los recursos para el monitoreo agrícola comprenden el conjunto de herramientas, materiales, equipos auxiliares, insumos y elementos de apoyo que facilitan la ejecución de las actividades de campo y garantizan la correcta recolección, organización y conservación de la información.
    p La adecuada preparación de estos recursos contribuye a optimizar el trabajo, mejorar la calidad de los registros y reducir errores durante el proceso de monitoreo.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 12.
      span Clasificación de los recursos

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Recurso
                th.text-izq.bg04 Ejemplos
                th.text-izq.bg04 Función principal
            tbody
              tr.bg05
                td #[b Herramientas de inspección]
                td Lupa, linterna, cinta métrica, brújula.
                td Facilitan la observación y medición en campo.

              tr
                td #[b Materiales de registro]
                td Formatos, libretas, planillas, tabletas electrónicas.
                td Registrar la información obtenida durante el monitoreo.

              tr.bg05
                td #[b Elementos de marcación]
                td Etiquetas, marcadores, banderines, pintura.
                td Identificar puntos de evaluación y muestras.

              tr
                td #[b Dispositivos electrónicos]
                td Teléfono inteligente, tableta, computador portátil.
                td Capturar, almacenar y transferir información digital.

              tr.bg05
                td #[b Insumos de apoyo]
                td Bolsas, recipientes, baterías, cargadores, memorias USB.
                td Facilitar el almacenamiento y transporte de materiales e información.

    .tarjeta.fondo02.p-4.p-md-3.p-lg-5.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Criterios para la selección de recursos
            p La selección de herramientas, equipos e insumos para el monitoreo agrícola debe realizarse considerando criterios técnicos que garanticen la eficiencia del proceso y la calidad de la información. Es importante tener en cuenta el tipo de cultivo, los objetivos del monitoreo y las variables que serán evaluadas, como condiciones climáticas, edáficas, fenológicas, fisiológicas y fitosanitarias.
            p También deben considerarse las condiciones ambientales, la duración del trabajo de campo, la disponibilidad tecnológica, los costos de adquisición y mantenimiento, y la compatibilidad entre los diferentes equipos. Estos criterios permiten seleccionar recursos adecuados, optimizar las actividades de campo y obtener información confiable para fortalecer la toma de decisiones.
          .col-lg-6.col-md-8
            figure
              img(src='@/assets/curso/temas/t3/img08.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Preparación de los recursos
            p Antes de iniciar el monitoreo agrícola es necesario realizar una adecuada preparación de los materiales, herramientas y equipos para evitar interrupciones y reducir errores durante la recolección de información. Para ello, se debe revisar el estado físico y funcionamiento de los equipos, sensores, cables, conectores y demás accesorios, verificando que estén limpios, completos y en buenas condiciones.
            p También es importante comprobar la carga de las baterías, disponibilidad de cargadores y elementos de respaldo, así como la memoria y configuración de los dispositivos electrónicos, aplicaciones o software utilizados. De igual manera, deben prepararse los formatos físicos o digitales para registrar las variables productivas, climáticas, edáficas y fitosanitarias.
          .col-lg-6.col-md-8
            figure
              img(src='@/assets/curso/temas/t3/img09.png', alt='')

    p Finalmente, los recursos deben organizarse de acuerdo con la secuencia de trabajo, recorrido y puntos de evaluación, facilitando su acceso y transporte. Una preparación adecuada permite optimizar el tiempo, prevenir imprevistos y garantizar la calidad y continuidad del monitoreo agrícola.

    separador(data-aos="zoom-in-left")
    #t_3_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.3. Sistemas de posicionamiento global (GPS/GNSS)


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-8.col-md-6
          img(src="@/assets/curso/temas/t3/img10.png")
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-3.bg08.g-0
            .col-lg-5.p-0.d-none.d-lg-block
              img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t3/img11.svg', alt='')
            .col-lg-7.p-3
              p.px-3 Los sistemas de posicionamiento global (GPS/GNSS) son tecnologías de navegación satelital que permiten determinar la ubicación geográfica de un punto sobre la superficie terrestre mediante la recepción de señales emitidas por constelaciones de satélites.
          p El término GNSS (Global Navigation Satellite System) hace referencia al conjunto de sistemas de navegación satelital disponibles a nivel mundial, mientras que GPS (Global Positioning System) corresponde al sistema desarrollado por los Estados Unidos y constituye uno de los sistemas GNSS más utilizados.
    p En el monitoreo agrícola, estos sistemas permiten georreferenciar los puntos de evaluación, registrar recorridos de inspección y elaborar mapas de distribución de variables productivas.

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Componentes y funcionamiento del sistema GPS/GNSS")
              .col-md-12.mb-4.mb-md-0
                p Los sistemas GPS/GNSS están conformados por tres segmentos principales: el segmento espacial, integrado por los satélites que transmiten señales de posicionamiento; el segmento de control, compuesto por estaciones terrestres que supervisan y actualizan la información de los satélites; y el segmento de usuario, constituido por los receptores que reciben las señales y calculan la posición. Su funcionamiento se basa en la recepción de señales de varios satélites y en el cálculo de las distancias mediante el tiempo que tardan en llegar al receptor. A través de la trilateración, el sistema determina las coordenadas de latitud, longitud y altitud. La precisión depende del número de satélites disponibles, la calidad del receptor, las condiciones ambientales y la presencia de obstáculos. El uso de diferentes constelaciones, como GPS, GLONASS, Galileo y BeiDou, permite mejorar la disponibilidad y estabilidad del posicionamiento.

            .row(titulo="Aplicaciones del GPS/GNSS en el monitoreo agrícola")
              .col-md-12.mb-4.mb-md-0
                p En el monitoreo agrícola, los sistemas GPS/GNSS permiten delimitar lotes, ubicar puntos de monitoreo, elaborar mapas y georreferenciar focos de plagas, enfermedades y arvenses. También facilitan el seguimiento de recorridos de inspección y permiten regresar a los mismos puntos para realizar evaluaciones periódicas. Su integración con Sistemas de Información Geográfica (SIG), drones, sensores e imágenes satelitales favorece el análisis espacial y la agricultura de precisión. De esta manera, la información georreferenciada contribuye a planificar y aplicar estrategias de Manejo Integrado de Plagas (MIP) de manera más localizada y eficiente.

            .row(titulo="Ventajas del GPS/GNSS")
              .col-md-12.mb-4.mb-md-0
                p Entre las principales ventajas del GPS/GNSS se encuentran la precisión, rapidez y facilidad para registrar información geográfica durante las actividades de campo. Estos sistemas permiten almacenar coordenadas, fechas, horas y otros datos, mejorando la organización y trazabilidad de los registros. Además, facilitan la integración con diferentes tecnologías y herramientas digitales, así como la repetición de monitoreos en los mismos puntos geográficos. Esto permite comparar información a lo largo del tiempo, realizar seguimiento de plagas, enfermedades y arvenses, optimizar los recursos y fortalecer la toma de decisiones mediante información técnica y espacial confiable.
        .col-lg-4.col-10.col-md-7
          img(src='@/assets/curso/temas/t3/img12.png', alt='')

    separador(data-aos="zoom-in-left")
    #t_3_4.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.4. Equipos de geoposicionamiento satelital

    p Los equipos de geoposicionamiento satelital son los dispositivos físicos que utilizan las señales emitidas por los sistemas GPS/GNSS para determinar con precisión la ubicación geográfica de un punto sobre la superficie terrestre. Estos equipos constituyen la herramienta de campo empleada por técnicos y profesionales para capturar coordenadas, registrar recorridos y georreferenciar la información obtenida durante el monitoreo agrícola. A continuación, se presentan algunos dispositivos: 

    TabsC.color-primario(data-aos="zoom-in-left")
      .py-3.py-md-4(titulo="GPS portátil (de mano)")
        .row.justify-content-center
          .col-lg-5.col-9.mb-3
            figure
              img(src='@/assets/curso/temas/t3/01.png')
          .col-lg-6.mb-4.mb-md-0
            p #[b Características:] ligero, resistente y de fácil transporte. 
            p #[b Aplicaciones:] monitoreo de cultivos, inventarios y recorridos de campo.
      .py-3.py-md-4(titulo="Receptor GNSS profesional")
        .row.justify-content-center
          .col-lg-5.col-9.mb-3
            figure
              img(src='@/assets/curso/temas/t3/02.png')
          .col-lg-6.mb-4.mb-md-0
            p #[b Características:] alta precisión y admite correcciones diferenciales.
            p #[b Aplicaciones:] agricultura de precisión, levantamientos topográficos y georreferenciación detallada.

      .py-3.py-md-4(titulo="Teléfono inteligente con GNSS")
        .row.justify-content-center
          .col-lg-5.col-9.mb-3
            figure
              img(src='@/assets/curso/temas/t3/03.png')
          .col-lg-6.mb-4.mb-md-0
            p #[b Características:] integra receptor satelital y aplicaciones móviles.
            p #[b Aplicaciones:] monitoreos rápidos y captura de información geográfica básica.

      .py-3.py-md-4(titulo="Tableta con receptor GNSS")
        .row.justify-content-center
          .col-lg-5.col-9.mb-3
            figure
              img(src='@/assets/curso/temas/t3/04.png')
          .col-lg-6.mb-4.mb-md-0
            p #[b Características:] pantalla de mayor tamaño y capacidad para aplicaciones SIG.
            p #[b Aplicaciones:] captura y visualización de datos georreferenciados en campo.
    .bloque-texto-g.bloque-texto-g--inverso.bg09.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/IMG13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para garantizar la precisión de la información georreferenciada y el adecuado funcionamiento de los equipos de geoposicionamiento satelital, es necesario aplicar una serie de recomendaciones técnicas antes, durante y después de las actividades de monitoreo. En primer lugar, se debe verificar que exista una adecuada recepción de las señales satelitales antes de registrar las coordenadas, permitiendo que el receptor establezca comunicación con un número suficiente de satélites y alcance una posición estable y confiable.
          br
         
    .row.justify-content-center.align-items-center.mb-3.bg10.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t3/img14.png', alt='')
        .col-lg-7.p-3
          .row.mb-2
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t3/img15.png', alt='')
            .col-lg-12
              p.px-2 Durante las actividades de campo, es importante evitar, en la medida de lo posible, obstáculos que puedan interferir con la recepción de la señal, como edificaciones, estructuras metálicas, montañas, árboles de gran altura o vegetación densa. Estos elementos pueden generar interferencias o disminuir la calidad de la señal, afectando la precisión de las coordenadas obtenidas. Por ello, se recomienda realizar las mediciones en espacios abiertos y con buena visibilidad del cielo.
              p.px-2.mb-0 Asimismo, antes de iniciar el monitoreo, se debe configurar correctamente el sistema de coordenadas, el datum geodésico y el formato de ubicación establecidos para el proyecto. Esta configuración permite garantizar la compatibilidad de los datos con los Sistemas de Información Geográfica (SIG), las bases de datos y demás herramientas utilizadas para el procesamiento, análisis y representación de la información espacial.

    p Otra práctica fundamental es realizar copias de seguridad periódicas de la información almacenada en el equipo. Esto permite prevenir la pérdida de datos ocasionada por fallas técnicas, daños físicos, errores de operación o inconvenientes durante la transferencia de archivos. Los respaldos pueden realizarse en computadores, dispositivos de almacenamiento externo o plataformas de almacenamiento en la nube, siempre que estas se encuentren disponibles y sean adecuadas para el manejo de la información.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p.bg01.p-4 De igual manera, se recomienda mantener actualizado el #[em software] o #[em firmware] del equipo, de acuerdo con las indicaciones del fabricante y siempre que existan versiones disponibles. Estas actualizaciones pueden incorporar mejoras en el rendimiento, ampliar la compatibilidad con nuevas tecnologías, corregir errores de funcionamiento y optimizar diferentes procesos relacionados con el posicionamiento y la gestión de datos.
        p Finalmente, es indispensable realizar un mantenimiento preventivo periódico conforme a las recomendaciones del fabricante. Este debe incluir la limpieza del equipo, la inspección de sus componentes, la verificación del estado de la batería, la revisión de conectores y accesorios y el almacenamiento adecuado cuando el dispositivo no se encuentre en uso. Estas acciones contribuyen a prolongar la vida útil de los equipos, conservar la calidad de las mediciones y garantizar la confiabilidad de la información georreferenciada obtenida durante las actividades de monitoreo agrícola.
      .col-lg-4.col-9.col-md-7
        img(src='@/assets/curso/temas/t3/img16.png', alt='')
















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
