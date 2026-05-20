export default {
  global: {
    Name: 'Gestión de información de la calidad',
    Description:
      'Las inspecciones de calidad requieren la medición de características propias de la calidad, así como de los componentes y materiales con los que se elabora la producción. Los sistemas de inspección permiten confirmar la eficacia del sistema de control de calidad y la tecnología mejora este proceso al interior de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de información de las inspecciones de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas TIC para registro de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistema de información de calidad',
            hash: 't_1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'cualquier característica de calidad que pueda ser clasificada de forma cumple o no cumple, funciona o no funciona, pasa o no pasa, a efectos de control del proceso será considerado como un atributo. Barbosa (2016, p. 33).',
    },
    {
      termino: '<em>Blockchain</em>',
      significado:
        'información organizada en bloques y entrelazadas en forma de cadenas, encriptada con el fin que nunca se pierda asegurando su seguridad.',
    },
    {
      termino: 'Capacidad de un proceso',
      significado:
        'es la aptitud de producir una prenda que cumpla con los requisitos determinados en los límites.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barbosa Correa, R. (2016). Monitoreo y análisis estadístico de proceso con aplicaciones. Universidad del Norte.',
      link: '',
    },
    {
      referencia: 'Salazar, B. (2019). Capacidad de procesos.',
      link: '',
    },
    {
      referencia:
        'Cortés, M. (2017). Ocho tecnologías que están transformando las bases de datos. REVISTA CIO MÉXICO.',
      link: '',
    },
    {
      referencia: 'Estadísticas de SPSS. Estadísticas de IBM SPSS. (2020).',
      link: '',
    },
    {
      referencia:
        'Oficina de Evaluación del PNUD. (2009). Manual de seguimiento y evaluación de resultados. B - PNUD.',
      link: '',
    },
    {
      referencia:
        'Pérez Marqués, M. (2016). Control de Calidad Técnicas y herramientas (1ª ed.). Editor Alfaomega Grupo.',
      link: '',
    },
    {
      referencia:
        'SAS. SAS: Analítica, inteligencia artificial y gestión de datos. (2020). ',
      link: '',
    },
    {
      referencia: 'STATGRAPHICS.NET. STATGRAPHICS Centurion 18. (2020).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: '--',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
