// Business FAQ responses run locally. No external AI service or API key is used.
export function sendMessageToAssistant(message: string, _history: string[], language: 'en' | 'es'): string {
  const text = message.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const es = language === 'es' || /\b(hola|buenas|precio|cuanto|cotizacion|limpieza|horario|gracias|remodelacion|pintura|atienden|donde)\b/.test(text);
  if (/\b(precio|cuanto|costo|cotiza|cotizacion|quote|price|cost|estimate|presupuesto)\b/.test(text)) return es
    ? 'La cotización depende del tamaño del espacio, su estado y las tareas que necesitas. Cuéntanos tu ciudad, el servicio y el tamaño aproximado por WhatsApp para recibir una cotización personalizada.'
    : 'Pricing depends on the size and condition of your space and the work you need. Share your town, service and approximate size on WhatsApp for a personalized quote.';
  if (/\b(horario|hora|fecha|disponible|disponibilidad|cita|agendar|schedule|hours|available|availability|appointment|book)\b/.test(text)) return es
    ? 'Las fechas y los horarios se confirman directamente con nuestro equipo. Envíanos por WhatsApp tu ciudad, el servicio y la fecha que prefieres. Tu solicitud todavía no confirma una cita.'
    : 'Our team confirms dates and times directly. Send your town, service and preferred date on WhatsApp. A request is not a confirmed appointment.';
  if (/\b(zona|cobertura|donde|atienden|connecticut|norwich|rhode|area|coverage|location|town)\b/.test(text)) return es
    ? 'Trabajamos en Connecticut y alrededores. Comparte tu ciudad o código postal por WhatsApp para confirmar la cobertura en tu dirección.'
    : 'We serve Connecticut and surrounding areas. Share your town or ZIP code on WhatsApp to confirm coverage for your address.';
  if (/\b(remodelacion|pintura|remodeling|painting|paint|pisos|flooring|drywall)\b/.test(text)) return es
    ? 'Puedes solicitar remodelación y pintura, instalación de pisos y acabados. Comparte los detalles de tu proyecto con nuestro equipo para acordar el alcance y una cotización.'
    : 'You can request remodeling, painting, flooring installation and finishing work. Share your project details with our team to discuss the scope and a quote.';
  if (/\b(comercial|oficina|negocio|commercial|office|business)\b/.test(text)) return es
    ? 'Ofrecemos limpieza para oficinas, tiendas y espacios compartidos. Indícanos el tamaño, las áreas que necesitas limpiar y el horario preferido para conversar sobre un plan.'
    : 'We offer cleaning for offices, stores and shared spaces. Tell us the approximate size, the areas to clean and your preferred schedule to discuss a plan.';
  if (/\b(servicio|servicios|limpieza|residencial|casa|hogar|services|cleaning|home|residential|clean)\b/.test(text)) return es
    ? 'Nuestros servicios son limpieza residencial, limpieza comercial y remodelación y pintura. Para el hogar, puedes consultar limpieza de cocinas, baños y espacios comunes. ¿Qué servicio necesitas?'
    : 'Our services include residential cleaning, commercial cleaning, and remodeling and painting. For your home, ask about kitchens, bathrooms and shared living spaces. Which service do you need?';
  if (/\b(hola|buenas|hello|hi|hey)\b/.test(text)) return es
    ? '¡Hola! Puedo orientarte sobre servicios, cotizaciones, cobertura y disponibilidad. Elige una consulta rápida o cuéntame qué necesitas.'
    : 'Hi! I can help with services, quotes, coverage and availability. Choose a quick question or tell me what you need.';
  if (/\b(gracias|thanks|thank)\b/.test(text)) return es ? '¡Con gusto! Si necesitas una cotización, puedes continuar con nuestro equipo por WhatsApp.' : 'You’re welcome! If you need a quote, continue with our team on WhatsApp.';
  return es
    ? 'Para responder esa consulta con precisión, nuestro equipo puede ayudarte por WhatsApp. Puedes usar el botón de abajo para continuar con tu pregunta.'
    : 'Our team can help answer that question on WhatsApp. Use the button below to continue with your question.';
}
