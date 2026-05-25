<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de información de la calidad',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre la gestión de información de las inspecciones de calidad, el uso de herramientas TIC, el sistema de información de calidad, los reportes de fallas y errores, la recopilación y disponibilidad de datos, el seguimiento, monitoreo y evaluación, y los índices de capacidad aplicados al control de calidad en confección industrial. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Por qué la administración de la información relacionada con la calidad debe manejarse con alta seguridad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite eliminar los formatos de inspección de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque evita alteraciones o pérdida de información que puedan afectar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque reemplaza la necesidad de realizar auditorías en la línea de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque impide que el equipo de calidad realice seguimiento a los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué debe definirse al recolectar información de las inspecciones de calidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el nombre del inspector y el color de la prenda revisada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo el programa informático que se utilizará para guardar los archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los datos a recoger, la forma, el momento, el lugar, la custodia y la disponibilidad de la información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El precio de venta del producto y las estrategias comerciales de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué función cumple un protocolo para el manejo de la información de calidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir reglas que den seguridad a los informes, optimicen el tiempo y organicen la comunicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir las inspecciones de producto terminado por opiniones verbales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la responsabilidad del personal frente a los soportes de inspección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Autorizar el uso de información sin clasificar y sin responsables definidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes opciones corresponde a herramientas TIC usadas para almacenar información en la nube?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cortadora vertical, troqueladora, plancha industrial y fileteadora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ojaladora, botonadora, recubridora y presilladora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Piquetes, aplomos, patrones y escalado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dropbox, Gsuite, One Drive e iCloud.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'En un sistema de información de calidad, ¿qué componente corresponde al ingreso de datos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Retroalimentación.', esCorrecta: false },
            { id: 'b', texto: 'Salida.', esCorrecta: false },
            { id: 'c', texto: 'Entrada.', esCorrecta: true },
            { id: 'd', texto: 'Mantenimiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica que debe cumplir un sistema de información de calidad?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser flexible, seguro, fácil de usar y permitir el uso de herramientas estadísticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ser rígido, manual y sin posibilidad de procesar nuevos datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Depender únicamente de carpetas físicas sin control de permisos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la retroalimentación y la generación de informes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál opción presenta fases del ciclo de desarrollo de un sistema de información?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Patronaje, trazo, corte, tiqueteado y fusionado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preparación, ensamble, terminados, planchado y empaque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inspección, rechazo, reproceso, lavandería y despacho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Planificación, análisis de requerimientos, diseño, desarrollo, prueba, integración, ejecución, operación y mantenimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué información puede hacer parte de un sistema de información de calidad?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente los datos de ventas y publicidad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo la información personal del operario que realiza una costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Devoluciones, reclamos, datos de clientes, muestras, lote piloto, proveedores, inspecciones y auditorías.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solamente los costos de compra de máquinas y equipos de confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué diferencia plantea el componente entre una falla o defecto y un error de origen humano?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La falla o defecto es el efecto visual de una imperfección; el error humano es una acción del personal que produce defectos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La falla se presenta solo en el área de ventas y el error humano solo en el área de compras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La falla no afecta la calidad, mientras que el error humano siempre obliga a cerrar la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La falla se registra sin análisis y el error humano no debe documentarse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué información debe contener un reporte de fallas o errores?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre de la máquina y el número de lote.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Información general, detalle de los hechos, causa, análisis, revisiones y acciones correctivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente fotografías de la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El listado de clientes y los precios de venta del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el orden general para recopilar datos de inspecciones indicado en el componente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar, vender, empacar y entregar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar, cortar, confeccionar y planchar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Diligenciar formatos, organizar la información, ingresar la información al sistema y clasificarla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Comprar insumos, almacenarlos, rechazarlos y archivarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Antes de compartir información de calidad, ¿qué características debe cumplir?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser extensa, informal, ambigua y sin responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser confidencial aunque no esté relacionada con el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser automática, abierta y modificable por cualquier persona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ser confiable, oportuna, precisa, sin ambigüedades y relevante.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué requisito debe cumplirse para consultar información del sistema de calidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que la persona tenga permisos necesarios y relación con el proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que la información no haya sido recopilada previamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que la consulta se realice sin registro de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que cualquier usuario pueda cambiar los resultados de inspección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cómo se describe el monitoreo dentro de la gestión de información de calidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como una actividad aislada que se hace solo al final del año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como un proceso continuo y sistemático que mide el progreso de los resultados propuestos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como un reemplazo de los informes y de las evidencias recolectadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como la eliminación de los indicadores de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué propósito tiene el seguimiento en la gestión de calidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar los indicadores y evitar la capacitación del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guardar la información sin analizarla ni compartirla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar el cumplimiento de metas, sistematizar resultados y apoyar la evaluación de calidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplazar los procesos de auditoría por registros incompletos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué es la evaluación en el contexto de la información de calidad?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La compra de nuevos equipos sin revisar datos de inspección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La revisión informal de una sola prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La autorización para compartir todos los archivos sin permisos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El análisis crítico de los resultados de inspecciones, seguimientos y actividades relacionadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué herramientas pueden usarse para evaluar la capacidad de un proceso?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Histogramas, gráficos de control y planillas de inspección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo entrevistas informales y observaciones sin registro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente carpetas físicas rotuladas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Máquinas de costura, folders y agujas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué indica un valor de Cp mayor a 1?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el proceso debe rechazarse siempre sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que el proceso potencialmente cumple con las especificaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que la media del proceso está fuera de las especificaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que no se pueden calcular límites superior e inferior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Según el análisis de CPK, ¿qué sucede cuando el valor es menor e igual a 0?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las prendas cumplen completamente con las especificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El proceso es exacto y preciso en todos sus resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La media del proceso está fuera de las especificaciones y se requieren grandes cambios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No se requiere monitoreo ni seguimiento del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Para qué se utilizan las cartas de monitoreo por atributos, como carta p, np y c?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para medir solo variables continuas como longitud o peso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reemplazar todos los reportes de fallas y errores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para calcular únicamente los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para monitorear características discretas o no conformidades cuando el producto se clasifica como conforme o no conforme.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
