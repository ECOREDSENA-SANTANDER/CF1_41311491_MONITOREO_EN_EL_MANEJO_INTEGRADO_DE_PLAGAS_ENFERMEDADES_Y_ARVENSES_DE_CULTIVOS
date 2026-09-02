<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables ambientales y productivas asociadas al cultivo

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p.bg01.p-4 El comportamiento de un cultivo depende de la interacción permanente entre las características genéticas de la planta y las condiciones ambientales del entorno donde se desarrolla. Factores como el clima, el suelo, la disponibilidad de agua, el estado fisiológico del cultivo y la presencia de organismos asociados influyen directamente en el crecimiento, el rendimiento y la sanidad vegetal. Por esta razón, el monitoreo de las variables ambientales y productivas constituye una actividad esencial dentro del Manejo Integrado de Plagas (MIP), ya que permite comprender las condiciones que favorecen o limitan el desarrollo del cultivo y la aparición de problemas fitosanitarios.
        p Las variables ambientales comprenden los factores climáticos y edáficos que condicionan el establecimiento y desarrollo de los cultivos, mientras que las variables productivas corresponden a los indicadores relacionados con el crecimiento, la fisiología, la fenología y el estado sanitario de las plantas. La integración de esta información facilita la identificación de tendencias, la evaluación de riesgos y la implementación de estrategias de manejo fundamentadas en criterios técnicos.
      .col-lg-4.col-8.col-md-7
        img(src='@/assets/curso/temas/t2/img01.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span  Interacciones entre la atmósfera, el océano, la superficie terrestre y el espacio en el sistema climático
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-8
        img(src='@/assets/curso/temas/t2/fig1.svg', alt='Representa las interacciones entre el espacio, la atmósfera, el mar y la tierra dentro del sistema climático. Se observa el Sol y la radiación terrestre, junto con procesos atmosféricos como la formación de nubes, precipitación, vientos, gases y partículas volcánicas. En el mar se representan las corrientes, el hielo marino y las interacciones entre el océano y la atmósfera. En la superficie terrestre se muestran montañas, nieve y hielo, escorrentía, agua subterránea, vegetación y actividades humanas, destacando las interacciones entre el aire, la superficie terrestre y el mar.')
        
      separador(data-aos="zoom-in-left")
      #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 2.1. Variables climáticas de interés agrícola

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-9
          img(src='@/assets/curso/temas/t2/img02.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t2/img03.png', alt='')
            .col-lg-10
              p Las variables climáticas son los factores atmosféricos que caracterizan las condiciones del ambiente y que influyen directa o indirectamente sobre el crecimiento, desarrollo, productividad y estado fitosanitario de los cultivos. Estas variables determinan la disponibilidad de energía, agua y condiciones ambientales necesarias para el desarrollo de las plantas, además de favorecer o limitar la presencia de plagas, enfermedades y arvenses.

          p El monitoreo de las variables climáticas permite comprender cómo las condiciones meteorológicas afectan el comportamiento del cultivo y constituye una herramienta fundamental para planificar las labores agrícolas, prevenir riesgos fitosanitarios y optimizar la toma de decisiones dentro del Manejo Integrado de Plagas (MIP).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia de las variables climáticas


    p Las condiciones climáticas influyen en prácticamente todos los procesos biológicos y fisiológicos de las plantas. La germinación, la fotosíntesis, la absorción de agua y nutrientes, la floración, la fructificación y la maduración dependen, en gran medida, de la interacción entre las diferentes variables meteorológicas.
    p Asimismo, muchos organismos que afectan los cultivos requieren condiciones específicas de temperatura, humedad y precipitación para completar su ciclo biológico. Por ello, el monitoreo climático constituye una herramienta preventiva que permite anticipar riesgos y programar oportunamente las actividades de manejo.
    p Entre los principales beneficios del monitoreo climático se destacan:
    
    .row.justify-content-center.align-items-center.mb-3.bg03.g-0(data-aos="zoom-in-left")
        .col-lg-7.p-4
          ul.lista-ul--color.px-3
            li.d-flex
              i.fas.fa-angle-right2
              | Comprender el comportamiento del cultivo frente a las condiciones ambientales. 
            li.d-flex
              i.fas.fa-angle-right2
              | Identificar factores climáticos que limitan la producción. 

            li.d-flex
              i.fas.fa-angle-right2
              | Predecir condiciones favorables para el desarrollo de plagas, enfermedades y arvenses. 

            li.d-flex
              i.fas.fa-angle-right2
              | Programar actividades de riego, fertilización y control fitosanitario. 
            li.d-flex
              i.fas.fa-angle-right2
              | Optimizar el uso de recursos y reducir riesgos asociados a eventos climáticos. 

        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img04.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 4.
      span Principales variables climáticas

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Variable climática
                th.text-izq.bg04 Descripción
                th.text-izq.bg04 Importancia en el monitoreo agrícola
            tbody
              tr.bg05
                td #[b Temperatura del aire]
                td Mide el grado de calor presente en la atmósfera.
                td Influye en la germinación, el crecimiento, la floración, la actividad fisiológica y el desarrollo de plagas y enfermedades.

              tr
                td #[b Precipitación]
                td Cantidad de agua que cae sobre una superficie durante un periodo determinado.
                td Determina la disponibilidad de agua para el cultivo y favorece o limita el desarrollo de enfermedades y arvenses.

              tr.bg05
                td #[b Humedad relativa]
                td Cantidad de vapor de agua presente en el aire respecto al máximo que puede contener a una temperatura determinada.
                td Influye en la transpiración de las plantas y en el desarrollo de enfermedades causadas por hongos y bacterias.

              tr
                td #[b Radiación solar]
                td Energía proveniente del sol que llega a la superficie terrestre.
                td Es indispensable para la fotosíntesis y regula el crecimiento y desarrollo de las plantas.

              tr.bg05
                td #[b Velocidad y dirección del viento]
                td Movimiento del aire en la atmósfera.
                td Favorece la dispersión de esporas, insectos, semillas de arvenses y contribuye a la polinización y a la evaporación.

              tr
                td #[b Evapotranspiración]
                td Pérdida de agua por evaporación del suelo y transpiración de las plantas.
                td Permite estimar las necesidades hídricas del cultivo y programar el riego.

              tr.bg05
                td #[b Presión atmosférica]
                td Fuerza ejercida por el peso del aire sobre la superficie terrestre.
                td Se relaciona con los cambios meteorológicos y puede complementar la interpretación de las condiciones ambientales.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Equipos utilizados para el monitoreo climático

    p El seguimiento de las variables climáticas requiere instrumentos que permitan obtener mediciones confiables y continuas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 5.
      span Equipos utilizados para el monitoreo climático

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Variable
                th.text-izq.bg04 Equipo utilizado
            tbody
              tr.bg05
                td #[b Temperatura]
                td Termómetro, sensor de temperatura, estación meteorológica.

              tr
                td #[b Humedad relativa]
                td Higrómetro o sensor de humedad ambiental.

              tr.bg05
                td #[b Precipitación]
                td Pluviómetro.

              tr
                td #[b Radiación solar]
                td Piranómetro o radiómetro.

              tr.bg05
                td #[b Velocidad del viento]
                td Anemómetro.

              tr
                td #[b Dirección del viento]
                td Veleta.

              tr.bg05
                td #[b Evapotranspiración]
                td Estación meteorológica y modelos de cálculo.

    p La información climática permite anticipar condiciones favorables para la aparición de organismos nocivos y establecer medidas preventivas. Por ejemplo, periodos prolongados de alta humedad relativa pueden favorecer enfermedades fungosas, mientras que temperaturas elevadas y baja humedad pueden incrementar la incidencia de ciertos insectos y ácaros.

    separador(data-aos="zoom-in-left")
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2. Variables edáficas para el monitoreo del cultivo


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-9
          img(src='@/assets/curso/temas/t2/img05.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t2/img06.png', alt='')
            .col-lg-10
              p Las variables edáficas corresponden al conjunto de propiedades físicas, químicas y biológicas del suelo que influyen en el desarrollo del cultivo y en el comportamiento de los organismos asociados. El suelo no solo proporciona soporte físico a las plantas, sino que también regula la disponibilidad de agua, nutrientes y oxígeno para las raíces.

          p El monitoreo de estas variables permite identificar limitantes del crecimiento, evaluar la fertilidad del suelo y comprender cómo las condiciones edáficas afectan la productividad y la sanidad del cultivo.
          p El conocimiento de las condiciones del suelo facilita la implementación de prácticas de manejo que favorezcan el desarrollo del cultivo y reduzcan el riesgo de problemas fitosanitarios. Además, contribuye a optimizar el uso de fertilizantes, el manejo del riego y las estrategias de conservación del suelo.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6.
      span Principales variables edáficas

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Variable edáfica
                th.text-izq.bg04 Descripción
                th.text-izq.bg04 Importancia en el monitoreo
            tbody
              tr.bg05
                td #[b Textura]
                td Proporción de arena, limo y arcilla.
                td Determina la retención de agua, la aireación y el desarrollo radicular.

              tr
                td #[b Estructura]
                td Organización de las partículas del suelo en agregados.
                td Influye en la infiltración del agua, el crecimiento de las raíces y la estabilidad del suelo.

              tr.bg05
                td #[b Humedad del suelo]
                td Cantidad de agua disponible para las plantas.
                td Determina el desarrollo del cultivo y favorece o limita la aparición de enfermedades.

              tr
                td #[b Temperatura del suelo]
                td Nivel de calor presente en el perfil del suelo.
                td Influye en la actividad biológica, la germinación y el crecimiento radicular.

              tr.bg05
                td #[b pH]
                td Medida de la acidez o alcalinidad del suelo.
                td Condiciona la disponibilidad de nutrientes y la actividad microbiana.

              tr
                td #[b Materia orgánica]
                td Residuos vegetales y animales en descomposición.
                td Mejora la fertilidad, la estructura y la capacidad de retención de agua.

              tr.bg05
                td #[b Conductividad eléctrica]
                td Concentración de sales solubles en el suelo.
                td Permite identificar problemas de salinidad que afectan el crecimiento del cultivo.

    p Las condiciones del suelo pueden favorecer o limitar el desarrollo de organismos nocivos. Por ejemplo, un exceso de humedad puede incrementar la incidencia de enfermedades radiculares, mientras que un suelo compactado reduce el crecimiento de las raíces y afecta la absorción de nutrientes. 
    p Por esta razón, las variables edáficas deben evaluarse conjuntamente con las variables climáticas y biológicas para obtener una visión integral del estado del cultivo.

    separador(data-aos="zoom-in-left")
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3. Fenología, fisiología y factores limitantes de la producción

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-8.col-md-6
          img(src="@/assets/curso/temas/t2/img07.png")
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-3.bg08.g-0
            .col-lg-5.p-0.d-none.d-lg-block
              img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img08.png', alt='')
            .col-lg-7.p-2
              p.px-3 El crecimiento y desarrollo de un cultivo son el resultado de la interacción entre las características genéticas de la planta y las condiciones ambientales presentes durante su ciclo productivo. Para comprender el comportamiento del cultivo y establecer estrategias adecuadas de manejo, es necesario conocer los procesos relacionados con la fenología, la fisiología y los factores que limitan la producción. Estos aspectos constituyen variables productivas fundamentales dentro del monitoreo agrícola, ya que permiten interpretar el estado de desarrollo del cultivo, evaluar su respuesta frente a las condiciones ambientales y anticipar posibles riesgos que afecten la productividad.
          p El monitoreo de estas variables facilita la identificación de cambios en el crecimiento, la detección temprana de alteraciones fisiológicas y la implementación de prácticas de manejo oportunas, contribuyendo al éxito de los programas de Manejo Integrado de Plagas (MIP).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Fenología del cultivo

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p.bg01.p-4 La fenología es la rama de la agronomía que estudia las diferentes etapas del desarrollo de las plantas y la relación de estas con las condiciones ambientales. Su propósito es describir los cambios que experimenta el cultivo desde la germinación hasta la cosecha, permitiendo establecer cronogramas de manejo y relacionar cada etapa con la aparición de plagas, enfermedades y arvenses.
        p Cada especie vegetal presenta un ciclo fenológico particular, cuya duración depende de factores genéticos, climáticos y de manejo agronómico.
      .col-lg-4.col-8.col-md-7
        img(src='@/assets/curso/temas/t2/img09.png', alt='')

    .row.justify-content-center.align-items-center.mb-3.bg07.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0.d-none.d-lg-block
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img10.png', alt='')
        .col-lg-7.p-4
          p.px-3 El conocimiento de las etapas fenológicas permite:
          ul.lista-ul--color.px-3
            li
              i.fas.fa-angle-right2
              | Programar adecuadamente las actividades de monitoreo. 
            li
              i.fas.fa-angle-right2
              | Identificar los periodos de mayor susceptibilidad del cultivo. 
            li
              i.fas.fa-angle-right2
              | Determinar el momento oportuno para realizar labores agrícolas. 
            li
              i.fas.fa-angle-right2
              | Relacionar el desarrollo del cultivo con la incidencia de plagas y enfermedades.
            li
              i.fas.fa-angle-right2
              | Optimizar la aplicación de medidas de manejo integrado. 


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 7.
      span Principales etapas fenológicas

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Etapa fenológica
                th.text-izq.bg04 Descripción
                th.text-izq.bg04 Importancia para el monitoreo
            tbody
              tr.bg05
                td #[b Germinación o emergencia]
                td Inicio del desarrollo de la planta a partir de la semilla.
                td Permite evaluar el establecimiento del cultivo y detectar fallas en la emergencia.

              tr
                td #[b Crecimiento vegetativo]
                td Desarrollo de hojas, tallos y raíces.
                td Es una etapa clave para evaluar el vigor del cultivo y la presencia temprana de plagas y arvenses.

              tr.bg05
                td #[b Floración]
                td Formación y apertura de flores.
                td Constituye una etapa crítica debido a la alta sensibilidad frente a estrés hídrico, plagas y enfermedades.

              tr
                td #[b Fructificación o llenado de frutos]
                td Formación y desarrollo de frutos o estructuras de cosecha.
                td Permite evaluar el potencial productivo y el efecto de factores limitantes sobre el rendimiento.

              tr.bg05
                td #[b Maduración]
                td Finalización del desarrollo fisiológico del producto cosechable.
                td Facilita la programación de la cosecha y el seguimiento de problemas fitosanitarios de final de ciclo.

              tr
                td #[b Senescencia]
                td Envejecimiento natural de la planta antes de finalizar el ciclo productivo.
                td Permite evaluar el cierre del ciclo y planificar actividades posteriores a la cosecha.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Fisiología del cultivo

    p La fisiología vegetal estudia el funcionamiento de las plantas y los procesos biológicos que regulan su crecimiento, desarrollo y producción. Comprender estos procesos permite interpretar la respuesta del cultivo frente a las condiciones ambientales y detectar alteraciones que puedan afectar su rendimiento. 
    p El monitoreo fisiológico ayuda a identificar cambios en el estado de las plantas antes de que se manifiesten síntomas visibles de estrés o afectación fitosanitaria.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 8.
      span Principales procesos fisiológicos

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Proceso fisiológico
                th.text-izq.bg04 Descripción
                th.text-izq.bg04 Importancia para el monitoreo
            tbody
              tr.bg05
                td #[b Fotosíntesis]
                td Proceso mediante el cual la planta transforma la energía solar en compuestos orgánicos.
                td Determina la producción de biomasa y el crecimiento del cultivo.

              tr
                td #[b Respiración]
                td Obtención de energía a partir de los compuestos producidos durante la fotosíntesis.
                td Influye en el crecimiento y mantenimiento de los tejidos vegetales.

              tr.bg05
                td #[b Transpiración]
                td Pérdida de agua en forma de vapor a través de los estomas.
                td Regula la temperatura de la planta y el transporte de nutrientes.

              tr
                td #[b Absorción de agua y nutrientes]
                td Incorporación de agua y elementos minerales desde el suelo.
                td Favorece el crecimiento y el desarrollo fisiológico del cultivo.

              tr.bg05
                td #[b Transporte de sustancias]
                td Movimiento interno de agua, nutrientes y fotosimilados.
                td Permite el funcionamiento coordinado de todos los órganos de la planta.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Factores limitantes de la producción

    p Los factores limitantes son aquellos elementos bióticos o abióticos que reducen el crecimiento, desarrollo o rendimiento del cultivo. Su identificación constituye uno de los principales objetivos del monitoreo agrícola, ya que permite establecer medidas preventivas y correctivas antes de que se presenten pérdidas económicas. Estos factores pueden actuar de manera individual o combinada, afectando la productividad y la calidad de la cosecha.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 9.
      span Clasificación de los factores limitantes

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Tipo de factor
                th.text-izq.bg04 Ejemplos
                th.text-izq.bg04 Efecto sobre el cultivo
            tbody
              tr.bg05
                td #[b Climáticos]
                td Sequía, exceso de lluvia, heladas, altas temperaturas, vientos fuertes.
                td Reducen el crecimiento y favorecen el desarrollo de organismos nocivos.

              tr
                td #[b Edáficos]
                td Compactación, baja fertilidad, salinidad, acidez, mal drenaje.
                td Limitan el desarrollo radicular y la absorción de nutrientes.

              tr.bg05
                td #[b Biológicos]
                td Plagas, enfermedades, arvenses y nematodos.
                td Disminuyen el rendimiento y afectan la calidad de la producción.

              tr
                td #[b Nutricionales]
                td Deficiencia o exceso de nutrientes.
                td Generan alteraciones fisiológicas y reducción del crecimiento.

              tr.bg05
                td #[b Antrópicos]
                td Manejo inadecuado, uso incorrecto de insumos, prácticas agrícolas deficientes.
                td Incrementan el riesgo de pérdidas y deterioran el sistema productivo.

    p La identificación de los factores limitantes permite orientar las acciones de manejo hacia las verdaderas causas que afectan el rendimiento del cultivo. De esta manera, el monitoreo contribuye a optimizar el uso de recursos, mejorar la eficiencia de las prácticas agronómicas y reducir los riesgos asociados a pérdidas económicas.

    separador(data-aos="zoom-in-left")
    #t_2_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.4. Relación entre las variables productivas y la sanidad del cultivo

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img11.png', alt='')
    p La sanidad del cultivo depende de la interacción permanente entre las condiciones ambientales, las características del suelo, el estado fisiológico de las plantas y la presencia de organismos asociados al agroecosistema. Ninguna variable actúa de manera aislada; por el contrario, todas se relacionan entre sí y determinan el comportamiento del cultivo frente a factores de estrés y organismos nocivos.
    p El monitoreo de las variables productivas permite comprender estas interacciones y establecer estrategias de manejo fundamentadas en información técnica.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Relación entre las variables productivas y la sanidad vegetal
    p Las condiciones del cultivo cambian continuamente debido a la influencia del ambiente y del manejo agronómico. Cuando estas condiciones son favorables para la planta, el cultivo presenta mayor capacidad para tolerar el ataque de plagas y enfermedades. En contraste, condiciones adversas incrementan la susceptibilidad y favorecen el establecimiento de organismos perjudiciales.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 10.
      span Interacción de las principales variables

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .tabla-a.color-primario
          table
            thead
              tr
                th.w-25.izq.bg04 Variable productiva
                th.text-izq.bg04 Influencia sobre la sanidad del cultivo
                th.text-izq.bg04 Ejemplo
            tbody
              tr.bg05
                td #[b Temperatura]
                td Modifica el desarrollo del cultivo y de numerosos organismos fitopatógenos.
                td Temperaturas elevadas favorecen el desarrollo de algunos insectos; temperaturas moderadas y alta humedad favorecen enfermedades fungosas.

              tr
                td #[b Humedad relativa]
                td Influye en la germinación de esporas y en la supervivencia de diversos organismos.
                td Humedades superiores al 90 % favorecen enfermedades causadas por hongos.

              tr.bg05
                td #[b Precipitación]
                td Afecta la disponibilidad de agua y la dispersión de patógenos.
                td Lluvias frecuentes incrementan la incidencia de enfermedades foliares.

              tr
                td #[b Humedad del suelo]
                td Regula el desarrollo radicular y la actividad de microorganismos.
                td Exceso de humedad favorece enfermedades de raíz.

              tr.bg05
                td #[b Estado fenológico]
                td Determina la susceptibilidad del cultivo frente a organismos nocivos.
                td La floración suele ser una etapa crítica para muchos cultivos.

              tr
                td #[b Estado nutricional]
                td Influye en el vigor y la capacidad de respuesta de las plantas.
                td Deficiencias de potasio pueden aumentar la susceptibilidad a enfermedades.

              tr.bg05
                td #[b Presencia de enemigos naturales]
                td Contribuye a regular las poblaciones de plagas.
                td Insectos depredadores reducen naturalmente las poblaciones de áfidos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Integración de la información durante el monitoreo

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-9
          img(src='@/assets/curso/temas/t2/img12.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t2/img13.png', alt='')
            .col-lg-10
              p El monitoreo no consiste únicamente en registrar datos de manera independiente. Su verdadero valor radica en integrar la información obtenida para interpretar el comportamiento del cultivo y comprender la relación entre las diferentes variables productivas.
          p Por ejemplo, un incremento en la humedad relativa acompañado de temperaturas moderadas y lluvias continuas puede explicar el aumento de enfermedades causadas por hongos. De igual forma, una baja humedad del suelo asociada con altas temperaturas puede generar estrés hídrico, disminuyendo el vigor de las plantas y favoreciendo el ataque de insectos perforadores o chupadores.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia de la relación entre las variables productivas y la sanidad del cultivo


    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p.bg01.p-4 El análisis conjunto de las variables ambientales y productivas permite comprender el funcionamiento del agroecosistema y anticipar riesgos que afectan la producción agrícola. Esta visión integral favorece la implementación de estrategias preventivas, optimiza el uso de los recursos y fortalece la toma de decisiones dentro del Manejo Integrado de Plagas (MIP).
        p Al considerar simultáneamente factores climáticos, edáficos, fisiológicos y biológicos, el monitoreo proporciona una base técnica sólida para identificar las causas de los problemas fitosanitarios, seleccionar las medidas de manejo más apropiadas y evaluar su efectividad a lo largo del ciclo del cultivo. De esta manera, se contribuye a mejorar la productividad, la sostenibilidad y la resiliencia de los sistemas agrícolas frente a las condiciones cambiantes del entorno.
      .col-lg-4.col-8.col-md-7
        img(src='@/assets/curso/temas/t2/img14.png', alt='')


































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<style lang="sass"></style>
