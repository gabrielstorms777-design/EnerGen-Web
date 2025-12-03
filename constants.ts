import { Product, Machine, ServiceItem } from './types';

export const WHATSAPP_NUMBER = "543755274157";
export const COMPANY_LOGO_URL = "https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/690661473081bc838e4020d0.png";
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/energeningenieria/",
  facebook: "https://www.facebook.com/energeningenieria/",
  email: "energen.obera@gmail.com"
};

// Generators Data
export const GENERATORS: Product[] = [
  // --- HOGAR ---
  {
    id: 'gen-h-45',
    name: 'EnerGen Home 4.5',
    category: 'HOGAR',
    power: '4.5 kVA',
    description: 'Generador naftero compacto, ideal para iluminación básica y pequeños electrodomésticos ante cortes imprevistos.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082737bbd8d72860b29ac.jpg'],
    features: ['Arranque manual/eléctrico', 'Portátil con ruedas', 'Bajo consumo']
  },
  {
    id: 'gen-solar',
    name: 'Banco de Carga Solar',
    category: 'HOGAR',
    power: 'Solar',
    description: 'Solución ecológica y silenciosa. Almacenamiento de energía limpia para respaldo esencial sin combustible.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082737bbd8d73a80b29b3.jpg'],
    features: ['Cero Emisiones', 'Silencio Absoluto', 'Energía Renovable']
  },
  {
    id: 'gen-h-75',
    name: 'EnerGen 7500',
    category: 'HOGAR',
    power: '7.5 kVA',
    description: 'Potencia confiable para hogares medianos. Capacidad para heladeras, luces y electrónica básica.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308273cecdd74642097790.jpg'],
    features: ['Voltímetro digital', 'Protección por aceite', 'Chasis reforzado']
  },
  {
    id: 'gen-h-80',
    name: 'EnerGen 8000',
    category: 'HOGAR',
    power: '8 kVA',
    description: 'El estándar para el hogar moderno. Robusto y preparado para soportar picos de arranque de motores.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082731d466e3d187658a3.jpg'],
    features: ['Tanque de gran capacidad', 'Salida 12V', 'Regulación AVR']
  },
  {
    id: 'gen-inv-8',
    name: 'Inverter Pro 8000',
    category: 'HOGAR',
    power: '8 kVA',
    description: 'Tecnología Inverter de onda pura. La máxima seguridad para computadoras, TVs y equipos sensibles.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308273e0f092b3f2679251.jpg'],
    features: ['Onda Sinusoidal Pura', 'Modo Eco', 'Súper Silencioso']
  },
  {
    id: 'gen-inv-9',
    name: 'Inverter Pro 9000',
    category: 'HOGAR',
    power: '9 kVA',
    description: 'Máxima potencia en formato Inverter. Eficiencia de combustible superior y diseño insonorizado.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082730cb77cbae17dd00d.jpg'],
    features: ['Pantalla Digital', 'Arranque Eléctrico', 'Alta Autonomía']
  },

  // --- COMERCIO ---
  {
    id: 'gen-c-13',
    name: 'EnerGen Pro 13.5',
    category: 'COMERCIO',
    power: '13.5 kVA',
    description: 'Equipo bicilíndrico ideal para comercios pequeños y oficinas. Estabilidad y potencia sostenida.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308273cecdd7369c097791.jpg'],
    features: ['Motor Bicilíndrico', 'Apto ATS', 'Uso Continuo']
  },
  {
    id: 'gen-c-15m',
    name: 'EnerGen 15000 Mono',
    category: 'COMERCIO',
    power: '15 kVA',
    description: 'Monofásico de alta capacidad. Perfecto para locales comerciales con alta demanda de iluminación y refrigeración.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308273abbae6826fed40db.jpg'],
    features: ['Refrigerado por aire', 'Panel de control completo', 'Salida Industrial']
  },
  {
    id: 'gen-c-16m',
    name: 'EnerGen 16000 Mono',
    category: 'COMERCIO',
    power: '16 kVA',
    description: 'El tope de gama en monofásicos refrigerados por aire. Potencia bruta para asegurar su negocio.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308273e0f0928d9267924f.jpg'],
    features: ['Gabinete Insonorizado', 'Motor Heavy Duty', 'Display LED']
  },
  {
    id: 'gen-c-16t',
    name: 'EnerGen 16000 Tri',
    category: 'COMERCIO',
    power: '16 kVA',
    description: 'Versión trifásica para equipamiento comercial específico (bombas, compresores, aires acondicionados centrales).',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082730cb77ce5807dd006.jpg'],
    features: ['Salida Trifásica', 'Balanceo de cargas', 'Protección térmica']
  },
  {
    id: 'gen-c-20d',
    name: 'Silent Diesel 20',
    category: 'COMERCIO',
    power: '20 kVA',
    description: 'Grupo diésel insonorizado de grado premium. Respaldo total para residencias grandes o comercio exigente.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082731d466e7def7658a2.jpg'],
    features: ['Motor Diesel 4 Tiempos', 'Cabina Super Silent', 'Refrigeración Líquida']
  },
  {
    id: 'gen-c-25',
    name: 'Silent Diesel 25',
    category: 'COMERCIO',
    power: '25 kVA',
    description: 'El equilibrio perfecto costo-beneficio para PyMEs. Robusto, económico y fiable.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308273abbae65fe3ed40dc.jpg'],
    features: ['Tanque Base Integrado', 'Controlador Digital', 'Autonomía Extendida']
  },
  {
    id: 'gen-perkins-30',
    name: 'Perkins Open 30',
    category: 'COMERCIO',
    power: '30 kVA',
    description: 'Grupo abierto con motorización tipo Perkins 3 cilindros. Ideal para salas de máquinas o aplicaciones agrícolas.',
    images: ['https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800'],
    features: ['Motor Tipo Perkins 3', 'Estructura Abierta (Skid)', 'Fácil Mantenimiento']
  },
  {
    id: 'gen-perkins-40',
    name: 'Perkins Open 40',
    category: 'COMERCIO',
    power: '40 kVA',
    description: 'Potencia industrial en formato abierto. Motor tipo Perkins 4 cilindros. Diseñado para trabajo duro y continuo.',
    images: ['https://images.unsplash.com/photo-1487800940032-1cf211187eea?auto=format&fit=crop&q=80&w=800'],
    features: ['Motor Tipo Perkins 4', 'Radiador Tropicalizado', 'Alternador Industrial']
  },

  // --- INDUSTRIA ---
  {
    id: 'gen-ind-50',
    name: 'PowerStation 50',
    category: 'INDUSTRIA',
    power: '50 kVA',
    description: 'Solución industrial compacta. Motor diésel de alto rendimiento para procesos que no pueden detenerse.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082731d466e46227658a4.jpg'],
    features: ['Gestión Electrónica', 'Gabinete IP54', 'Telemetría Opcional']
  },
  {
    id: 'gen-ind-70',
    name: 'PowerStation 70',
    category: 'INDUSTRIA',
    power: '70 kVA',
    description: 'Potencia seria para industrias, obras civiles y grandes eventos. Fiabilidad bajo condiciones extremas.',
    images: ['https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693082730cb77ce6897dd005.jpg'],
    features: ['Turbo Intercooler', 'Regulación Electrónica', 'Tanque Diario Incorporado']
  }
];

