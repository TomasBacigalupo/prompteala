export type Lang = 'es' | 'en'

export type ChapterId =
  | 'home'
  | 'workspace'
  | 'openclaw'
  | 'servidor'
  | 'tokens'
  | 'local'
  | 'macmini'
  | 'glm'
  | 'nueveb'
  | 'lmstudio'
  | 'agente'
  | 'gemma'
  | 'coldemail'
  | 'next'
  | 'snowmatch'
  | 'tesis'

export const chapters: {
  id: ChapterId
  num?: string
  es: string
  en: string
}[] = [
  { id: 'home', es: 'Inicio', en: 'Home' },
  { id: 'workspace', num: '01', es: 'OpenClaw', en: 'OpenClaw' },
  { id: 'openclaw', num: '02', es: 'Agente personal', en: 'Personal agent' },
  { id: 'servidor', num: '03', es: 'Servidor', en: 'Server' },
  { id: 'tokens', num: '04', es: 'Wallet', en: 'Wallet' },
  { id: 'local', num: '05', es: 'Local', en: 'Local' },
  { id: 'macmini', num: '06', es: 'Mac Mini', en: 'Mac Mini' },
  { id: 'glm', num: '07', es: 'GLM', en: 'GLM' },
  { id: 'nueveb', num: '08', es: '¿9B?', en: '9B?' },
  { id: 'lmstudio', num: '09', es: 'LM Studio', en: 'LM Studio' },
  { id: 'gemma', num: '10', es: 'Gemma 4', en: 'Gemma 4' },
  { id: 'agente', num: '11', es: 'Inmobiliaria', en: 'Agency' },
  { id: 'coldemail', num: '12', es: 'Cold emails', en: 'Cold emails' },
  { id: 'next', num: '13', es: 'Siguiente', en: 'Next' },
  { id: 'snowmatch', num: '14', es: 'Snowmatch', en: 'Snowmatch' },
  { id: 'tesis', num: '15', es: 'Simple', en: 'Simple' },
]

