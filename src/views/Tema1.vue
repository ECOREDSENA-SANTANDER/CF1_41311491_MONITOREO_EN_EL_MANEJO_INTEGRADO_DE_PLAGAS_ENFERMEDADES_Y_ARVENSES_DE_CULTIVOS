<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del monitoreo en el manejo integrado de plagas, enfermedades y arvenses
        
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-4.mb-3.col-9
          img(src='@/assets/curso/temas/t1/img01.png', alt='')
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-3
              img(src='@/assets/curso/temas/t1/img02.png', alt='')
            .col-lg-10
              p La producción agrícola enfrenta de manera permanente diversos factores que pueden afectar el crecimiento, desarrollo y rendimiento de los cultivos. Entre estos se encuentran las plagas, las enfermedades y las arvenses, cuya presencia y comportamiento dependen de la interacción entre el cultivo, las condiciones ambientales y las prácticas de manejo implementadas por el productor. Para minimizar los impactos ocasionados por estos organismos y garantizar una producción sostenible, es necesario contar con herramientas que permitan conocer oportunamente el estado fitosanitario del cultivo y apoyar la toma de decisiones técnicas.
          p En este contexto, el monitoreo agrícola constituye uno de los componentes fundamentales del Manejo Integrado de Plagas (MIP), ya que proporciona información sistemática sobre las variables productivas del cultivo, facilitando la identificación temprana de problemas fitosanitarios y la implementación de medidas de manejo basadas en evidencia. Mediante la observación, medición, registro y análisis de información relacionada con el cultivo, el suelo, el clima y los organismos asociados, el monitoreo permite evaluar la dinámica de las poblaciones de plagas, la incidencia y severidad de enfermedades, el desarrollo de las arvenses y las condiciones que favorecen su aparición. 

      p El conocimiento de estas variables constituye la base para establecer programas de vigilancia fitosanitaria, determinar los umbrales de daño económico y seleccionar estrategias de manejo acordes con las condiciones particulares de cada sistema productivo. De esta manera, el monitoreo contribuye a optimizar el uso de los recursos, reducir aplicaciones innecesarias de plaguicidas, disminuir los costos de producción y fortalecer la sostenibilidad ambiental de la actividad agrícola.

      separador(data-aos="zoom-in-left")
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1. Conceptos y principios del monitoreo agrícola

      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          p.bg01.p-4 El monitoreo agrícola es un proceso técnico, sistemático y continuo mediante el cual se recolecta, registra, organiza, analiza e interpreta información relacionada con el estado del cultivo y los factores que influyen en su desarrollo. Su propósito es generar información confiable que permita identificar oportunamente cambios en las condiciones productivas y fitosanitarias, facilitando la adopción de medidas de manejo adecuadas.
          p El monitoreo no consiste únicamente en observar un cultivo; implica aplicar metodologías definidas para evaluar variables específicas, registrar los resultados de manera organizada y analizarlos con criterios técnicos que apoyen la toma de decisiones.
        .col-lg-4.col-8.col-md-7
          img(src='@/assets/curso/temas/t1/img03.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Concepto de monitoreo en el Manejo Integrado de Plagas (MIP)

      p En el contexto del Manejo Integrado de Plagas (MIP), el monitoreo corresponde al seguimiento periódico de las poblaciones de plagas, enfermedades y arvenses, así como de las condiciones ambientales y del cultivo que pueden favorecer su desarrollo.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12
          img(src="@/assets/curso/temas/t1/img04.svg")

      .fondo01.mb-4.p-2(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-11.col-11
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-3.col-8
                img(src="@/assets/curso/temas/t1/img05.png")
              .col-lg-8
                p Su finalidad es determinar:
                SlyderF(columnas="col-lg-6 col-xl-4")
                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7
                        img(src='@/assets/curso/temas/t1/1.png' alt='')
                    p.text-center La presencia o ausencia de organismos de interés.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7
                        img(src='@/assets/curso/temas/t1/2.png' alt='')
                    p.text-center La distribución dentro del cultivo.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7
                        img(src='@/assets/curso/temas/t1/3.png' alt='')
                    p.text-center El nivel de infestación o infección.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7
                        img(src='@/assets/curso/temas/t1/4.png' alt='')
                    p.text-center La evolución de las poblaciones.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7
                        img(src='@/assets/curso/temas/t1/5.png' alt='')
                    p.text-center El riesgo potencial para la producción.

                  .tarjeta.bg01.p-4
                    .row.justify-content-center.mb-3
                      .col-5.col-lg-7
                        img(src='@/assets/curso/temas/t1/6.png' alt='')
                    p.text-center La necesidad de implementar medidas de manejo.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Objetivos del monitoreo agrícola

      p El monitoreo busca alcanzar diferentes propósitos dentro de los sistemas productivos.

      .row.justify-content-center.mb-3.bg03.g-0(data-aos="zoom-in-left")
        .col-lg-7.p-4
          p.mb-4.px-3 Entre ellos se destacan:
          ul.lista-ul--color.px-3
            li
              i.fas.fa-angle-right2
              | Caracterizar las variables productivas del cultivo. 
            li
              i.fas.fa-angle-right2
              | Detectar oportunamente problemas fitosanitarios. 
            li
              i.fas.fa-angle-right2
              | Conocer la dinámica de plagas, enfermedades y arvenses. 
            li
              i.fas.fa-angle-right2
              | Evaluar las condiciones ambientales que favorecen su desarrollo. 

            li
              i.fas.fa-angle-right2
              | Apoyar la toma de decisiones técnicas. 

            li
              i.fas.fa-angle-right2
              | Optimizar el uso de recursos. 
            li
              i.fas.fa-angle-right2
              | Reducir pérdidas económicas. 
            li
              i.fas.fa-angle-right2
              | Promover prácticas de producción sostenible. 
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img06.png', alt='')
        

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Principios del monitoreo agrícola

      p Todo programa de monitoreo debe fundamentarse en principios técnicos que garanticen la calidad y confiabilidad de la información obtenida.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Principios del monitoreo agrícola

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          .tabla-a.color-primario
            table
              thead
                tr
                  th.w-25.izq.bg04 Principio
                  th.text-izq.bg04 Descripción
                  th.text-izq.bg04 Importancia en el monitoreo agrícola
                  th.text-izq.bg04 Ejemplo de aplicación
              tbody
                tr.bg05
                  td #[b Sistematicidad]
                  td El monitoreo debe realizarse siguiendo una metodología previamente definida, con procedimientos estandarizados para la observación, medición, registro y análisis de la información.
                  td Garantiza que la información obtenida sea consistente, comparable y confiable durante todo el proceso de monitoreo.
                  td Realizar semanalmente el recorrido por los mismos puntos del cultivo utilizando el mismo procedimiento de evaluación y los mismos formatos de registro.

                tr
                  td #[b Periodicidad]
                  td El monitoreo debe ejecutarse con una frecuencia establecida de acuerdo con el cultivo, su etapa fenológica, las condiciones ambientales y el riesgo de aparición de plagas, enfermedades o arvenses.
                  td Permite detectar oportunamente cambios en las variables productivas y establecer medidas de manejo antes de que se presenten daños significativos.
                  td En cultivos de tomate, efectuar monitoreos dos veces por semana durante la etapa de floración y fructificación debido al mayor riesgo de enfermedades.

                tr.bg05
                  td #[b Representatividad]
                  td La información recolectada debe reflejar las condiciones reales del cultivo mediante una adecuada selección de los puntos de observación o muestreo.
                  td Evita que las decisiones se basen en información parcial o sesgada, aumentando la confiabilidad de los resultados obtenidos.
                  td Distribuir los puntos de monitoreo en diferentes sectores del lote para incluir áreas altas, bajas, húmedas y secas.

                tr
                  td #[b Objetividad]
                  td Los registros deben fundamentarse en observaciones directas, mediciones y criterios técnicos, evitando apreciaciones subjetivas o interpretaciones personales.
                  td Favorece la precisión de la información y facilita la comparación de resultados entre diferentes evaluaciones o responsables del monitoreo.
                  td Registrar el número de insectos por planta o el porcentaje de incidencia de una enfermedad, en lugar de describir la presencia como “alta” o “baja” sin medición.

                tr.bg05
                  td #[b Oportunidad]
                  td La información debe obtenerse, procesarse y analizarse en el momento adecuado para apoyar la toma de decisiones y prevenir pérdidas en el cultivo.
                  td Facilita la implementación oportuna de medidas de manejo antes de que las poblaciones de organismos nocivos superen los umbrales establecidos.
                  td Detectar una población inicial de una plaga y aplicar medidas de manejo antes de que alcance el umbral de acción.

                tr
                  td #[b Trazabilidad]
                  td Toda la información generada durante el monitoreo debe estar debidamente identificada y relacionada con el lugar, la fecha, el evaluador, las condiciones del cultivo y los recursos utilizados.
                  td Permite reconstruir el historial del monitoreo, verificar la calidad de los datos y realizar análisis comparativos a través del tiempo.
                  td Registrar en cada formato la ubicación geográfica, fecha, hora, lote, cultivo, etapa fenológica, responsable del monitoreo y equipos utilizados.

                tr.bg05
                  td #[b Precisión]
                  td Las mediciones y registros deben realizarse utilizando instrumentos calibrados, metodologías apropiadas y unidades de medida estandarizadas.
                  td Reduce los errores de medición y mejora la calidad de la información utilizada para el análisis de las variables productivas.
                  td Utilizar un termómetro calibrado para registrar la temperatura y un GPS/GNSS para obtener coordenadas geográficas precisas.

                tr
                  td #[b Repetibilidad]
                  td El procedimiento de monitoreo debe permitir que diferentes personas obtengan resultados similares cuando aplican la misma metodología bajo condiciones equivalentes.
                  td Incrementa la confiabilidad de la información y facilita el seguimiento de las variables productivas durante el ciclo del cultivo.
                  td Dos técnicos realizan el monitoreo del mismo lote utilizando el mismo protocolo y obtienen resultados comparables sobre la incidencia de una enfermedad.

                tr.bg05
                  td #[b Integridad de la información]
                  td Los datos registrados deben conservarse completos, organizados y sin alteraciones durante todas las etapas del proceso de monitoreo.
                  td Garantiza que la información pueda utilizarse posteriormente para análisis, comparaciones y toma de decisiones.
                  td Diligenciar completamente los formatos de campo y respaldar la información en una base de datos digital sin omitir registros.

                tr
                  td #[b Enfoque para la toma de decisiones]
                  td El monitoreo debe orientarse a generar información útil que permita evaluar el estado del cultivo y seleccionar las medidas de manejo más apropiadas.
                  td Convierte los datos obtenidos en información técnica que respalda las decisiones dentro del Manejo Integrado de Plagas, Enfermedades y Arvenses.
                  td Analizar los resultados del monitoreo para decidir si es necesario implementar control biológico, cultural, físico o químico, de acuerdo con los umbrales establecidos.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Características del monitoreo agrícola
      p Para que el monitoreo agrícola proporcione información confiable y útil para el Manejo Integrado de Plagas (MIP), debe cumplir una serie de características que garanticen la calidad de los datos obtenidos y faciliten la toma de decisiones. Un monitoreo bien estructurado no consiste únicamente en realizar observaciones ocasionales, sino en desarrollar un proceso técnico organizado, continuo y sustentado en metodologías estandarizadas. Las principales características de un monitoreo eficiente son las siguientes:

      .row.justify-content-center.mb-3.bg06.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img07.png', alt='')
        .col-lg-7.p-4
          .row.mb-3
            .col-lg-2.col-4
              img(src='@/assets/curso/temas/t1/img08.png', alt='')
          ul.lista-ul--color.px-3
            li
              i.fas.fa-angle-right2
              | Planificado. 
            li
              i.fas.fa-angle-right2
              | Sistemático. 
            li
              i.fas.fa-angle-right2
              | Georreferenciado. 
            li
              i.fas.fa-angle-right2
              | Basado en evidencia. 
            li
              i.fas.fa-angle-right2
              | Repetible. 
            li
              i.fas.fa-angle-right2
              | Comparable en el tiempo. 
            li
              i.fas.fa-angle-right2
              | Adaptado a las condiciones del cultivo. 
            li
              i.fas.fa-angle-right2
              | Orientado a la toma de decisiones. 
        
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia del monitoreo agrícola

      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          p.bg01.p-4 El monitoreo constituye la principal fuente de información para el manejo fitosanitario del cultivo, ya que permite conocer de manera objetiva y oportuna el comportamiento de las variables productivas que influyen en el desarrollo de plagas, enfermedades y arvenses. A través de la observación sistemática, la medición y el registro de información, es posible identificar cambios en las condiciones del cultivo, evaluar los riesgos fitosanitarios y establecer acciones de manejo fundamentadas en criterios técnicos.
          p A diferencia de las decisiones basadas únicamente en la experiencia o en observaciones aisladas, el monitoreo proporciona información verificable que facilita la planificación de las actividades agrícolas, optimiza el uso de los recursos disponibles y contribuye a disminuir las pérdidas ocasionadas por factores bióticos y abióticos. Además, permite realizar un seguimiento continuo al estado del cultivo durante todas sus etapas fenológicas, favoreciendo la implementación oportuna de estrategias preventivas y correctivas.
        .col-lg-4.col-9.col-md-7
          img(src='@/assets/curso/temas/t1/img09.png', alt='')

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-1.mb-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/img10.svg', alt='')
        .col-lg-11
          p El monitoreo genera múltiples beneficios tanto para el productor como para el sistema de producción, debido a que mejora la calidad de la información disponible y fortalece la toma de decisiones técnicas. 

      .row.justify-content-center.mb-3.bg03.g-0(data-aos="zoom-in-left")
        .col-lg-7.p-4
          p.mb-4.px-3 Entre sus beneficios se encuentran:
          ul.lista-ul--color.px-3
            li
              i.fas.fa-angle-right2
              | Detectar problemas antes de que ocasionen pérdidas económicas. 
            li
              i.fas.fa-angle-right2
              | Reducir aplicaciones innecesarias de plaguicidas. 
            li
              i.fas.fa-angle-right2
              | Priorizar acciones de manejo. 
            li
              i.fas.fa-angle-right2
              | Mejorar la eficiencia de los recursos. 
            li
              i.fas.fa-angle-right2
              | Incrementar la productividad. 
            li
              i.fas.fa-angle-right2
              | Favorecer la sostenibilidad del sistema agrícola. 
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img11.png', alt='')
        
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Tipos de monitoreo

      p El monitoreo agrícola puede clasificarse de acuerdo con el objetivo de la información que se desea obtener. Cada tipo de monitoreo permite evaluar un conjunto específico de variables productivas y aporta información complementaria para comprender el comportamiento del cultivo y apoyar la toma de decisiones dentro del Manejo Integrado de Plagas (MIP). 
      p Aunque cada modalidad tiene un propósito particular, en la práctica suelen desarrollarse de manera integrada, ya que las condiciones climáticas, edáficas, biológicas y fisiológicas interactúan permanentemente e influyen en el estado sanitario y productivo del cultivo.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2.
        span Tipos de monitoreo

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          .tabla-a.color-primario
            table
              thead
                tr
                  th.w-25.izq.bg04 Tipo de monitoreo
                  th.text-izq.bg04 Finalidad
                  th.text-izq.bg04 Variables que evalúa
                  th.text-izq.bg04 Aplicación en el manejo del cultivo
              tbody
                tr.bg05
                  td #[b Monitoreo fitosanitario]
                  td Evaluar la presencia, distribución, incidencia y comportamiento de plagas, enfermedades y arvenses que puedan afectar el desarrollo del cultivo.
                  td Presencia de organismos, densidad poblacional, incidencia, severidad, porcentaje de infestación, cobertura de arvenses, enemigos naturales.
                  td Permite identificar oportunamente problemas fitosanitarios, determinar umbrales de acción y seleccionar estrategias de manejo integrado.

                tr
                  td #[b Monitoreo climático]
                  td Registrar las condiciones meteorológicas que influyen en el crecimiento del cultivo y en el desarrollo de organismos nocivos.
                  td Temperatura, precipitación, humedad relativa, radiación solar, velocidad y dirección del viento, evapotranspiración.
                  td Facilita predecir condiciones favorables para la aparición de plagas y enfermedades, programar labores agrícolas y optimizar el manejo del cultivo.

                tr.bg05
                  td #[b Monitoreo edáfico]
                  td Evaluar las condiciones físicas, químicas y biológicas del suelo que influyen en el desarrollo del cultivo.
                  td Humedad del suelo, textura, estructura, pH, conductividad eléctrica, materia orgánica, temperatura del suelo, actividad biológica.
                  td Permite identificar limitantes para el crecimiento de las plantas, orientar el manejo del suelo y relacionar las condiciones edáficas con el estado fitosanitario del cultivo.

                tr
                  td #[b Monitoreo fenológico]
                  td Registrar las diferentes etapas de crecimiento y desarrollo del cultivo durante su ciclo productivo.
                  td Germinación, emergencia, crecimiento vegetativo, floración, fructificación, llenado de frutos, maduración y cosecha.
                  td Facilita ajustar la frecuencia del monitoreo y programar oportunamente las labores de manejo según la etapa fenológica del cultivo.

                tr.bg05
                  td #[b Monitoreo productivo]
                  td Evaluar el comportamiento del cultivo en términos de crecimiento, desarrollo y rendimiento.
                  td Densidad de plantas, altura, vigor, número de hojas, número de frutos, biomasa, rendimiento esperado y calidad de la producción.
                  td Permite evaluar el desempeño del cultivo, identificar factores que afectan la productividad y medir el impacto de las prácticas de manejo implementadas.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Etapas del monitoreo agrícola

      p El monitoreo agrícola es un proceso continuo y organizado que comprende una serie de etapas interrelacionadas, orientadas a obtener información confiable sobre las condiciones del cultivo y del agroecosistema. Cada etapa cumple una función específica y aporta elementos fundamentales para garantizar la calidad de los datos, facilitar su análisis y respaldar la toma de decisiones dentro del Manejo Integrado de Plagas (MIP).
      p La adecuada ejecución de estas etapas permite detectar oportunamente problemas fitosanitarios, evaluar el comportamiento de las variables productivas y establecer estrategias de manejo acordes con las necesidades del cultivo. A continuación, se presentan las etapas: 

      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Planeación")
              .col-md-12.mb-4.mb-md-0
                p La planeación constituye el punto de partida del monitoreo agrícola. En esta etapa se establecen los objetivos del proceso, se identifican las variables que serán evaluadas y se organizan los recursos humanos, técnicos y logísticos necesarios para desarrollar las actividades de campo. Una adecuada planificación permite optimizar el tiempo, reducir errores durante la recolección de información y garantizar que los datos obtenidos respondan a los objetivos propuestos.

            .row(titulo="Definición de variables")
              .col-md-12.mb-4.mb-md-0
                p Una vez definidos los objetivos, se seleccionan las variables productivas que serán objeto de monitoreo. Estas pueden incluir variables climáticas, edáficas, fenológicas, productivas y biológicas, dependiendo del cultivo y del problema que se desea evaluar. La correcta definición de las variables facilita la selección de los métodos de medición y de los indicadores que serán utilizados durante el proceso.

            .row(titulo="Selección de metodologías")
              .col-md-12.mb-4.mb-md-0
                p En esta etapa se determinan los procedimientos técnicos que orientarán el monitoreo. Esto incluye la definición de recorridos dentro del lote, la frecuencia de las evaluaciones, los métodos de observación, las técnicas de muestreo y los equipos requeridos para obtener información confiable. La aplicación de metodologías estandarizadas favorece la comparabilidad de los resultados y mejora la calidad de la información.

            .row(titulo="Recolección de información")
              .col-md-12.mb-4.mb-md-0
                p Corresponde a la ejecución del monitoreo en campo. Durante esta fase se realizan observaciones directas sobre el cultivo, se utilizan equipos de medición y se recopilan datos relacionados con las variables previamente definidas. La calidad de la información obtenida depende del cumplimiento de los protocolos establecidos y de la correcta utilización de los equipos de monitoreo.
        .col-lg-4.col-10
          img(src='@/assets/curso/temas/t1/img12.png', alt='')

      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-4.mb-3.d-none.d-lg-block 
          img(src='@/assets/curso/temas/t1/img13.png', alt='')
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Registro de datos")
              .col-md-12.mb-4.mb-md-0
                p Toda la información recopilada debe registrarse de forma ordenada, completa y verificable. Los registros pueden realizarse en formatos impresos, dispositivos móviles, aplicaciones especializadas o bases de datos digitales. Un registro adecuado garantiza la trazabilidad de la información y facilita su consulta para análisis posteriores.

            .row(titulo="Análisis e interpretación")
              .col-md-12.mb-4.mb-md-0
                p En esta etapa, los datos obtenidos se transforman en información útil mediante técnicas de análisis estadístico, elaboración de gráficos, comparación con registros históricos y evaluación de los umbrales establecidos. El análisis permite identificar tendencias, establecer relaciones entre variables y comprender el comportamiento del cultivo frente a las condiciones ambientales y fitosanitarias.

            .row(titulo="Toma de decisiones")
              .col-md-12.mb-4.mb-md-0
                p La información analizada sirve como base para seleccionar las medidas de manejo más apropiadas. Dependiendo de los resultados del monitoreo, pueden implementarse acciones preventivas, correctivas o de seguimiento orientadas a mantener el estado fitosanitario del cultivo. Las decisiones deben fundamentarse en criterios técnicos y considerar factores como la etapa fenológica, las condiciones climáticas, los costos de intervención y los niveles de daño observados.

            .row(titulo="Seguimiento")
              .col-md-12.mb-4.mb-md-0
                p El monitoreo no finaliza con la implementación de las medidas de manejo. Es necesario realizar evaluaciones posteriores para verificar la efectividad de las acciones ejecutadas y determinar si es necesario realizar ajustes. El seguimiento permite mantener un control continuo sobre las condiciones del cultivo, fortalecer los procesos de mejora y generar información histórica que facilite la planificación de futuros ciclos productivos.
                    

      separador(data-aos="zoom-in-left")
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2. Plagas, enfermedades y arvenses como variables de monitoreo

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-1.mb-3.col-4
          img(src='@/assets/curso/temas/t1/img14.svg', alt='')
        .col-lg-11
          p El monitoreo agrícola considera las plagas, las enfermedades y las arvenses como variables biológicas fundamentales, debido a que su presencia, abundancia y distribución influyen directamente en el crecimiento, desarrollo y rendimiento del cultivo.
        p Se presentan los principios y prácticas recomendadas para el manejo adecuado de plagas en los cultivos, destacando la importancia del monitoreo, la prevención y la aplicación de estrategias de manejo integrado para proteger la productividad y favorecer la sostenibilidad agrícola.

      .row.justify-content-center.align-items-center.mb-3       
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/RaOwSSnJCss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Buenas Prácticas de Manejo de Plagas

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Plagas
      p Son organismos, generalmente insectos, ácaros, nematodos, moluscos o vertebrados, que ocasionan daños al cultivo al alimentarse de sus órganos o afectar su desarrollo. 

      .row.justify-content-center.align-items-center.mb-3.bg07.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img15.png', alt='')
        .col-lg-7.p-4
          p.px-3 Durante el monitoreo se registran aspectos como:
          ul.lista-ul--color.px-3
            li
              i.fas.fa-angle-right2
              | Especie presente. 
            li
              i.fas.fa-angle-right2
              | Estado de desarrollo. 

            li
              i.fas.fa-angle-right2
              | Densidad poblacional. 

            li
              i.fas.fa-angle-right2
              | Distribución en el lote. 

            li
              i.fas.fa-angle-right2
              | Tipo de daño ocasionado. 
          
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Enfermedades

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-8.col-md-6
          img(src="@/assets/curso/temas/t1/img16.png")
        .col-lg-9
          p Las enfermedades son alteraciones fisiológicas ocasionadas por hongos, bacterias, virus, fitoplasmas u otros agentes bióticos o abióticos.  

          .row.justify-content-center.align-items-center.mb-3.bg08.g-0
            .col-lg-5.p-0
              img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img17.svg', alt='')
            .col-lg-7.p-3
              p.px-3 En el monitoreo se evalúan:
              ul.lista-ul--color.px-3
                li
                  i.fas.fa-angle-right2
                  | Incidencia.
                li
                  i.fas.fa-angle-right2
                  | Severidad. 

                li
                  i.fas.fa-angle-right2
                  | Síntomas. 

                li
                  i.fas.fa-angle-right2
                  | Signos. 

                li
                  i.fas.fa-angle-right2
                  | Distribución espacial. 
                li
                  i.fas.fa-angle-right2
                  | Factores predisponentes. 

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Arvenses

      p Las arvenses son plantas que crecen de forma espontánea en el cultivo y compiten por recursos como agua, luz, nutrientes y espacio. 

      .row.justify-content-center.mb-3.bg03.g-0(data-aos="zoom-in-left")
        .col-lg-7.p-4
          p.mb-4.px-3 El monitoreo permite determinar:
          ul.lista-ul--color.px-3
            li
              i.fas.fa-angle-right2
              | Especies predominantes. 
            li
              i.fas.fa-angle-right2
              | Cobertura. 
            li
              i.fas.fa-angle-right2
              | Densidad. 
            li
              i.fas.fa-angle-right2
              | Estado de desarrollo. 
            li
              i.fas.fa-angle-right2
              | Distribución en el lote. 
            li
              i.fas.fa-angle-right2
              | Nivel de interferencia con el cultivo. 
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img18.png', alt='')

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3.
        span Comparación entre plagas, enfermedades y arvenses

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          .tabla-a.color-primario
            table
              thead
                tr
                  th.w-25.izq.bg04 Variable
                  th.text-izq.bg04 Qué se monitorea
                  th.text-izq.bg04 Indicadores principales
              tbody
                tr.bg05
                  td #[b Plagas]
                  td Población y daño
                  td Densidad, distribución, porcentaje de infestación.

                tr
                  td #[b Enfermedades]
                  td Estado sanitario
                  td Incidencia, severidad y progreso de la enfermedad.

                tr.bg05
                  td #[b Arvenses]
                  td Competencia
                  td Densidad, cobertura y composición de especies.

      separador(data-aos="zoom-in-left")
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3. Umbrales de daño y criterios para la toma de decisiones

      p El monitoreo adquiere valor cuando la información obtenida se utiliza para decidir el momento y el tipo de intervención más adecuado. Para ello se emplean los conceptos de nivel de daño, umbral económico y umbral de acción, que permiten fundamentar las decisiones dentro del Manejo Integrado de Plagas.
      .row.justify-content-center(data-aos="zoom-in-left")
        .col-lg-6.mb-4.col-md-8
          .tarjeta-danio
            .tarjeta-danio__img
              img(src='@/assets/curso/temas/t1/01.png' alt='')
            .tarjeta-danio__info
              h4 Nivel de daño
              p El grado de afectación ocasionado por una plaga, enfermedad o arvenses sobre el cultivo, expresado mediante indicadores como incidencia, severidad, porcentaje de infestación o cobertura.

        .col-lg-6.mb-4.col-md-8
          .tarjeta-danio
            .tarjeta-danio__img
              img(src='@/assets/curso/temas/t1/02.png' alt='')
            .tarjeta-danio__info
              h4 Umbral de daño económico
              p Corresponde al nivel de afectación a partir del cual las pérdidas económicas causadas superan el costo de implementar una medida de control. Si no se interviene, el productor puede experimentar una reducción significativa en el rendimiento o en la calidad de la producción.

      p Se invita a los aprendices a escuchar el pódcast sobre #[b “El umbral de acción”], donde conocerán su importancia para determinar el momento adecuado de intervenir y tomar decisiones oportunas en el manejo de plagas.

      img(src='@/assets/curso/temas/t1/podcast.png', alt='')
      .row.justify-content-center.g-0(data-aos="fade-right")
        .col-lg-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
            .tarjeta.bg-white.p-3
              TarjetaAudio.color-acento-botones.mb-0.p-24(
              texto="pódcast: umbral de acción"
              :audio="require_src('@/assets/curso/temas/t1/podcast.png')"
          )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")




















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