// Machinery Data
export const MACHINES: Machine[] = [
  {
    id: 'mac-sampi',
    name: 'Autoelevador 2500kg',
    type: 'LOGÍSTICA',
    description: 'Autoelevador diesel robusto. Capacidad de carga 2.5 toneladas. Torre triple para máxima altura de estiba.',
    imageUrl: 'https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693084d01d466ea37576da17.jpeg'
  },
  {
    id: 'mac-lovol-354',
    name: 'Tractor Lovol 354',
    type: 'AGRÍCOLA',
    description: 'Versatilidad compacta. Tracción 4WD, ideal para invernáculos, granjas y mantenimiento de espacios verdes.',
    imageUrl: 'https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/693085860cb77cb8777e63b5.png'
  },
  {
    id: 'mac-lovol-604',
    name: 'Tractor Lovol 604',
    type: 'AGRÍCOLA',
    description: 'Potencia media para el productor exigente. Cabina climatizada y sistema hidráulico de alto caudal.',
    imageUrl: 'https://images.unsplash.com/photo-1627308992686-2f08a8a4746e?auto=format&fit=crop&q=80&w=800' // Placeholder
  },
  {
    id: 'mac-lovol-256',
    name: 'Tractor Lovol 256',
    type: 'AGRÍCOLA',
    description: 'El aliado perfecto para tareas ligeras y espacios reducidos. Económico y ágil.',
    imageUrl: 'https://images.unsplash.com/photo-1562681571-085e4922112d?auto=format&fit=crop&q=80&w=800' // Placeholder
  },
  {
    id: 'mac-bull-hd96',
    name: 'Retroexcavadora Bull HD96',
    type: 'VIAL',
    description: 'Excavación profunda y carga potente. Transmisión Carraro y motor de alta eficiencia.',
    imageUrl: 'https://images.unsplash.com/photo-1542144362-e9c5f8999818?auto=format&fit=crop&q=80&w=800' // Placeholder
  },
  {
    id: 'mac-bull-skid',
    name: 'Minicargadora Bull',
    type: 'VIAL',
    description: 'Agilidad total en obra. Compatible con múltiples accesorios (martillo, hoyadora, barredora).',
    imageUrl: 'https://images.unsplash.com/photo-1579626359051-4b77f3299767?auto=format&fit=crop&q=80&w=800' // Placeholder
  },
  {
    id: 'mac-lovol-fl917',
    name: 'Cargadora Lovol FL917',
    type: 'VIAL',
    description: 'Pala cargadora articulada. Diseño optimizado para movimiento de suelos y carga de áridos.',
    imageUrl: 'https://images.unsplash.com/photo-1587841571221-87b61f8a7065?auto=format&fit=crop&q=80&w=800' // Placeholder
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Ingeniería y Dimensionamiento',
    description: 'No adivine. Nuestros ingenieros realizan estudios de carga precisos para determinar la potencia exacta que su proyecto requiere.',
    iconName: 'Ruler'
  },
  {
    title: 'Instalación "Llave en Mano"',
    description: 'Ejecución integral: desde la obra civil y tableros de transferencia automática (TTA) hasta la puesta en marcha certificada.',
    iconName: 'Wrench'
  },
  {
    title: 'Mantenimiento Preventivo',
    description: 'Planes de servicio programado para maximizar la vida útil de su inversión y prevenir fallas críticas.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Post-Venta Especializada',
    description: 'Stock permanente de repuestos originales y equipo técnico de respuesta rápida ante emergencias.',
    iconName: 'Headphones'
  }
];