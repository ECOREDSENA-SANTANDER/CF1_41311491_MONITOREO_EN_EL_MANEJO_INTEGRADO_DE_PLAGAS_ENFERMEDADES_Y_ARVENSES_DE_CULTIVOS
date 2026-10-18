export default {
  global: {
    Name: 'Caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses',
    Description:
      'Este componente desarrolla las competencias para caracterizar las variables productivas del cultivo, considerando factores climáticos, edáficos y biológicos que influyen en el manejo integrado de plagas, enfermedades y arvenses. Aborda el monitoreo agrícola, la identificación de variables productivas, los umbrales de daño económico y el uso de tecnologías y metodologías para recopilar información confiable que facilite la toma de decisiones técnicas.',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo:
          'Fundamentos del monitoreo en el manejo integrado de plagas, enfermedades y arvenses',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y principios del monitoreo agrícola',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Plagas, enfermedades y arvenses como variables de monitoreo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Umbrales de daño y criterios para la toma de decisiones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables ambientales y productivas asociadas al cultivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Variables climáticas de interés agrícola',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables edáficas para el monitoreo del cultivo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Fenología, fisiología y factores limitantes de la producción',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Relación entre las variables productivas y la sanidad del cultivo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tecnologías y recursos para el monitoreo agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Equipos para monitoreo y medición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Recursos, herramientas e insumos utilizados en el monitoreo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistemas de posicionamiento global (GPS/GNSS)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Equipos de geoposicionamiento satelital',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación del monitoreo de variables productivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Metodologías de monitoreo en cultivos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Programación de recursos tecnológicos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Selección de tecnologías según las variables a monitorear',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Criterios técnicos para la caracterización de las variables productivas',
            hash: 't_4_4',
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
  glosario: [
    {
      termino: 'Arvenses',
      significado:
        'Plantas que crecen de forma espontánea en los cultivos y que pueden competir con las especies agrícolas por agua, luz, nutrientes y espacio, afectando el desarrollo y la productividad.',
    },
    {
      termino: 'Caracterización',
      significado:
        'Proceso de identificación, descripción y análisis de las variables productivas y ambientales de un cultivo para conocer su estado y apoyar la toma de decisiones técnicas.',
    },
    {
      termino: 'Fenología',
      significado:
        'Rama que estudia las diferentes etapas de crecimiento y desarrollo de los cultivos, desde la germinación hasta la cosecha, y su relación con las condiciones ambientales.',
    },
    {
      termino: 'Fisiología vegetal',
      significado:
        'Ciencia que estudia el funcionamiento de las plantas, incluyendo procesos como la fotosíntesis, respiración, absorción de agua y nutrientes, y crecimiento.',
    },
    {
      termino: 'Geoposicionamiento satelital',
      significado:
        'Tecnología que permite determinar la ubicación geográfica de un punto mediante la recepción de señales provenientes de satélites, facilitando la georreferenciación de la información.',
    },
    {
      termino: 'GPS/GNSS',
      significado:
        'Sistema de posicionamiento global y de navegación por satélite utilizado para obtener coordenadas geográficas precisas durante las actividades de monitoreo agrícola.',
    },
    {
      termino: 'Monitoreo agrícola',
      significado:
        'Proceso sistemático de observación, medición y registro de variables productivas y ambientales del cultivo para evaluar su comportamiento y apoyar el manejo integrado.',
    },
    {
      termino: 'Plaga',
      significado:
        'Organismo que ocasiona daños al cultivo al alimentarse de sus tejidos o interferir con su desarrollo, generando pérdidas económicas cuando supera determinados niveles de población.',
    },
    {
      termino: 'Recursos tecnológicos',
      significado:
        'Equipos, herramientas, dispositivos y aplicaciones utilizados para recolectar, registrar, almacenar y procesar información durante el monitoreo agrícola.',
    },
    {
      termino: 'Sanidad del cultivo',
      significado:
        'Estado fitosanitario del cultivo determinado por la presencia o ausencia de plagas, enfermedades, arvenses y otros factores que afectan su crecimiento y productividad.',
    },
    {
      termino: 'Tecnologías de monitoreo',
      significado:
        'Conjunto de equipos, sensores, sistemas de posicionamiento y herramientas digitales empleadas para obtener información objetiva y georreferenciada del cultivo.',
    },
    {
      termino: 'Umbral de daño económico',
      significado:
        'Nivel de incidencia o severidad de una plaga, enfermedad o arvense a partir del cual las pérdidas económicas justifican la implementación de medidas de control.',
    },
    {
      termino: 'Variable climática',
      significado:
        'Factor meteorológico, como temperatura, precipitación, humedad relativa, radiación solar o velocidad del viento, que influye en el desarrollo del cultivo y de los organismos asociados.',
    },
    {
      termino: 'Variable edáfica',
      significado:
        'Característica física, química o biológica del suelo, como humedad, textura, pH o materia orgánica, que incide en el crecimiento y productividad del cultivo.',
    },
    {
      termino: 'Variable productiva',
      significado:
        'Parámetro relacionado con las condiciones del cultivo, el suelo, el clima o el estado fitosanitario que es objeto de observación y medición para apoyar la toma de decisiones en el manejo integrado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrotech Campus. (s. f.). Tecnologías de monitoreo agrícola.',
      link: '',
    },
    {
      referencia: 'Econatur. (s. f.). Herramientas de monitoreo agrícola.',
      link: '',
    },
    {
      referencia:
        'Farmonaut. (s. f.). Monitoreo de cultivos: 5 tecnologías clave para la agricultura de precisión.',
      link: '',
    },
    {
      referencia:
        'Juaneda, J. (s. f.). Técnicas avanzadas de monitoreo de cultivos para maximizar el rendimiento agrícola.',
      link: '',
    },
    {
      referencia:
        'RStudio Pubs. (s. f.). Estadística descriptiva y geoestadística.',
      link: '',
    },
    {
      referencia: 'Trackit Agro. (s. f.). Agricultura de precisión: monitoreo.',
      link: '',
    },
    {
      referencia:
        'Unidad de Planificación Rural Agropecuaria (UPRA). (s. f.). Monitoreo de cultivos.',
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
            'Profesional G06. Responsable del Ecosistema de Recursos Educativos Digitales',
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
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejia Pinzon',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
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
