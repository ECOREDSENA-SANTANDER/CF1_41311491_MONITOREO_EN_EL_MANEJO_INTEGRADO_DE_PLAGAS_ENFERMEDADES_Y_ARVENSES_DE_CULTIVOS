<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p.bg01.p-4 El monitoreo agrícola es fundamental para el manejo integrado de plagas, enfermedades y arvenses, ya que permite recopilar y analizar información sobre las variables climáticas, edáficas, biológicas y productivas que influyen en el desarrollo y sanidad de los cultivos. Su caracterización mediante observación directa, registro de datos y evaluación periódica facilita la identificación de factores limitantes, la detección oportuna de organismos nocivos y la aplicación de criterios como los umbrales de daño económico para orientar las decisiones de manejo.
        p El uso de tecnologías como equipos de medición, sensores y sistemas GPS/GNSS permite obtener información precisa y georreferenciada, de acuerdo con las características del cultivo y los objetivos del monitoreo. La adecuada planeación de las variables, metodologías, tecnologías y recursos contribuye a generar información confiable y fortalece las competencias necesarias para analizar las condiciones del cultivo y sustentar estrategias de manejo integrado de plagas, enfermedades y arvenses.
      .col-lg-4.col-8.col-md-7
        img(src='@/assets/curso/temas/intro/img01.png', alt='')
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/0xGic-Toi1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