export const copy = {
  es: {
    brand: 'BUILD JOURNEY',
    brandSub: 'De OpenClaw a local',
    kicker: 'VIEW TALK ARTIFACTS',
    heroTitle: 'Cómo llegué\na un agente\nlocal',
    heroCta: 'Empezar',
    heroMetaA: 'TOMÁS BACIGALUPO',
    heroMetaB: 'BUILD JOURNEY · 2026',
    inAction: 'La historia en acción',
    cookbooks: 'HITOS',
    demos: 'PUNTOS DE QUIEBRE',
    thesisTitle: 'Tesis',
    thesisLink: 'Saltar al final',
    copyQuote: 'Copiar la idea',
    copied: 'Copiado',
    speaker: 'Tomás Bacigalupo',
    speakerOrg: 'Build journey · agentes locales',
    presentHint: 'Click avanza · doble click vuelve · ← → · P escenario',
    quote: 'Un agente simple, con un LLM local, en una máquina que controlás.',
    cookCards: [
      {
        title: 'OpenClaw en la Mac',
        body: 'Agente con internet y acceso a todo. Emocionante. Y un poco aterrador.',
      },
      {
        title: 'Mac Mini + LLM local',
        body: 'Dejar de quemar tokens 24/7. Correr el modelo en casa.',
      },
      {
        title: 'Agente inmobiliario',
        body: 'Decide, corre scripts, escribe en Google Sheets. La primera vez que funcionó de verdad.',
      },
    ],
    breakCards: [
      {
        title: 'Wallet kill',
        body: 'Un servidor siempre prendido pegándole a la nube no es un servidor. Es una factura.',
      },
      {
        title: 'GLM no entra',
        body: 'El modelo “bueno” era demasiado para la Mini. Había que entender qué es un 9B.',
      },
      {
        title: 'WhatsApp bloquea',
        body: 'Snowmatch, facturas raras, lecciones. La superficie crece. El canal también.',
      },
    ],
    sections: {
      workspace: {
        kicker: '01 · EL AGENTE',
        title: 'OpenClaw',
        files: [
          { name: 'SOUL.md', body: 'Personalidad y valores' },
          { name: 'AGENT.md', body: 'Reglas e instrucciones' },
          { name: 'USER.md', body: 'Quién sos vos' },
          { name: 'MEMORY.md', body: 'Lo que recuerda' },
        ],
        brain: 'Cerebro · OpenAI',
        wallet: 'Wallet en llamas',
      },
      openclaw: {
        kicker: '02 · LA TENTACIÓN',
        title: 'Agente personal',
        connected: 'Conectado',
        privacy: 'Privacidad en riesgo',
        closer:
          'Emocionante. Útil. Y bastante scary: estás dándole a un agente permiso para operar sobre toda tu vida digital.',
      },
      servidor: {
        kicker: '03 · AISLAR',
        title: '¿Y si lo corro en otra máquina?',
        lead: 'La idea era simple: no en mi laptop. En un server.',
        options: [
          {
            title: 'Mac Mini',
            meta: 'Opción A',
            body: 'Silenciosa, estable, Apple Silicon. Un server de verdad en el living.',
          },
          {
            title: 'Raspberry Pi',
            meta: 'Opción B',
            body: 'Barata, siempre prendida… pero para LLMs locales se queda corta.',
          },
          {
            title: 'AWS EC2',
            meta: 'Opción C',
            body: 'Un server en la nube, prendido en minutos. Pero se paga por hora, y tus datos viven en la máquina de otro.',
          },
        ],
        closer: 'Mmmh. Mejor un server. Pero un server que llama a la nube 24/7 tiene otro problema.',
      },
      tokens: {
        kicker: '04 · EL COSTO',
        title: 'Una máquina que quema tokens 24/7',
        lead: 'Un agente siempre despierto no es “infraestructura”. Es una wallet kill.',
        charts: {
          usageLabel: 'TOKENS / DÍA',
          usageTitle: 'SIEMPRE ON',
          months: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
          billLabel: 'CLOUD BILL',
          billTitle: 'FACTURA',
          billLines: [
            { name: 'OpenClaw idle loops', value: '$180' },
            { name: 'Tool calls', value: '$95' },
            { name: 'Retries / ruido', value: '$70' },
          ],
          billTotal: '$345',
          rateLabel: 'UPTIME',
          rateTitle: 'PRENDIDO',
          rateValue: '24/7',
          rateSub: 'sin nadie usándolo',
          limitLabel: 'WALLET',
          limitTitle: 'ESTADO',
          limitValue: 'KILL',
          limitSub: 'tokens → plata',
        },
        closer: 'Ahí aparece la pregunta obvia: ¿y si el modelo corre acá?',
      },
      local: {
        kicker: '05 · EL GIRO',
        title: '¿Puedo correr un LLM local?',
        lead: 'YouTube. run.sh. Tutoriales. LM Studio. Ollama. De golpe el path cambia.',
        steps: [
          'Buscar “local LLM Mac”',
          'Ver un run.sh que “just works”',
          'Descargar un modelo',
          'Hablarle sin pagar por token',
        ],
        closer: 'Ya no era “¿uso OpenClaw en la nube?”. Era “¿puedo tener el cerebro en casa?”.',
      },
      macmini: {
        kicker: '06 · EL HARDWARE',
        title: 'Mac Mini 32 GB',
        lead: 'Unos ~US$1.200 en Estados Unidos. Suficiente RAM para modelos chicos/medianos.',
        specs: [
          { label: 'RAM', value: '32 GB' },
          { label: 'Precio', value: '~US$1.200' },
          { label: 'Rol', value: 'Server local' },
          { label: 'Meta', value: 'Agente 24/7 sin factura' },
        ],
        closer: 'Compré la máquina. Ahora faltaba el modelo.',
      },
      glm: {
        kicker: '07 · EL PRIMER INTENTO',
        title: 'Primero probé GLM',
        lead: 'Se veía potente. Y entraba en la Mini… pero dejaba la RAM al límite.',
        verdict: 'AL LÍMITE',
        model: 'GLM-4.7-Flash',
        specs: [
          { label: 'Parámetros', value: '30B', note: 'MoE · solo 3B activos por token' },
          { label: 'Contexto', value: '200K', note: 'tokens (202.752 máx.)' },
          { label: 'Entrenamiento', value: '23T', note: 'tokens · 23 billones (base GLM-4.5)' },
        ],
        benchTitle: 'Benchmarks oficiales',
        quantTitle: 'Cuantizaciones (GGUF)',
        ramLabel: '32 GB Mac Mini',
        quantStatus: { fits: 'Entra, justo', tight: 'No entra', no: 'Ni cerca' },
        points: [
          'Entra en 32 GB, pero sin margen',
          'Con la RAM al límite, no queda lugar para nada más',
          'El server tenía otro trabajo principal: el LLM no podía comerse todo',
        ],
        closer: 'Había que bajar de tamaño. Apareció Qwen 9B. Y con él, una pregunta: ¿qué es un 9B?',
      },
      nueveb: {
        kicker: '08 · EL MANUAL',
        title: '¿Qué es un 9B? ¿Y el context window?',
        lead: 'Dos números que todo el mundo tira. Pocos explican.',
        paramsTitle: '9B = 9 mil millones de parámetros',
        paramsBody:
          'Los parámetros son los “pesos” del modelo: cuánto sabe / cuánta capacidad tiene. Más B ≈ más capacidad (y más RAM). Un 9B es chico frente a un frontier, pero puede ser suficiente para decidir, clasificar y llamar tools.',
        contextTitle: 'Context window = memoria de trabajo',
        contextBody:
          'No es “cuánto sabe el modelo”. Es cuánto texto puede ver a la vez en esta conversación: prompt + historial + tools + respuesta. Si te pasás, corta, olvida, o alucina el principio.',
        insight:
          'Qwen 9B codeaba bien. Pero codear ya está bastante resuelto. Yo no necesitaba un copiloto. Necesitaba un agente operativo.',
        compare: [
          { label: 'Parámetros', small: '2B–9B', big: '70B+', note: 'capacidad del modelo' },
          { label: 'Context', small: '8k–32k', big: '128k+', note: 'cuánto ve por turno' },
        ],
      },
      lmstudio: {
        kicker: '09 · EL PLAYGROUND',
        title: 'LM Studio para jugar',
        lead: 'Antes de arquitecturar nada: bajar modelos, chatear, sentir latencia, ver qué cabe en 32 GB.',
        pills: ['Bajar GGUF', 'Probar prompts', 'Medir tokens/s', 'Ver VRAM/RAM', 'Elegir default'],
        closer: 'El playground no es el producto. Pero sin playground no hay intuición.',
      },
      agente: {
        kicker: '11 · LA PRIMERA VICTORIA',
        title: 'El agente inmobiliario en local',
        lead: 'Mac Mini + LLM local + scripts. Decide, pide info, corre herramientas, escribe en Google Sheets.',
        formula: 'LLM local + scripts + Google Sheets + un loop que decide.',
        closer:
          'Por primera vez no era un chatbot. Era un asistente que hacía el trabajo operativo de una inmobiliaria.',
        humanLabel: 'Humano',
        agentLabel: 'Agente',
        examplesLabel: 'Ejemplos',
        chatPlaceholder: 'Elegí un ejemplo',
        thinkingLabel: 'pensando…',
        sheetsWriting: 'Actualizando Google Sheet…',
        sheetsDone: 'Google Sheet actualizado',
        sheetHeaders: ['Unidad', 'Concepto', 'Monto'],
        conversations: [
          {
            label: 'Cobro 3ero B',
            messages: [
              { role: 'human', text: 'Le cobre al 3ero B' },
              { role: 'agent', text: 'bien cuanto?' },
              { role: 'human', text: '1.5 millones' },
              {
                role: 'agent',
                text: 'Este mes le corresponde pagar 1.3 millones de alquiler y 500.000 de expensas extraordinarias. Dejo una deuda de 300.000 anotada',
              },
            ],
            sheetRows: [
              { unit: '3B', concept: 'Alquiler', amount: '1.300.000' },
              { unit: '3B', concept: 'Exp. extraordinarias', amount: '500.000' },
              { unit: '3B', concept: 'Deuda', amount: '300.000', highlight: true },
            ],
          },
          {
            label: 'Consulta 2C',
            messages: [
              {
                role: 'human',
                text: 'Esta yendo Benito a cobrarle al 2C cuanto tiene que pagar este mes',
              },
              { role: 'agent', text: 'Le corresponde pagar 1.500.000 pesos' },
            ],
            sheetRows: [
              { unit: '2C', concept: 'Alquiler mes', amount: '1.500.000', highlight: true },
            ],
          },
          {
            label: 'Quién falta pagar',
            messages: [
              { role: 'human', text: 'Quien falta pagar este mes?' },
              {
                role: 'agent',
                text: 'Este mes falta pagar a los siguientes:\nCarlos 3B\nJuan 2A\nMartin PH\n¿Querés que les envíe un email recordándoles el monto?',
              },
            ],
            sheetRows: [
              { unit: '3B', concept: 'Carlos · pendiente', amount: '—' },
              { unit: '2A', concept: 'Juan · pendiente', amount: '—' },
              { unit: 'PH', concept: 'Martin · pendiente', amount: '—', highlight: true },
            ],
          },
          {
            label: 'Anotar un gasto',
            messages: [
              {
                role: 'human',
                text: 'Anota un gasto de 200.000 pesos Limpieza de aire del 1B que está vacío',
              },
              {
                role: 'agent',
                text: 'Listo! Este mes hubo un gasto de 2.000.000 pesos en Mantenimientos generales',
              },
            ],
            sheetRows: [
              { unit: '1B', concept: 'Limpieza de aire', amount: '200.000', highlight: true },
              { unit: '—', concept: 'Mantenimientos (mes)', amount: '2.000.000' },
            ],
          },
        ],
      },
      gemma: {
        kicker: '10 · EL SALTO',
        title: 'Salió Gemma 4. Se sintió game changing.',
        lead: 'De golpe el modelo local general se sintió usable de verdad.',
        points: [
          {
            title: 'Mejor en tareas generales',
            body: 'Ya no solo “codea bien”. Entiende, decide, conversa.',
          },
          {
            title: 'OpenClaw vuelve a servir',
            body: 'Ahora como agente más general — pero anclado a un LLM local, no a una factura infinita.',
          },
          {
            title: 'Menos miedo, más scope',
            body: 'La Mini deja de ser un experimento. Empieza a ser plataforma.',
          },
        ],
      },
      coldemail: {
        kicker: '12 · COLD EMAILS',
        title: 'Cold emails con OpenClaw + Gemma 4 E4B',
        lead: 'OpenClaw escribe cada mail personalizado con Gemma 4 E4B, lo manda por Gmail y lee las respuestas. Todo en la Mac Mini.',
        modelLabel: 'Gemma 4 E4B · local',
        outLabel: 'Enviados',
        sentStatus: '✓ enviado',
        inLabel: 'Respuestas',
        sent: [
          { to: 'Lucía · Inmobiliaria Norte', subject: 'Cobranzas con un agente local' },
          { to: 'Martín · Escuela de ski', subject: 'Reservas por WhatsApp sin atender 24/7' },
          { to: 'Sofía · Club de running', subject: 'Salidas recomendadas para tus socios' },
        ],
        replies: [
          {
            from: 'Lucía',
            text: 'Me interesa, ¿tenés 15 min el jueves?',
            tag: 'Interesada',
            tone: 'good',
            action: 'Propone horario en Calendar',
          },
          {
            from: 'Martín',
            text: 'Ahora no, escribime en marzo.',
            tag: 'Más adelante',
            tone: 'wait',
            action: 'Agenda follow-up en marzo',
          },
          {
            from: 'Sofía',
            text: 'No, gracias.',
            tag: 'No',
            tone: 'no',
            action: 'La saca de la secuencia',
          },
        ],
        closer:
          'Escribir, leer y clasificar son tareas acotadas: un modelo chico alcanza. El agente hace el volumen; el humano entra cuando alguien dice que sí.',
      },
      next: {
        kicker: '13 · EL PRIMER LOOP',
        title: 'Sparta: un agente local que aprende solo',
        leadBefore: 'En',
        leadAfter: 'un LLM local recomienda salidas… y mejora su propio prompt según quién se anota.',
        nodes: [
          { icon: '📍', title: 'Posiciones', body: 'Dónde están los usuarios' },
          { icon: '🤖', title: 'LLM local', body: 'Genera salidas recomendadas' },
          { icon: '🙋', title: '¿Se anotaron?', body: 'Sí o no, en cada salida' },
          { icon: '✍️', title: 'Mejora el prompt', body: 'Reescribe el prompt de salidas' },
        ],
        promptLabel: 'Prompt de salidas',
        photoCaption: 'Una salida recomendada: run en el lago',
        closer: 'No hizo falta un modelo más grande. Hizo falta un loop: generar, medir, ajustar el prompt, repetir.',
      },
      snowmatch: {
        kicker: '14 · PROBALO VOS',
        title: 'Hablá con el LLM local y sacá una clase de esquí',
        lead: 'Snowmatch es un agente que corre con un LLM local. Escaneá el QR y escribile por WhatsApp.',
        scan: 'Escaneá con la cámara',
        tagline: 'Tu próxima clase empieza acá',
        waText: '¡Hola! Quiero sacar una clase de esquí',
        agentName: 'Snowmatch agent',
        exampleLabel: 'Ejemplo',
        messages: [
          { role: 'human', text: '¡Hola! Quiero sacar una clase de esquí' },
          { role: 'agent', text: '¡Genial! ¿Qué día te queda bien y cuál es tu nivel?' },
          { role: 'human', text: 'El sábado a la mañana. Soy principiante' },
          { role: 'agent', text: 'Listo: sábado 10:00, clase para principiantes. ¿Te la reservo?' },
        ],
      },
      tesis: {
        kicker: '15 · LA IDEA',
        title: 'Agente + LLM local. Simple.',
        timeline: [
          'OpenClaw en la Mac → scary',
          'Server 24/7 en la nube → wallet kill',
          'Mac Mini + modelos chicos → intuición',
          'Inmobiliaria local → primera victoria',
          'Gemma 4 → agente general viable',
        ],
        body: 'No hace falta el sistema más poderoso del mundo. Hace falta un agente acotado, con tools claras, corriendo donde vos mandás.',
        need: 'Simple. Local. Controlable.',
        closer: 'Esa es, para mí, la build journey.',
      },
    },
    footer: [
      { id: 'openclaw', label: 'Scary en Mac', hint: 'OpenClaw' },
      { id: 'nueveb', label: '¿Qué es 9B?', hint: 'Manual' },
      { id: 'agente', label: 'Inmobiliaria', hint: 'Win' },
      { id: 'gemma', label: 'Gemma 4', hint: 'Salto' },
      { id: 'tesis', label: 'Simple', hint: 'Tesis' },
    ],
  },
  en: {
    brand: 'BUILD JOURNEY',
    brandSub: 'From OpenClaw to local',
    kicker: 'VIEW TALK ARTIFACTS',
    heroTitle: 'How I got\nto a local\nagent',
    heroCta: 'Start',
    heroMetaA: 'TOMÁS BACIGALUPO',
    heroMetaB: 'BUILD JOURNEY · 2026',
    inAction: 'The story in action',
    cookbooks: 'MILESTONES',
    demos: 'BREAKING POINTS',
    thesisTitle: 'Thesis',
    thesisLink: 'Skip to the end',
    copyQuote: 'Copy the idea',
    copied: 'Copied',
    speaker: 'Tomás Bacigalupo',
    speakerOrg: 'Build journey · local agents',
    presentHint: 'Click next · double-click back · ← → · P stage',
    quote: 'A simple agent, with a local LLM, on a machine you control.',
    cookCards: [
      {
        title: 'OpenClaw on the Mac',
        body: 'An agent with internet and full access. Exciting. And a little scary.',
      },
      {
        title: 'Mac Mini + local LLM',
        body: 'Stop burning tokens 24/7. Run the model at home.',
      },
      {
        title: 'Real-estate agent',
        body: 'Decides, runs scripts, writes to Google Sheets. The first time it actually worked.',
      },
    ],
    breakCards: [
      {
        title: 'Wallet kill',
        body: 'An always-on server hitting the cloud is not a server. It is a bill.',
      },
      {
        title: 'GLM will not fit',
        body: 'The “good” model was too much for the Mini. Time to learn what 9B means.',
      },
      {
        title: 'WhatsApp blocks',
        body: 'Snowmatch, weird invoices, lessons. Surface area grows. So does the channel.',
      },
    ],
    sections: {
      workspace: {
        kicker: '01 · THE AGENT',
        title: 'OpenClaw',
        files: [
          { name: 'SOUL.md', body: 'Personality and values' },
          { name: 'AGENT.md', body: 'Rules and instructions' },
          { name: 'USER.md', body: 'Who you are' },
          { name: 'MEMORY.md', body: 'What it remembers' },
        ],
        brain: 'Brain · OpenAI',
        wallet: 'Wallet on fire',
      },
      openclaw: {
        kicker: '02 · THE TEMPTATION',
        title: 'Personal agent',
        connected: 'Connected',
        privacy: 'Privacy at risk',
        closer:
          'Exciting. Useful. And pretty scary: you are giving an agent permission to operate across your whole digital life.',
      },
      servidor: {
        kicker: '03 · ISOLATE',
        title: 'What if it runs on another machine?',
        lead: 'The idea was simple: not on my laptop. On a server.',
        options: [
          {
            title: 'Mac Mini',
            meta: 'Option A',
            body: 'Quiet, stable, Apple Silicon. A real server in the living room.',
          },
          {
            title: 'Raspberry Pi',
            meta: 'Option B',
            body: 'Cheap, always on… but too small for serious local LLMs.',
          },
          {
            title: 'AWS EC2',
            meta: 'Option C',
            body: 'A cloud server, up in minutes. But you pay by the hour, and your data lives on someone else’s machine.',
          },
        ],
        closer: 'Mmmh. A server is better. But a server that calls the cloud 24/7 has another problem.',
      },
      tokens: {
        kicker: '04 · THE COST',
        title: 'A machine that burns tokens 24/7',
        lead: 'An always-awake agent is not “infrastructure”. It is a wallet kill.',
        charts: {
          usageLabel: 'TOKENS / DAY',
          usageTitle: 'ALWAYS ON',
          months: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          billLabel: 'CLOUD BILL',
          billTitle: 'INVOICE',
          billLines: [
            { name: 'OpenClaw idle loops', value: '$180' },
            { name: 'Tool calls', value: '$95' },
            { name: 'Retries / noise', value: '$70' },
          ],
          billTotal: '$345',
          rateLabel: 'UPTIME',
          rateTitle: 'ON',
          rateValue: '24/7',
          rateSub: 'even with nobody using it',
          limitLabel: 'WALLET',
          limitTitle: 'STATUS',
          limitValue: 'KILL',
          limitSub: 'tokens → money',
        },
        closer: 'Then the obvious question: what if the model runs here?',
      },
      local: {
        kicker: '05 · THE TURN',
        title: 'Can I run a local LLM?',
        lead: 'YouTube. run.sh. Tutorials. LM Studio. Ollama. Suddenly the path flips.',
        steps: [
          'Search “local LLM Mac”',
          'Watch a run.sh that “just works”',
          'Download a model',
          'Talk to it without paying per token',
        ],
        closer: 'It was no longer “do I use OpenClaw in the cloud?”. It was “can I keep the brain at home?”.',
      },
      macmini: {
        kicker: '06 · THE HARDWARE',
        title: 'Mac Mini 32 GB',
        lead: 'About US$1,200 in the US. Enough RAM for small/mid models.',
        specs: [
          { label: 'RAM', value: '32 GB' },
          { label: 'Price', value: '~US$1,200' },
          { label: 'Role', value: 'Local server' },
          { label: 'Goal', value: '24/7 agent, no cloud bill' },
        ],
        closer: 'I bought the machine. Now I needed the model.',
      },
      glm: {
        kicker: '07 · FIRST TRY',
        title: 'First I tried GLM',
        lead: 'It looked powerful. And it fit on the Mini… but it pushed RAM to the limit.',
        verdict: 'AT THE LIMIT',
        model: 'GLM-4.7-Flash',
        specs: [
          { label: 'Parameters', value: '30B', note: 'MoE · only 3B active per token' },
          { label: 'Context', value: '200K', note: 'tokens (202,752 max)' },
          { label: 'Training', value: '23T', note: 'tokens · 23 trillion (GLM-4.5 base)' },
        ],
        benchTitle: 'Official benchmarks',
        quantTitle: 'Quantizations (GGUF)',
        ramLabel: '32 GB Mac Mini',
        quantStatus: { fits: 'Fits, barely', tight: 'Does not fit', no: 'Not even close' },
        points: [
          'Fits in 32 GB, but with no headroom',
          'With RAM maxed out, nothing else can run',
          'The server had another main job: the LLM could not eat everything',
        ],
        closer: 'I had to go smaller. Qwen 9B showed up. And with it: what even is a 9B?',
      },
      nueveb: {
        kicker: '08 · THE MANUAL',
        title: 'What is a 9B? And the context window?',
        lead: 'Two numbers everyone throws around. Few explain.',
        paramsTitle: '9B = 9 billion parameters',
        paramsBody:
          'Parameters are the model’s weights: how much capacity it has. More B ≈ more capacity (and more RAM). A 9B is small vs frontier models, but can be enough to decide, classify, and call tools.',
        contextTitle: 'Context window = working memory',
        contextBody:
          'It is not “how much the model knows”. It is how much text it can see at once in this turn: prompt + history + tools + reply. Overflow it and it truncates, forgets, or invents the beginning.',
        insight:
          'Qwen 9B coded well. But coding is mostly solved. I did not need a copilot. I needed an operational agent.',
        compare: [
          { label: 'Parameters', small: '2B–9B', big: '70B+', note: 'model capacity' },
          { label: 'Context', small: '8k–32k', big: '128k+', note: 'how much it sees per turn' },
        ],
      },
      lmstudio: {
        kicker: '09 · THE PLAYGROUND',
        title: 'LM Studio to play',
        lead: 'Before architecture: download models, chat, feel latency, see what fits in 32 GB.',
        pills: ['Download GGUF', 'Try prompts', 'Measure tokens/s', 'Watch VRAM/RAM', 'Pick a default'],
        closer: 'The playground is not the product. But without a playground you have no intuition.',
      },
      agente: {
        kicker: '11 · FIRST WIN',
        title: 'The real-estate agent, local',
        lead: 'Mac Mini + local LLM + scripts. Decides, asks for info, runs tools, writes to Google Sheets.',
        formula: 'Local LLM + scripts + Google Sheets + a decide loop.',
        closer:
          'For the first time it was not a chatbot. It was an assistant doing real agency ops work.',
        humanLabel: 'Human',
        agentLabel: 'Agent',
        examplesLabel: 'Examples',
        chatPlaceholder: 'Pick an example',
        thinkingLabel: 'thinking…',
        sheetsWriting: 'Updating Google Sheet…',
        sheetsDone: 'Google Sheet updated',
        sheetHeaders: ['Unit', 'Concept', 'Amount'],
        conversations: [
          {
            label: 'Collect 3rd B',
            messages: [
              { role: 'human', text: 'I collected from 3rd B' },
              { role: 'agent', text: 'ok how much?' },
              { role: 'human', text: '1.5 million' },
              {
                role: 'agent',
                text: 'This month they owe 1.3 million in rent and 500,000 in extraordinary expenses. Leaving a 300,000 debt noted',
              },
            ],
            sheetRows: [
              { unit: '3B', concept: 'Rent', amount: '1,300,000' },
              { unit: '3B', concept: 'Extra expenses', amount: '500,000' },
              { unit: '3B', concept: 'Debt', amount: '300,000', highlight: true },
            ],
          },
          {
            label: 'Query 2C',
            messages: [
              {
                role: 'human',
                text: 'Benito is going to collect from 2C — how much do they owe this month',
              },
              { role: 'agent', text: 'They owe 1,500,000 pesos' },
            ],
            sheetRows: [
              { unit: '2C', concept: 'Month rent', amount: '1,500,000', highlight: true },
            ],
          },
          {
            label: 'Who still owes',
            messages: [
              { role: 'human', text: 'Who still needs to pay this month?' },
              {
                role: 'agent',
                text: 'Still pending this month:\nCarlos 3B\nJuan 2A\nMartin PH\nWant me to email them a reminder with the amount?',
              },
            ],
            sheetRows: [
              { unit: '3B', concept: 'Carlos · pending', amount: '—' },
              { unit: '2A', concept: 'Juan · pending', amount: '—' },
              { unit: 'PH', concept: 'Martin · pending', amount: '—', highlight: true },
            ],
          },
          {
            label: 'Log an expense',
            messages: [
              {
                role: 'human',
                text: 'Log a 200,000 peso expense — AC cleaning for vacant 1B',
              },
              {
                role: 'agent',
                text: 'Done! This month there was 2,000,000 pesos in general maintenance expenses',
              },
            ],
            sheetRows: [
              { unit: '1B', concept: 'AC cleaning', amount: '200,000', highlight: true },
              { unit: '—', concept: 'Maintenance (month)', amount: '2,000,000' },
            ],
          },
        ],
      },
      gemma: {
        kicker: '10 · THE JUMP',
        title: 'Gemma 4 shipped. It felt game changing.',
        lead: 'Suddenly the general local model felt actually usable.',
        points: [
          {
            title: 'Better at general work',
            body: 'Not just “codes well”. It understands, decides, converses.',
          },
          {
            title: 'OpenClaw becomes useful again',
            body: 'Now as a more general agent — anchored to a local LLM, not an infinite bill.',
          },
          {
            title: 'Less fear, more scope',
            body: 'The Mini stops being an experiment. It starts being a platform.',
          },
        ],
      },
      coldemail: {
        kicker: '12 · COLD EMAILS',
        title: 'Cold emails with OpenClaw + Gemma 4 E4B',
        lead: 'OpenClaw writes each personalized email with Gemma 4 E4B, sends it through Gmail and reads the replies. All on the Mac Mini.',
        modelLabel: 'Gemma 4 E4B · local',
        outLabel: 'Sent',
        sentStatus: '✓ sent',
        inLabel: 'Replies',
        sent: [
          { to: 'Lucía · Norte Real Estate', subject: 'Rent collection with a local agent' },
          { to: 'Martín · Ski school', subject: 'WhatsApp bookings without being on 24/7' },
          { to: 'Sofía · Running club', subject: 'Recommended runs for your members' },
        ],
        replies: [
          {
            from: 'Lucía',
            text: 'Interested, do you have 15 min on Thursday?',
            tag: 'Interested',
            tone: 'good',
            action: 'Proposes a slot in Calendar',
          },
          {
            from: 'Martín',
            text: 'Not now, write me in March.',
            tag: 'Later',
            tone: 'wait',
            action: 'Schedules a follow-up in March',
          },
          {
            from: 'Sofía',
            text: 'No, thanks.',
            tag: 'No',
            tone: 'no',
            action: 'Removes her from the sequence',
          },
        ],
        closer:
          'Writing, reading and classifying are narrow tasks: a small model is enough. The agent does the volume; the human steps in when someone says yes.',
      },
      next: {
        kicker: '13 · THE FIRST LOOP',
        title: 'Sparta: a local agent that learns on its own',
        leadBefore: 'At',
        leadAfter: 'a local LLM recommends outings… and improves its own prompt based on who signs up.',
        nodes: [
          { icon: '📍', title: 'Positions', body: 'Where users are' },
          { icon: '🤖', title: 'Local LLM', body: 'Generates recommended outings' },
          { icon: '🙋', title: 'Did they sign up?', body: 'Yes or no, for each outing' },
          { icon: '✍️', title: 'Improves the prompt', body: 'Rewrites the outings prompt' },
        ],
        promptLabel: 'Outings prompt',
        photoCaption: 'A recommended outing: lake run',
        closer: 'It did not take a bigger model. It took a loop: generate, measure, tune the prompt, repeat.',
      },
      snowmatch: {
        kicker: '14 · TRY IT',
        title: 'Talk to the local LLM and book a ski lesson',
        lead: 'Snowmatch is an agent running on a local LLM. Scan the QR and message it on WhatsApp.',
        scan: 'Scan with your camera',
        tagline: 'Your next lesson starts here',
        waText: 'Hi! I want to book a ski lesson',
        agentName: 'Snowmatch agent',
        exampleLabel: 'Example',
        messages: [
          { role: 'human', text: 'Hi! I want to book a ski lesson' },
          { role: 'agent', text: 'Great! Which day works for you, and what is your level?' },
          { role: 'human', text: 'Saturday morning. I am a beginner' },
          { role: 'agent', text: 'Done: Saturday 10:00, beginner lesson. Should I book it?' },
        ],
      },
      tesis: {
        kicker: '15 · THE IDEA',
        title: 'Agent + local LLM. Simple.',
        timeline: [
          'OpenClaw on the Mac → scary',
          '24/7 cloud server → wallet kill',
          'Mac Mini + small models → intuition',
          'Local agency agent → first win',
          'Gemma 4 → viable general agent',
        ],
        body: 'You do not need the most powerful system in the world. You need a narrow agent, with clear tools, running where you are in charge.',
        need: 'Simple. Local. Controllable.',
        closer: 'That, for me, is the build journey.',
      },
    },
    footer: [
      { id: 'openclaw', label: 'Scary on Mac', hint: 'OpenClaw' },
      { id: 'nueveb', label: 'What is 9B?', hint: 'Manual' },
      { id: 'agente', label: 'Agency', hint: 'Win' },
      { id: 'gemma', label: 'Gemma 4', hint: 'Jump' },
      { id: 'tesis', label: 'Simple', hint: 'Thesis' },
    ],
  },
} as const
