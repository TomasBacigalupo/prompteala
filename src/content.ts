export type Lang = 'es' | 'en'

export type ChapterId =
  | 'home'
  | 'openai'
  | 'agente'
  | 'modelo'
  | 'qwen'
  | 'router'
  | 'invierno'
  | 'escala'
  | 'apague'
  | 'ingenieria'
  | 'arquitectura'
  | 'aprendido'
  | 'tesis'

export const chapters: {
  id: ChapterId
  num?: string
  es: string
  en: string
}[] = [
  { id: 'home', es: 'Inicio', en: 'Home' },
  { id: 'openai', num: '01', es: 'OpenAI', en: 'OpenAI' },
  { id: 'agente', num: '02', es: 'Inmobiliaria', en: 'Agency' },
  { id: 'modelo', num: '03', es: '¿Tan grande?', en: 'That big?' },
  { id: 'qwen', num: '04', es: 'Primer local', en: 'First local' },
  { id: 'router', num: '05', es: 'Local + Cloud', en: 'Local + Cloud' },
  { id: 'invierno', num: '06', es: 'Invierno', en: 'Winter' },
  { id: 'escala', num: '07', es: 'Escala', en: 'Scale' },
  { id: 'apague', num: '08', es: 'Reset', en: 'Reset' },
  { id: 'ingenieria', num: '09', es: 'Menos magia', en: 'Less magic' },
  { id: 'arquitectura', num: '10', es: 'Arquitectura', en: 'Architecture' },
  { id: 'aprendido', num: '11', es: 'Aprendido', en: 'Learned' },
  { id: 'tesis', num: '12', es: 'La idea', en: 'The idea' },
]

