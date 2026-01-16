
import { AuditSection, FaqItem, BenefitItem, BlogPost, RoadmapStep } from './types';

export const AUDIT_SECTIONS: AuditSection[] = [
  {
    id: 'pm-cro',
    role: 'Product Manager & CRO',
    title: 'Optimización de Embudo y Confianza',
    icon: 'fa-layer-group',
    points: [
      {
        problem: 'La landing es muy transaccional, falta "calentar" al prospecto con educación.',
        solution: 'Insertar una sección de "Pasos" para que el usuario visualice el proceso.',
        action: 'Agregar sección "Tu Camino al Azul" después de beneficios.'
      },
      {
        problem: 'Falta validación externa inmediata en el Hero.',
        solution: 'Incluir badge de "Google Reviews 5.0" y "PADI Award".',
        action: 'Actualizar Hero con micro-badges de confianza.'
      }
    ]
  },
  {
    id: 'seo-content',
    role: 'SEO & Content Strategist',
    title: 'Autoridad y Tráfico Orgánico',
    icon: 'fa-magnifying-glass-chart',
    points: [
      {
        problem: 'No hay contenido para usuarios que están en etapa de investigación (TOFU).',
        solution: 'Crear un HUB de contenidos que resuelva miedos y dudas técnicas.',
        action: 'Implementar sección de Blog con 8 pilares estratégicos.'
      },
      {
        problem: 'El "Quiénes Somos" suele ser genérico en el sector.',
        solution: 'Enfocar la historia en el compromiso con el ecosistema y la seguridad.',
        action: 'Sección "Nuestro Compromiso" con foto del equipo fundador.'
      }
    ]
  }
];

export const ROADMAP: RoadmapStep[] = [
  {
    number: "01",
    title: "Sacate las dudas",
    description: "Hablá con un instructor por WhatsApp. Te contamos todo sin compromiso."
  },
  {
    number: "02",
    title: "Clase Teórica Divertida",
    description: "Aprendés lo básico de forma online o presencial. Cero complicaciones."
  },
  {
    number: "03",
    title: "Primeras Prácticas",
    description: "Empezamos en aguas poco profundas para que ganes total confianza."
  },
  {
    number: "04",
    title: "¡Al Agua!",
    description: "Sumergite y descubrí un mundo nuevo con tu certificación oficial."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "¿Es peligroso el buceo? Mitos y realidades para principiantes",
    excerpt: "Todo lo que tenés que saber antes de tu primer bautismo para estar 100% tranquilo.",
    category: "Seguridad",
    image: "https://picsum.photos/seed/diving_blog1/400/250"
  },
  {
    title: "Los 5 mejores lugares para bucear en Argentina",
    excerpt: "Desde Madryn hasta el fin del mundo, las joyas ocultas de nuestro mar.",
    category: "Destinos",
    image: "https://picsum.photos/seed/diving_blog2/400/250"
  },
  {
    title: "Cómo elegir tu primera máscara de buceo",
    excerpt: "Guía completa para que tu equipo te dure años y sea cómodo.",
    category: "Equipo",
    image: "https://picsum.photos/seed/diving_blog3/400/250"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿Necesito saber nadar como un experto?",
    answer: "No, para el bautismo solo necesitás sentirte cómodo en el agua. Nuestros instructores te acompañan en cada segundo."
  },
  {
    question: "¿Qué pasa si me da miedo?",
    answer: "Es normal. Trabajamos con grupos reducidos para que tengas atención personalizada y te sientas seguro antes de sumergirte."
  },
  {
    question: "¿Tengo que llevar equipo propio?",
    answer: "Para nada. Nosotros te damos todo lo necesario: traje, máscara, aletas y tanque. Vos solo traé la malla y ganas de disfrutar."
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Seguridad Premium",
    description: "Equipos nuevos y mantenimiento riguroso bajo estándares internacionales PADI.",
    icon: "fa-shield-halved"
  },
  {
    title: "Instructores Locales",
    description: "Expertos argentinos que conocen cada rincón de nuestros destinos.",
    icon: "fa-users"
  },
  {
    title: "Grupos Reducidos",
    description: "Nunca vas a ser un número. Máximo 4 personas por instructor para tu seguridad.",
    icon: "fa-person-swimming"
  }
];
