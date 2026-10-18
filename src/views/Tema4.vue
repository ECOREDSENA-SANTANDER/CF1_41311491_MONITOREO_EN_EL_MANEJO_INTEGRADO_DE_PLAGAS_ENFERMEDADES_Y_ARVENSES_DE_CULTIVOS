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
            .col-lg-2.mb-3.col-4.col-md-2
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
          .col-lg-2.mb-3.col-4.col-md-2
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
            li.d-flex
              i.fas.fa-angle-right2
              | Mejorar la calidad de los registros y de la información generada. 
            li.d-flex
              i.fas.fa-angle-right2
              | Respaldar técnicamente la toma de decisiones. 

        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img05.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 13.
      span Principales metodologías de monitoreo

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
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

      .tarjeta.bg01.p-4(data-aos="zoom-in-left")
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

    separador(data-aos="zoom-in-left")
    #t_4_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.2. Programación de recursos tecnológicos 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t4/img07.png' alt='')
    p La programación de recursos tecnológicos consiste en organizar y planificar la utilización de los equipos, herramientas, dispositivos, #[em software] y demás recursos necesarios para ejecutar las actividades de monitoreo de manera eficiente. Esta programación permite garantizar la disponibilidad de los equipos, optimizar su utilización y asegurar que cada actividad cuente con los recursos requeridos para la captura de información.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p.bg01.p-4 La programación de los recursos tecnológicos constituye una etapa fundamental dentro de la planeación del monitoreo agrícola, ya que permite organizar de manera anticipada la disponibilidad y utilización de los equipos, herramientas, dispositivos y demás recursos necesarios para desarrollar las actividades de campo de forma eficiente. Una adecuada programación facilita la coordinación de las labores, optimiza la distribución de los recursos y contribuye al cumplimiento de los objetivos establecidos en el plan de monitoreo.
        p Uno de los principales beneficios de una programación adecuada es que permite optimizar el uso de los equipos, evitando periodos de inactividad, duplicidad de tareas o utilización ineficiente de los recursos tecnológicos disponibles. Esto favorece una mejor planificación de las jornadas de trabajo y un aprovechamiento racional de los equipos de medición, dispositivos de georreferenciación, sensores y demás herramientas utilizadas durante el monitoreo.
      .col-lg-4.col-8.col-md-7
        img(src='@/assets/curso/temas/t4/img08.png', alt='')


    .row.justify-content-center.align-items-center.mb-4.bg10.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img10.png', alt='')
        .col-lg-7.p-3
          .row.mb-2.mb-3
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/temas/t4/img09.png', alt='')
            .col-lg-12
              p.px-2 Asimismo, una correcta programación contribuye a reducir los tiempos improductivos, ya que permite prever con anticipación la disponibilidad de los recursos, organizar los desplazamientos hacia las áreas de monitoreo y coordinar las actividades del personal responsable. De esta manera, se disminuyen retrasos ocasionados por la falta de equipos, fallas logísticas o problemas de organización.
              p.px-2 Otra ventaja importante consiste en evitar interrupciones durante el monitoreo, mediante la verificación previa del estado de funcionamiento de los equipos, la disponibilidad de baterías, accesorios, materiales e insumos, así como la planificación de actividades de mantenimiento preventivo cuando sean necesarias. Esto garantiza la continuidad del trabajo de campo y reduce el riesgo de pérdida de información por fallas técnicas.
    p La programación también permite garantizar la disponibilidad de las herramientas y recursos tecnológicos requeridos para cada actividad, asegurando que los equipos apropiados se encuentren disponibles en el momento oportuno y que cada integrante del equipo cuente con los elementos necesarios para desarrollar sus funciones.

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-5.col-10.col-md-9.mb-3
        img(src='@/assets/curso/temas/t4/img11.png', alt='')
      .col-lg-7.mb-3
        .row.justify-content-center.p-3
          .col-lg-2.mb-3.col-4.col-md-2
            img(src='@/assets/curso/temas/t4/img04.png', alt='')
          .col-lg-10
            p De igual manera, una adecuada planificación facilita la logística del trabajo de campo, ya que permite organizar los recorridos de inspección, distribuir los equipos entre los diferentes grupos de trabajo, establecer cronogramas de utilización y coordinar aspectos relacionados con el transporte, la comunicación y el almacenamiento de los recursos tecnológicos.
          p Como resultado de esta organización, se logra mejorar la eficiencia operativa de todo el proceso de monitoreo, incrementando la productividad del personal, reduciendo errores durante la ejecución de las actividades y favoreciendo la obtención de información técnica confiable y oportuna para la toma de decisiones.
    p Finalmente, una programación eficiente contribuye a reducir los costos de operación, al disminuir gastos asociados con desplazamientos innecesarios, tiempos muertos, utilización inadecuada de equipos, mantenimiento correctivo y reposición prematura de herramientas. En conjunto, estos beneficios fortalecen la gestión de los recursos tecnológicos y mejoran la calidad de los programas de monitoreo dentro del Manejo Integrado de Plagas, Enfermedades y Arvenses de los cultivos.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 14.
      span Recursos tecnológicos que deben programarse

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Recurso
                th.text-izq.bg04 Aspectos a programar
            tbody
              tr.bg05
                td #[b Equipos GPS/GNSS]
                td Configuración, carga de baterías, actualización y almacenamiento.

              tr
                td #[b Equipos de medición]
                td Calibración, mantenimiento y disponibilidad.

              tr.bg05
                td #[b Dispositivos móviles]
                td Aplicaciones instaladas, memoria disponible y conectividad.

              tr
                td #[b Software especializado]
                td Licencias, configuración y compatibilidad.

              tr.bg05
                td #[b Bases de datos]
                td Creación, respaldo y organización de la información.
    
    separador(data-aos="zoom-in-left")
    #t_4_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.3. Selección de tecnologías según las variables a monitorear

    p La selección de tecnologías consiste en identificar y utilizar los equipos, dispositivos, aplicaciones y herramientas que mejor se adapten a las características de las variables productivas que serán evaluadas. No todas las variables requieren la misma tecnología; por ello, la elección debe realizarse considerando criterios técnicos que garanticen precisión, eficiencia y confiabilidad.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 15.
      span Relación entre variables y tecnologías

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Variable
                th.text-izq.bg04 Tecnología recomendada
            tbody
              tr.bg05
                td #[b Temperatura y humedad ambiental]
                td Estaciones meteorológicas y sensores climáticos.

              tr
                td #[b Humedad del suelo]
                td Sensores de humedad y sondas multiparamétricas.

              tr.bg05
                td #[b pH y conductividad]
                td Medidores portátiles.

              tr
                td #[b Plagas y enfermedades]
                td Lupa, trampas, aplicaciones móviles y cámaras digitales.

              tr.bg05
                td #[b Arvenses]
                td Aplicaciones móviles, GPS y registro fotográfico.

              tr
                td #[b Ubicación espacial]
                td Receptores GPS/GNSS y equipos de geoposicionamiento.

              tr.bg05
                td #[b Distribución espacial]
                td Sistemas de Información Geográfica (SIG).

    p La selección de las tecnologías utilizadas en el monitoreo agrícola debe realizarse con base en criterios técnicos, operativos y económicos que permitan garantizar la calidad de la información obtenida y el uso eficiente de los recursos. La elección de equipos, dispositivos, sensores y aplicaciones no debe depender únicamente de su disponibilidad o costo, sino de su capacidad para responder a las necesidades específicas del cultivo, las condiciones del terreno y los objetivos del monitoreo.
    p Los principales criterios que deben considerarse son los siguientes:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-9.col-md-8
        img(src='@/assets/curso/temas/t4/img12.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Precisión de la medición")
            .col-md-12.mb-4.mb-md-0
              p Los equipos deben proporcionar resultados confiables y acordes con el nivel de exactitud requerido para evaluar las variables productivas. Una adecuada precisión permite reducir errores y obtener información representativa de las condiciones reales del cultivo.

          .row(numero="2" titulo="Facilidad de operación")
            .col-md-12.mb-4.mb-md-0
              p La tecnología debe ser sencilla de utilizar, contar con interfaces intuitivas y permitir un manejo adecuado por parte del personal encargado, previa capacitación. Esto contribuye a reducir errores y mejorar la eficiencia del trabajo de campo.

          .row(numero="3" titulo="Compatibilidad e interoperabilidad")
            .col-md-12.mb-4.mb-md-0
              p Los datos generados deben poder integrarse con Sistemas de Información Geográfica (SIG), bases de datos, aplicaciones móviles y plataformas de análisis. La interoperabilidad facilita el intercambio, procesamiento y gestión de la información.

          .row(numero="4" titulo="Portabilidad y resistencia")
            .col-md-12.mb-4.mb-md-0
              p Los equipos deben ser fáciles de transportar y adecuados para las condiciones del trabajo de campo. Además, deben presentar características de resistencia frente a factores ambientales y diferentes tipos de terreno.

          .row(numero="5" titulo="Mantenimiento y soporte técnico")
            .col-md-12.mb-4.mb-md-0
              p Se debe verificar la disponibilidad de servicios de mantenimiento, calibración, reparación, actualización de #[em software] y sustitución de componentes. Esto contribuye a prolongar la vida útil de los equipos y garantizar la continuidad del monitoreo.

          .row(numero="6" titulo="Relación costo-beneficio")
            .col-md-12.mb-4.mb-md-0
              p Es necesario analizar si la inversión en adquisición, operación y mantenimiento de la tecnología se justifica frente a la calidad de la información obtenida, la eficiencia del proceso y los beneficios para el sistema productivo.

          .row(numero="7" titulo="Adaptación a las condiciones del cultivo")
            .col-md-12.mb-4.mb-md-0
              p La tecnología debe responder a las características del sistema productivo, el tipo de cultivo, las condiciones climáticas y del terreno, el nivel tecnológico disponible y las variables que se desean evaluar.

          .row(numero="8" titulo="Capacidad de almacenamiento y transferencia")
            .col-md-12.mb-4.mb-md-0
              p Los equipos y aplicaciones deben permitir almacenar, organizar, respaldar y transferir los datos de manera segura. Esta capacidad favorece la trazabilidad de la información y facilita su análisis mediante otros dispositivos o plataformas.

    p La aplicación de estos criterios permite seleccionar tecnologías que contribuyan a mejorar la precisión, eficiencia y confiabilidad del monitoreo agrícola, facilitando la caracterización de las variables productivas y fortaleciendo la toma de decisiones dentro de los programas de Manejo Integrado de Plagas, Enfermedades y Arvenses.

    separador(data-aos="zoom-in-left")
    #t_4_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.4. Criterios técnicos para la caracterización de las variables productivas

    p La caracterización de las variables productivas consiste en identificar, describir, medir y registrar las condiciones del cultivo y del entorno mediante procedimientos técnicos estandarizados. Este proceso permite obtener información objetiva que sirva de base para evaluar el estado del sistema productivo y apoyar la toma de decisiones.


    .row.justify-content-center.align-items-center.mb-4.bg03.g-0(data-aos="zoom-in-left")
        .col-lg-7.p-4
          p.px-3 La adecuada caracterización permite:
          ul.lista-ul--color.px-3
            li.d-flex
              i.fas.fa-angle-right2
              | Identificar el estado actual del cultivo. 
            li.d-flex
              i.fas.fa-angle-right2
              | Detectar oportunamente cambios en las variables. 
            li.d-flex
              i.fas.fa-angle-right2
              | Comparar resultados entre diferentes monitoreos.

            li.d-flex
              i.fas.fa-angle-right2
              | Establecer relaciones entre variables ambientales y productivas. 

            li.d-flex
              i.fas.fa-angle-right2
              | Priorizar acciones de manejo. 
            li.d-flex
              i.fas.fa-angle-right2
              | Mejorar la calidad de los registros técnicos. 


        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img13.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 16.
      span Principales criterios técnicos

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Criterio técnico
                th.text-izq.bg04 Descripción
            tbody
              tr.bg05
                td #[b Representatividad]
                td La información debe reflejar las condiciones reales del cultivo.

              tr
                td #[b Precisión]
                td Las mediciones deben realizarse con equipos adecuados y procedimientos estandarizados.

              tr.bg05
                td #[b Objetividad]
                td Los datos deben fundamentarse en observaciones verificables y criterios técnicos.

              tr
                td #[b Repetibilidad]
                td El procedimiento debe poder reproducirse en diferentes momentos obteniendo resultados comparables.

              tr.bg05
                td #[b Trazabilidad]
                td Cada registro debe asociarse con una fecha, ubicación, responsable y condiciones de evaluación.

              tr
                td #[b Integridad]
                td La información debe registrarse de forma completa, sin omitir datos relevantes.

              tr.bg05
                td #[b Oportunidad]
                td La caracterización debe realizarse en el momento adecuado para apoyar la toma de decisiones.

              tr
                td #[b Calidad de los datos]
                td Los registros deben ser consistentes, verificables y libres de errores.


    .row.justify-content-center.align-items-center.mb-3.bg11.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img15.png', alt='')
        .col-lg-7.p-3
          .col-lg-12
            p.px-3 El proceso de caracterización comprende las siguientes actividades:
            ol.lista-ol--cuadro.px-3
              li.d-flex
                .lista-ol--cuadro__vineta
                  span a
                | Definir las variables que serán evaluadas.

              li.d-flex
                .lista-ol--cuadro__vineta
                  span b
                | Seleccionar los indicadores de medición.

              li.d-flex
                .lista-ol--cuadro__vineta
                  span c
                | Elegir la metodología y los equipos apropiados.

              li.d-flex
                .lista-ol--cuadro__vineta
                  span d
                | Realizar las observaciones y mediciones en campo.

              li.d-flex
                .lista-ol--cuadro__vineta
                  span e
                | Registrar la información en formatos estandarizados.

              li.d-flex
                .lista-ol--cuadro__vineta
                  span f
                | Verificar la calidad y consistencia de los datos.

              li.d-flex
                .lista-ol--cuadro__vineta
                  span g
                | Organizar la información para su posterior análisis.
              
    p La planeación constituye el eje central del monitoreo de variables productivas, ya que integra las metodologías, los recursos tecnológicos, los procedimientos de trabajo y los criterios técnicos necesarios para obtener información confiable. Una adecuada planificación permite optimizar el uso de los recursos disponibles, mejorar la calidad de los registros, fortalecer la trazabilidad de la información y respaldar la toma de decisiones dentro del Manejo Integrado de Plagas, Enfermedades y Arvenses. La aplicación de metodologías estandarizadas, la selección adecuada de tecnologías y la caracterización objetiva de las variables productivas favorecen el desarrollo de programas de monitoreo más eficientes, contribuyendo a incrementar la productividad, reducir riesgos fitosanitarios y promover una agricultura sostenible basada en información técnica y georreferenciada.





























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
