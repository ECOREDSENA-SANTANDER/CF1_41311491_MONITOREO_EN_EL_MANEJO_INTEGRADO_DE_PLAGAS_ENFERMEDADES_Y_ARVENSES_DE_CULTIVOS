<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El monitoreo de las variables productivas es fundamental para el Manejo Integrado de Plagas, Enfermedades y Arvenses, ya que permite caracterizar de manera objetiva las condiciones climáticas, edáficas, fenológicas, fisiológicas y fitosanitarias que influyen en el cultivo. Su adecuada planificación incluye la aplicación de metodologías de monitoreo, el análisis de umbrales de daño, la selección y programación de recursos tecnológicos, y el uso de equipos de medición y sistemas GPS/GNSS para obtener información precisa, georreferenciada y trazable. Estos procesos facilitan la identificación oportuna de factores limitantes, la interpretación de las condiciones del cultivo y la toma de decisiones técnicas orientadas al manejo eficiente de los recursos y al mejoramiento de la productividad agrícola.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La caracterización de las variables productivas y las tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses se organiza en cuatro ejes: fundamentos del monitoreo agrícola, que aborda conceptos, variables sanitarias, umbrales de daño y toma de decisiones; variables ambientales y productivas, relacionadas con el clima, suelo, fenología, fisiología y sanidad del cultivo; tecnologías y recursos para el monitoreo, que comprende equipos de medición, herramientas, insumos y sistemas GPS/GNSS; y planeación del monitoreo, enfocada en metodologías, programación de recursos, selección de tecnologías y criterios técnicos para caracterizar las variables productivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
