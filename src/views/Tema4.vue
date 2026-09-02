<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planeación del monitoreo de variables productivas

    .row.justify-content-center.align-items-center.mb-3.bg10.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img01.png', alt='')
        .col-lg-7.p-3
          .row.mb-2
            .col-lg-2.mb-3.col-4.col-md-3
              img(src='@/assets/curso/temas/t4/img02.png', alt='')
            .col-lg-12
              p.px-2 La planeación constituye la primera etapa del proceso de monitoreo de las variables productivas y uno de los factores que más influye en la calidad de la información obtenida durante las actividades de campo. Una planificación adecuada permite definir con claridad los objetivos del monitoreo, identificar las variables que serán evaluadas, seleccionar las metodologías y tecnologías más apropiadas, organizar los recursos disponibles y establecer los procedimientos técnicos que garantizarán la obtención de datos confiables y comparables.
    p En el contexto del Manejo Integrado de Plagas (MIP), la planeación del monitoreo facilita la identificación temprana de problemas fitosanitarios, optimiza el uso de los recursos humanos y tecnológicos y contribuye a la implementación de estrategias de manejo fundamentadas en información objetiva. Además, permite programar las actividades de acuerdo con el ciclo fenológico del cultivo, las condiciones ambientales y los requerimientos específicos del sistema productivo.

    separador(data-aos="zoom-in-left")
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1. Metodologías de monitoreo en cultivos

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.col-10.col-md-9.mb-3
        img(src='@/assets/curso/temas/t4/img03.png', alt='')
      .col-lg-7.mb-3
        .row.justify-content-center.p-3.mb-2
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t4/img04.png', alt='')
          .col-lg-10
            p Actualmente, el monitoreo agrícola combina la observación directa realizada por el personal técnico con el uso de tecnologías que facilitan la captura, almacenamiento y procesamiento de la información. Estas herramientas permiten registrar datos relacionados con las condiciones climáticas, edáficas y fitosanitarias, así como localizar con precisión los sitios de evaluación mediante sistemas de posicionamiento global y equipos de geoposicionamiento satelital.
          p La selección de una metodología depende de factores como el objetivo del monitoreo, el tipo de cultivo, la extensión del área, las variables que serán evaluadas y los recursos tecnológicos disponibles.

    .row.justify-content-center.align-items-center.mb-3.bg03.g-0(data-aos="zoom-in-left")
        .col-lg-7.p-4
          p.px-3 La aplicación de metodologías estandarizadas permite:
          ul.lista-ul--color.px-3
            li.d-flex
              i.fas.fa-angle-right2
              | Obtener información confiable y representativa. 
            li.d-flex
              i.fas.fa-angle-right2
              | Reducir errores durante la captura de datos. 
            li.d-flex
              i.fas.fa-angle-right2
              | Estandarizar los procedimientos de monitoreo. 
            li.d-flex
              i.fas.fa-angle-right2
              | Facilitar la comparación de resultados entre diferentes periodos. 
            li.d-flex
              i.fas.fa-angle-right2
              | Optimizar el uso de recursos humanos y tecnológicos. 
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img05.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 13.
      span Principales metodologías de monitoreo

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Metodología
                th.text-izq.bg04 Descripción
                th.text-izq.bg04 Aplicación
            tbody
              tr.bg05
                td #[b Recorrido sistemático]
                td El monitoreo se realiza siguiendo una ruta previamente establecida que cubre de manera uniforme el área del cultivo.
                td Evaluación general del estado del cultivo y distribución de problemas fitosanitarios.

              tr
                td #[b Muestreo aleatorio]
                td Los puntos de evaluación se seleccionan al azar para obtener una muestra representativa.
                td Estudios estadísticos y caracterización general del cultivo.

              tr.bg05
                td #[b Muestreo dirigido]
                td La evaluación se concentra en áreas donde existen antecedentes o indicios de problemas específicos.
                td Seguimiento de focos de plagas, enfermedades o arvenses.

              tr
                td #[b Muestreo estratificado]
                td El lote se divide en sectores homogéneos según características comunes y cada uno se evalúa de forma independiente.
                td Cultivos con alta variabilidad en suelo, topografía o manejo.

              tr.bg05
                td #[b Monitoreo permanente]
                td Las observaciones se realizan periódicamente durante todo el ciclo del cultivo.
                td Programas de seguimiento fitosanitario y agricultura de precisión.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Etapas para aplicar una metodología de monitoreo
    p La implementación de una metodología de monitoreo comprende una serie de etapas secuenciales que permiten planificar, ejecutar y evaluar de manera organizada la recolección de información sobre las variables productivas del cultivo. El cumplimiento de cada una de estas etapas garantiza que los datos obtenidos sean representativos, confiables y útiles para apoyar la toma de decisiones dentro del Manejo Integrado de Plagas (MIP).

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Definir los objetivos del monitoreo")
              .col-md-12.mb-4.mb-md-0
                p Establecer el propósito del monitoreo y determinar qué información se necesita para apoyar la toma de decisiones. Los objetivos pueden estar relacionados con la detección temprana de plagas, evaluación del estado sanitario, seguimiento de variables climáticas o edáficas, productividad y efectividad de las prácticas de manejo.

            .row(titulo="Identificar las variables productivas")
              .col-md-12.mb-4.mb-md-0
                p Seleccionar las variables que proporcionarán la información necesaria para cumplir los objetivos. Estas pueden ser climáticas, edáficas, fisiológicas, fenológicas, fitosanitarias o productivas.

            .row(titulo="Delimitar el área de estudio")
              .col-md-12.mb-4.mb-md-0
                p Determinar el área donde se realizarán las actividades de monitoreo, ya sea en todo el lote o en sectores específicos. La georreferenciación mediante GPS/GNSS facilita la organización del trabajo y permite repetir las evaluaciones en los mismos sitios.

            .row(titulo="Seleccionar la metodología de evaluación")
              .col-md-12.mb-4.mb-md-0
                p Elegir la metodología más adecuada de acuerdo con el cultivo, la distribución de las variables, la precisión requerida y los recursos disponibles. Se pueden emplear recorridos sistemáticos, muestreo aleatorio, dirigido, estratificado o monitoreo permanente.

            .row(titulo="Establecer la frecuencia de monitoreo")
              .col-md-12.mb-4.mb-md-0
                p Definir la periodicidad de las evaluaciones considerando el ciclo del cultivo, el desarrollo de plagas, enfermedades y arvenses, las condiciones climáticas y el nivel de riesgo fitosanitario.

            .row(titulo="Preparar equipos y recursos")
              .col-md-12.mb-4.mb-md-0
                p Verificar la disponibilidad y el adecuado funcionamiento de equipos, herramientas, materiales e insumos. También se deben revisar las baterías, configurar los dispositivos y preparar los formatos de captura de información.

            .row(titulo="Ejecutar las observaciones y mediciones")
              .col-md-12.mb-4.mb-md-0
                p Realizar las actividades de campo aplicando los procedimientos establecidos para observar, medir y registrar las variables seleccionadas. Es fundamental seguir protocolos estandarizados para obtener información precisa, objetiva y comparable.

            .row(titulo="Registrar y analizar la información obtenida")
              .col-md-12.mb-4.mb-md-0
                p Organizar, almacenar, verificar y analizar los datos recopilados. La información puede representarse mediante tablas, gráficos, mapas y bases de datos para identificar tendencias, establecer relaciones entre variables y apoyar la toma de decisiones dentro del Manejo Integrado de Plagas (MIP).
        .col-lg-4.col-10.col-md-7
          img(src='@/assets/curso/temas/t4/img06.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Criterios para seleccionar una metodología

    p La selección de una metodología de monitoreo debe realizarse considerando diferentes criterios técnicos que permitan obtener información representativa, precisa, confiable y útil para la toma de decisiones. Estos criterios deben responder a las características del cultivo, las condiciones del terreno, las variables que se desean evaluar y los recursos disponibles. A continuación, se presentan los principales criterios que deben tenerse en cuenta para seleccionar una metodología de monitoreo adecuada:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-3(data-aos="zoom-in-left")
      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/1.png' alt='')
        h4.text-center Objetivos del monitoreo
        p Determinar qué información se necesita obtener y seleccionar la metodología que permita cumplir con el propósito establecido, ya sea detectar plagas, evaluar variables climáticas, realizar seguimiento fenológico o analizar otras condiciones del cultivo.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/2.png' alt='')
        h4.text-center Tipo de cultivo y estado fenológico
        p Considerar las características morfológicas, la arquitectura de las plantas y la etapa de desarrollo del cultivo, ya que estas condiciones influyen en la forma de realizar las observaciones, en el muestreo y la frecuencia de las evaluaciones.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/3.png' alt='')
        h4.text-center Tamaño del lote
        p La extensión del área determina el número de puntos de evaluación, los recorridos necesarios y la cantidad de recursos humanos y tecnológicos requeridos para realizar un monitoreo adecuado.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/4.png' alt='')
        h4.text-center Variabilidad del terreno
        p Analizar las diferencias en topografía, tipos de suelo, drenaje, manejo agronómico y condiciones ambientales. Cuando existe alta variabilidad, se recomienda dividir el lote en unidades homogéneas para obtener información más representativa.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/5.png' alt='')
        h4.text-center Tipo de variable a evaluar
        p Seleccionar procedimientos y equipos de acuerdo con la naturaleza de la variable. Las variables climáticas, edáficas, fisiológicas, fenológicas y fitosanitarias requieren diferentes métodos de observación y medición.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/6.png' alt='')
        h4.text-center Disponibilidad de recursos
        p Considerar los recursos humanos, tecnológicos y económicos disponibles, procurando que la metodología sea viable y permita obtener información de calidad de manera eficiente.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/7.png' alt='')
        h4.text-center Nivel de precisión requerido
        p Definir el grado de exactitud necesario según los objetivos del monitoreo. Algunos estudios requieren información detallada y georreferenciada, mientras que otros pueden desarrollarse mediante procedimientos más generales.

      .tarjeta.bg01.p-4
        .row.justify-content-center.mb-3
          .col-5.col-lg-5.col-md-3
            img(src='@/assets/curso/temas/t4/8.png' alt='')
        h4.text-center Frecuencia de las evaluaciones
        p Establecer la periodicidad del monitoreo de acuerdo con el comportamiento del cultivo, las condiciones ambientales y el riesgo de aparición de plagas, enfermedades y arvenses. Una frecuencia adecuada facilita la detección oportuna de cambios y tendencias.





































































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