export const copy = {
  es: {
    brand: 'LOCAL LLMs',
    brandSub: 'Una charla',
    kicker: 'VIEW TALK ARTIFACTS',
    heroTitle: 'Cómo llegué\na los LLM\nlocales',
    heroCta: 'Empezar',
    heroMetaA: 'TOMÁS BACIGALUPO',
    heroMetaB: 'CHARLA · 2026',
    inAction: 'La historia en acción',
    cookbooks: 'AUTOMATIZACIONES',
    demos: 'PUNTOS DE QUIEBRE',
    thesisTitle: 'Tesis',
    thesisLink: 'Saltar al final',
    copyQuote: 'Copiar la idea',
    copied: 'Copiado',
    speaker: 'Tomás Bacigalupo',
    speakerOrg: 'Charla · LLM locales',
    presentHint: 'Click izq/der · ← → · P escenario',
    quote:
      'El modelo correcto, para la tarea correcta, corriendo en el lugar correcto.',
    cookCards: [
      {
        title: 'Inmobiliaria familiar',
        body: 'Data entry, avisos, consultas, análisis y cierre de mes. Un agente que por primera vez hacía cosas.',
      },
      {
        title: 'Correcciones de esquí',
        body: 'El primer uso de OpenAI. Después OpenClaw. El consumo empezó a crecer, y con él la factura.',
      },
      {
        title: 'Fallback local → GPT',
        body: 'Tareas simples en la máquina. Tareas complejas en la nube. Dejé de elegir entre todo o nada.',
      },
    ],
    breakCards: [
      {
        title: 'Límites de cuenta',
        body: 'No llegué a lo local por romanticismo. Llegué porque me choqué con los límites de OpenAI.',
      },
      {
        title: 'WhatsApp suspendido',
        body: 'Un día de suspensión. Después un intento de hijack. El problema ya no era el modelo.',
      },
      {
        title: 'Desenchufar la Mini',
        body: 'El gesto menos sofisticado posible. Y el más útil: volver a las bases, con menos superficie.',
      },
    ],
    sections: {
      openai: {
        kicker: '01 · EL PRIMER CHOQUE',
        title: 'Yo no empecé por la IA local',
        lead: 'Llegué a los LLM locales por un problema bastante más simple: me empecé a chocar con los límites de mi cuenta de OpenAI.',
        body: 'En ese momento ya usaba OpenAI para procesar correcciones de esquí. Después empecé a jugar con OpenClaw y el consumo de modelos empezó a crecer bastante. Y ahí apareció mi primer problema.',
      },
      agente: {
        kicker: '02 · EL PRIMER AGENTE',
        title: 'Un ayudante para la inmobiliaria de mi familia',
        lead: 'La idea era simple: sacar tareas repetitivas del día a día y dejar que un agente se encargara de parte del trabajo.',
        pills: [
          'Data entry',
          'Carga y actualización',
          'Publicación de avisos',
          'Consultas de datos',
          'Análisis',
          'Cierre de mes',
        ],
        body: 'El agente tenía skills de Google que había encontrado y descargado, además de scripts que fui construyendo con Cursor. En realidad, no había tanta magia.',
        formula: 'LLM + APIs + scripts + herramientas + datos.',
        closer:
          'Pero combinados de una manera que permitía que alguien de mi familia pudiera simplemente hablar con el agente y delegarle determinadas tareas. Por primera vez no era un chatbot. Era un asistente que podía hacer cosas.',
      },
      modelo: {
        kicker: '03 · LA PREGUNTA',
        title: '¿Realmente necesitaba un modelo tan grande?',
        quote: 'Para muchas de estas tareas, ¿realmente necesito pagar por un modelo frontier?',
        tasks: [
          'Consultar un precio',
          'Buscar información',
          'Cargar un dato',
          'Clasificar algo',
          'Pegarle a una API',
          'Generar una respuesta sencilla',
        ],
        body: 'No necesitaba el modelo más inteligente del mundo para hacer eso. Y ahí empecé a probar LLMs locales.',
      },
      qwen: {
        kicker: '04 · EL PRIMER MODELO',
        title: 'Qwen, y después modelos más chicos',
        cards: [
          {
            title: 'Qwen',
            meta: 'Código',
            body: 'Me sorprendió para tareas de código. Para programar funcionaba muy bien. Para tareas más generales, se quedaba corto.',
          },
          {
            title: 'Gemma 2B / 4B',
            meta: 'General',
            body: 'Más lentos. Más limitados que OpenAI. Pero había algo muy interesante: eran gratis. Y corrían en mi máquina.',
          },
        ],
      },
      router: {
        kicker: '05 · LA ARQUITECTURA',
        title: 'No tenía por qué elegir',
        lead: 'Todo local o todo en la nube era una falsa dicotomía. Podía hacer un fallback.',
        local: 'tareas simples',
        cloud: 'tareas complejas',
        body: 'La mayor parte de las tareas básicas podían correr gratis y localmente. Y solamente pagaba por un modelo más potente cuando realmente lo necesitaba.',
      },
      invierno: {
        kicker: '06 · PRODUCCIÓN',
        title: 'Después llegó el invierno',
        lead: 'Esta temporada fue una locura de nieve. Al principio costó arrancar, pero cuando finalmente llegó, el negocio empezó a crecer muy rápido.',
        body: 'Lo que había funcionado como experimento empezó a tener que funcionar en un ambiente real. Más usuarios. Más mensajes. Más consultas. Más automatizaciones. Más APIs. Más procesos corriendo al mismo tiempo.',
        closer: 'Y empecé a llevar una arquitectura similar a producción, pero utilizando infraestructura local.',
      },
      escala: {
        kicker: '07 · CUANDO ESCALA',
        title: 'La Mac Mini no estaba dedicada a esto',
        lead: 'Tenía servicios, scripts, automatizaciones y procesos corriendo al mismo tiempo. Cuanto más cosas dependían de ese servidor, más compleja se volvía la situación.',
        incidents: [
          {
            title: 'WhatsApp me suspendió un día',
            body: 'El primer golpe no tuvo nada que ver con la calidad del modelo.',
          },
          {
            title: 'Me hackearon WhatsApp',
            body: 'Lograron sacarme de mi cuenta, aunque no llegaron a entrar completamente.',
          },
        ],
        shift: 'El problema ya no era “¿qué modelo estoy usando?”',
        concerns: [
          'Seguridad',
          'Credenciales',
          'Servicios',
          'Disponibilidad',
          'Infraestructura',
          'Permisos',
          'Superficie de ataque',
          'Qué puede ejecutar un agente',
        ],
      },
      apague: {
        kicker: '08 · RESET',
        title: 'Desenchufé la Mac Mini',
        lead: 'Hice algo bastante poco sofisticado para un ingeniero: apagué todo. Y volví a las bases.',
        body: 'Pero esta vez con una idea diferente. No quería un agente que pudiera hacer cualquier cosa. Quería un agente mucho más acotado.',
      },
      ingenieria: {
        kicker: '09 · MENOS MAGIA',
        title: 'Más ingeniería, menos superficie',
        from: '¿Qué puede hacer este agente?',
        to: '¿Qué operaciones específicas permito que haga este agente?',
        allowed: [
          'Consultar precios',
          'Consultar información',
          'Consultar disponibilidad',
          'Devolver información al usuario',
        ],
        body: 'Cuando necesitaba hacer algo más, lo hacía a través de API hooks que yo controlaba. Eso hizo que todo fuera mucho más predecible.',
      },
      arquitectura: {
        kicker: '10 · EL SISTEMA',
        title: 'El LLM ya no era el sistema',
        lead: 'Base de datos local. API local. LLM local. Y solamente algunas APIs externas cuando realmente eran necesarias.',
        closer: 'El LLM era simplemente una pieza dentro del sistema.',
      },
      aprendido: {
        kicker: '11 · LO QUE QUEDÓ',
        title: 'Por qué me interesan realmente',
        lead: 'No porque sean mejores que los modelos cloud. En muchas tareas todavía no lo son. Sino porque permiten cambiar la arquitectura de una aplicación.',
        lessons: [
          {
            title: 'No todo necesita GPT',
            body: 'Muchas tareas son suficientemente simples como para correr con modelos pequeños.',
          },
          {
            title: 'El LLM no es el producto',
            body: 'El producto termina siendo LLM + tools + APIs + data + rules + UX.',
          },
          {
            title: 'Local y cloud no son opuestos',
            body: 'Podés combinar ambos: barato y privado acá, potente y rápido allá.',
          },
          {
            title: 'Los agentes agrandan la superficie',
            body: 'Un chatbot que responde es una cosa. Un agente que consulta, ejecuta, modifica y envía es otra.',
          },
          {
            title: 'El hardware cambió',
            body: 'Hoy una máquina relativamente accesible corre modelos suficientemente buenos para una cantidad sorprendentemente grande de tareas.',
          },
        ],
      },
      tesis: {
        kicker: '12 · LA IDEA',
        title: 'No llegué porque quisiera una IA local',
        timeline: [
          'Un problema de costos',
          'Un problema de escalabilidad',
          'Un problema de seguridad',
        ],
        body: 'Y finalmente terminé entendiendo que muchas veces no necesito la IA más potente posible.',
        need: 'Necesito el modelo correcto, para la tarea correcta, corriendo en el lugar correcto.',
        closer: 'Y esa es, para mí, la razón por la que los LLM locales se volvieron interesantes.',
      },
    },
    footer: [
      { id: 'modelo', label: 'No todo es GPT', hint: 'Modelos chicos' },
      { id: 'arquitectura', label: 'LLM ≠ producto', hint: 'Sistema' },
      { id: 'router', label: 'Local + Cloud', hint: 'Fallback' },
      { id: 'escala', label: 'Superficie', hint: 'Agentes' },
      { id: 'tesis', label: 'El lugar correcto', hint: 'Tesis' },
    ],
  },
  en: {
    brand: 'LOCAL LLMs',
    brandSub: 'A talk',
    kicker: 'VIEW TALK ARTIFACTS',
    heroTitle: 'How I got\nto local\nLLMs',
    heroCta: 'Start',
    heroMetaA: 'TOMÁS BACIGALUPO',
    heroMetaB: 'TALK · 2026',
    inAction: 'The story in action',
    cookbooks: 'AUTOMATIONS',
    demos: 'BREAKING POINTS',
    thesisTitle: 'Thesis',
    thesisLink: 'Skip to the end',
    copyQuote: 'Copy the idea',
    copied: 'Copied',
    speaker: 'Tomás Bacigalupo',
    speakerOrg: 'Talk · Local LLMs',
    presentHint: 'Click left/right · ← → · P stage',
    quote:
      'The right model, for the right task, running in the right place.',
    cookCards: [
      {
        title: 'Family real-estate agency',
        body: 'Data entry, listings, queries, analysis, month-end. An agent that could actually do things.',
      },
      {
        title: 'Ski corrections',
        body: 'The first OpenAI use. Then OpenClaw. Usage grew, and so did the bill.',
      },
      {
        title: 'Local → GPT fallback',
        body: 'Simple tasks on the machine. Complex tasks in the cloud. I stopped choosing all or nothing.',
      },
    ],
    breakCards: [
      {
        title: 'Account limits',
        body: 'I did not get to local out of romance. I got there because I hit OpenAI’s limits.',
      },
      {
        title: 'WhatsApp suspended',
        body: 'A one-day ban. Then a hijack attempt. The problem was no longer the model.',
      },
      {
        title: 'Unplugging the Mini',
        body: 'The least sophisticated move possible. And the most useful: back to basics, less surface area.',
      },
    ],
    sections: {
      openai: {
        kicker: '01 · THE FIRST HIT',
        title: 'I did not start with local AI',
        lead: 'I got to local LLMs because of a much simpler problem: I started hitting the limits of my OpenAI account.',
        body: 'I was already using OpenAI to process ski corrections. Then I started playing with OpenClaw and model usage grew fast. That is when the first problem showed up.',
      },
      agente: {
        kicker: '02 · THE FIRST AGENT',
        title: 'A helper for my family’s real-estate agency',
        lead: 'The idea was simple: take repetitive daily work off people’s plates and let an agent handle part of it.',
        pills: [
          'Data entry',
          'Load and update records',
          'Publish listings',
          'Query data',
          'Analysis',
          'Month-end close',
        ],
        body: 'The agent had Google skills I had found and downloaded, plus scripts I built with Cursor. There was not that much magic.',
        formula: 'LLM + APIs + scripts + tools + data.',
        closer:
          'Combined in a way that let someone in my family just talk to the agent and delegate work. For the first time it was not a chatbot. It was an assistant that could do things.',
      },
      modelo: {
        kicker: '03 · THE QUESTION',
        title: 'Did I really need a model that big?',
        quote: 'For a lot of these tasks, do I really need to pay for a frontier model?',
        tasks: [
          'Look up a price',
          'Search for information',
          'Write a record',
          'Classify something',
          'Hit an API',
          'Generate a simple reply',
        ],
        body: 'I did not need the smartest model in the world for that. So I started trying local LLMs.',
      },
      qwen: {
        kicker: '04 · THE FIRST MODEL',
        title: 'Qwen, then smaller models',
        cards: [
          {
            title: 'Qwen',
            meta: 'Code',
            body: 'It surprised me for coding. Great at programming. A bit short for more general work.',
          },
          {
            title: 'Gemma 2B / 4B',
            meta: 'General',
            body: 'Slower. More limited than OpenAI. But they were free. And they ran on my machine.',
          },
        ],
      },
      router: {
        kicker: '05 · THE ARCHITECTURE',
        title: 'I did not have to choose',
        lead: 'All-local or all-cloud was a false choice. I could build a fallback.',
        local: 'simple tasks',
        cloud: 'complex tasks',
        body: 'Most basic work could run free and locally. I only paid for a stronger model when I actually needed it.',
      },
      invierno: {
        kicker: '06 · PRODUCTION',
        title: 'Then winter arrived',
        lead: 'This season was a snow madness. It was slow to start, but when the snow finally came, the business grew very fast.',
        body: 'What had worked as an experiment now had to work in a real environment. More users. More messages. More queries. More automations. More APIs. More processes at once.',
        closer: 'I started taking a similar architecture to production, on local infrastructure.',
      },
      escala: {
        kicker: '07 · WHEN IT SCALES',
        title: 'The Mac Mini was not dedicated to this',
        lead: 'It was running services, scripts, automations and other processes at the same time. The more things depended on that box, the messier it got.',
        incidents: [
          {
            title: 'WhatsApp suspended me for a day',
            body: 'The first hit had nothing to do with model quality.',
          },
          {
            title: 'They hijacked WhatsApp',
            body: 'They managed to kick me out of the account, even if they did not fully get in.',
          },
        ],
        shift: 'The question was no longer “which model am I using?”',
        concerns: [
          'Security',
          'Credentials',
          'Services',
          'Availability',
          'Infrastructure',
          'Permissions',
          'Attack surface',
          'What an agent can actually run',
        ],
      },
      apague: {
        kicker: '08 · RESET',
        title: 'I unplugged the Mac Mini',
        lead: 'I did something fairly unsophisticated for an engineer: I turned everything off. And went back to basics.',
        body: 'This time with a different idea. I did not want an agent that could do anything. I wanted a much narrower agent.',
      },
      ingenieria: {
        kicker: '09 · LESS MAGIC',
        title: 'More engineering, less surface',
        from: 'What can this agent do?',
        to: 'Which specific operations do I allow this agent to do?',
        allowed: [
          'Look up prices',
          'Look up information',
          'Check availability',
          'Return information to the user',
        ],
        body: 'Anything else went through API hooks I controlled. That made the whole system much more predictable.',
      },
      arquitectura: {
        kicker: '10 · THE SYSTEM',
        title: 'The LLM was no longer the system',
        lead: 'Local database. Local API. Local LLM. And only a few external APIs when they were truly needed.',
        closer: 'The LLM was just one piece inside the system.',
      },
      aprendido: {
        kicker: '11 · WHAT STUCK',
        title: 'Why local LLMs actually matter to me',
        lead: 'Not because they are better than cloud models. On many tasks they still are not. Because they let you change the architecture of an application.',
        lessons: [
          {
            title: 'Not everything needs GPT',
            body: 'Plenty of tasks are simple enough for small models.',
          },
          {
            title: 'The LLM is not the product',
            body: 'The product ends up being LLM + tools + APIs + data + rules + UX.',
          },
          {
            title: 'Local and cloud are not opposites',
            body: 'You can combine both: cheap and private here, powerful and fast there.',
          },
          {
            title: 'Agents widen the attack surface',
            body: 'A chatbot that answers is one thing. An agent that queries, runs, edits and sends is another.',
          },
          {
            title: 'The hardware changed',
            body: 'A relatively accessible machine can now run models good enough for a surprisingly large set of tasks.',
          },
        ],
      },
      tesis: {
        kicker: '12 · THE IDEA',
        title: 'I did not get here because I wanted local AI',
        timeline: [
          'A cost problem',
          'A scale problem',
          'A security problem',
        ],
        body: 'And I ended up understanding that I often do not need the most powerful AI possible.',
        need: 'I need the right model, for the right task, running in the right place.',
        closer: 'That, for me, is why local LLMs became interesting.',
      },
    },
    footer: [
      { id: 'modelo', label: 'Not everything is GPT', hint: 'Small models' },
      { id: 'arquitectura', label: 'LLM ≠ product', hint: 'System' },
      { id: 'router', label: 'Local + Cloud', hint: 'Fallback' },
      { id: 'escala', label: 'Attack surface', hint: 'Agents' },
      { id: 'tesis', label: 'The right place', hint: 'Thesis' },
    ],
  },
} as const
