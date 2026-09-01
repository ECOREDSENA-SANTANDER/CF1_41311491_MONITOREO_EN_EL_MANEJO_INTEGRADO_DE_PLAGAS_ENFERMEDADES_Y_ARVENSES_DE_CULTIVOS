<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre planeación del monitoreo de variables productivas para el manejo integrado de plagas, enfermedades y arvenses',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos adquiridos por el aprendiz sobre los fundamentos del monitoreo agrícola, la identificación y caracterización de las variables productivas del cultivo, la interpretación de los umbrales de daño, el uso de tecnologías y recursos para el monitoreo, así como la planeación de las actividades de monitoreo mediante metodologías y criterios técnicos que apoyen el manejo integrado de plagas, enfermedades y arvenses.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del monitoreo agrícola dentro del manejo integrado de plagas, enfermedades y arvenses?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar plaguicidas de forma periódica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener información confiable para apoyar la toma de decisiones técnicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el número de aplicaciones de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar únicamente inspecciones visuales del cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 2,
          texto:
            '¿Cuál de los siguientes principios establece que el monitoreo debe realizarse siguiendo una metodología previamente definida?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Objetividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representatividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistematicidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Oportunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 3,
          texto:
            '¿Cuál de las siguientes corresponde a una variable productiva del cultivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del tractor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rendimiento del cultivo por hectárea.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Precio del combustible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacidad del almacén.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 4,
          texto:
            '¿Qué permite identificar el monitoreo de las variables productivas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El valor comercial de la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El rendimiento financiero de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los factores que limitan la producción y afectan la sanidad del cultivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 5,
          texto:
            '¿Cuál es la finalidad de establecer un umbral de daño económico?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar cuándo es necesario intervenir para evitar pérdidas económicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular el costo del fertilizante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir la producción del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar los suelos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 6,
          texto:
            '¿Cuál de los siguientes factores influye en la determinación de un umbral de daño?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del uniforme del operario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Especie y variedad del cultivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Marca del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de trabajadores disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 7,
          texto:
            '¿Cuál es una variable climática de interés para el monitoreo agrícola?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura del aire.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio de los insumos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distancia a la ciudad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 8,
          texto: '¿Cuál de los siguientes corresponde a una variable edáfica?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dirección del viento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Humedad del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Radiación solar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nubosidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 9,
          texto: 'La fenología estudia principalmente:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los microorganismos del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las características del clima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los equipos de monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las etapas de desarrollo del cultivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 10,
          texto:
            '¿Qué relación existe entre las variables productivas y la sanidad del cultivo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe ninguna relación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten comprender los factores que favorecen o limitan el desarrollo de plagas, enfermedades y arvenses.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo sirven para calcular costos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente permiten medir la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes equipos se utiliza para registrar la ubicación geográfica durante el monitoreo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'GPS/GNSS.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conductímetro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Termómetro clínico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pluviómetro manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 12,
          texto: '¿Cuál es una función de los equipos de monitoreo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar completamente al personal técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar las plagas del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Obtener mediciones objetivas y precisas de las variables evaluadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir el análisis de la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 13,
          texto: '¿Qué ventaja ofrece el uso de sistemas GPS/GNSS?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar automáticamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el ciclo del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el monitoreo fitosanitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar la georreferenciación y repetición de los monitoreos en los mismos puntos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 14,
          texto: 'Antes de utilizar un equipo de monitoreo es recomendable:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizarlo sin revisar su estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar su funcionamiento y disponibilidad de baterías.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reiniciarlo continuamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar la configuración durante el monitoreo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 15,
          texto:
            '¿Cuál es la primera etapa para aplicar una metodología de monitoreo?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir los objetivos del monitoreo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar mapas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 16,
          texto:
            '¿Cuál de los siguientes criterios debe considerarse para seleccionar una metodología de monitoreo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El fabricante del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los objetivos del monitoreo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La marca del fertilizante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 17,
          texto:
            '¿Cuál es uno de los beneficios de programar adecuadamente los recursos tecnológicos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar el número de operarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar interrupciones durante el monitoreo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la superficie del cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 18,
          texto:
            '¿Qué criterio debe cumplir una tecnología seleccionada para el monitoreo agrícola?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener únicamente el menor costo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser la más reciente del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar exclusivamente conexión a internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar precisión en la medición y adaptarse a las condiciones del cultivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 19,
          texto:
            '¿Qué permite la caracterización de las variables productivas?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar únicamente las plagas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener información objetiva para evaluar el estado del cultivo y apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular únicamente el rendimiento económico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar exclusivamente variables climáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },

        {
          id: 20,
          texto:
            '¿Cuál es el resultado esperado de una adecuada planeación del monitoreo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la cantidad de información recolectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obtener información confiable, representativa y útil para la gestión del cultivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Realizar menos recorridos de inspección sin criterios técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente el análisis de datos por observaciones visuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos del componente formativo relacionados con la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la caracterización de las variables productivas y tecnologías para el monitoreo del manejo integrado de plagas, enfermedades y arvenses.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Revise nuevamente el componente formativo e intente de nuevo la actividad didáctica.',
    },
  }),
}
</script>
