<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-5
      img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-lg-7
        p En los últimos años se han venido desarrollando herramientas tecnológicas, las cuales han mejorado en gran medida la gestión de las diferentes áreas de las empresas. El crecimiento vertiginoso en el uso de las tecnologías de la información y comunicación (TIC), cada vez más cerca del alcance de todos, no solo de grandes empresas sino también de microempresas hacen más eficiente este proceso y generan mayor confiabilidad en los reportes de inspección.
        .row.justify-content-center
          .col-lg-10
            p La sistematización del manejo de la información es una tarea, que debe ser organizada y coordinada con el equipo de personal de la empresa, con el fin de lograr las metas propuestas, por lo tanto, es necesario reconocer la importancia de la tecnología en el manejo de la información y capacitar a todo el personal en el manejo de dichas herramientas.
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/3.png', alt='')


    //.row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
