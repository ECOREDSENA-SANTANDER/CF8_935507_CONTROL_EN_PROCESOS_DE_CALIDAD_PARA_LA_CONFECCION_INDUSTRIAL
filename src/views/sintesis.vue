<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La tecnología y los sistemas de inspección de calidad permiten optimizar los procesos empresariales, mejorar el control de calidad y aumentar la confiabilidad de la información, mediante una adecuada gestión y capacitación del personal.

    .row.justify-content-center
      .col-lg-6.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama sobre la gestión de información de la calidad, que muestra el uso de herramientas TIC y sistemas de información para registrar datos, reportar fallas, compartir información y realizar seguimiento y monitoreo de inspecciones de calidad.")
    .row.justify-content-center  
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
