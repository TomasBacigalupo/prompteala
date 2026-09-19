import { useEffect, useMemo, useState, type MouseEvent, type ReactNode } from 'react'
import { chapters, copy, type ChapterId, type Lang } from './content'

const chapterIds = chapters.map((c) => c.id)

function IconHome() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2.5 7.2 8 2.8l5.5 4.4V13a.8.8 0 0 1-.8.8H3.3A.8.8 0 0 1 2.5 13V7.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  )
}

function FooterIcon({ i }: { i: number }) {
  const paths = [
    'M4 11.5V4.5h8v7',
    'M8 3.5v9M4.5 8h7',
    'M3.5 8h9M8 3.5 12.5 8 8 12.5 3.5 8Z',
    'M4 12.5 12 3.5M4.5 6.5h3v3',
    'M3.8 8a4.2 4.2 0 1 0 8.4 0 4.2 4.2 0 0 0-8.4 0Z',
  ]
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d={paths[i]} stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function Collage({ lang }: { lang: Lang }) {
  const es = lang === 'es'
  return (
    <div className="collage" aria-hidden>
      <div className="collage-track">
        <div className="col wide">
          <div className="tile paper grow">
            <div className="label">OPENAI USAGE</div>
            <h3>LÍMITES</h3>
            <div className="receipt-line">
              <span>{es ? 'Correcciones de esquí' : 'Ski corrections'}</span>
              <span>$48.20</span>
            </div>
            <div className="receipt-line">
              <span>OpenClaw</span>
              <span>$312.04</span>
            </div>
            <div className="receipt-line">
              <span>{es ? 'Agente inmobiliario' : 'Agency agent'}</span>
              <span>$190.11</span>
            </div>
            <div className="receipt-line">
              <span>TOTAL</span>
              <b>$550.35</b>
            </div>
            <div className="label" style={{ marginTop: 10 }}>
              CALIBRATION 100%
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">PROBABILISTIC BOOLEAN</div>
            <div>{es ? '¿NECESITO UN FRONTIER?' : 'DO I NEED FRONTIER?'}</div>
            <div className="big" style={{ marginTop: 8 }}>
              12%
            </div>
            <div>true</div>
          </div>
          <div className="tile dark grow">
            <div className="label">OUTPUT</div>
            <div>{es ? 'NIEVE ESTA TEMPORADA' : 'SNOW THIS SEASON'}</div>
            <div className="big">LOCURA</div>
          </div>
        </div>

        <div className="holo tile">
          <div className="blob" />
        </div>

        <div className="col">
          <div className="tile wash grow">
            <div className="label">CHOICE</div>
            <div>{es ? '¿DÓNDE CORRE?' : 'WHERE DOES IT RUN?'}</div>
            <div className="choice-grid">
              {[1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0].map((on, i) => (
                <div key={i} className={on ? 'cell on' : 'cell'} />
              ))}
            </div>
            <div className="label" style={{ marginTop: 8 }}>
              LOCAL 72% · CLOUD 28%
            </div>
          </div>
          <div className="tile grow" style={{ background: '#fff4ee' }}>
            <div className="label">SECURITY INCIDENT</div>
            <div>{es ? 'WHATSAPP SUSPENDIDO' : 'WHATSAPP SUSPENDED'}</div>
            <div className="big" style={{ color: '#c2410c' }}>
              1 DÍA
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">SCORE</div>
            <div>{es ? '¿PUEDE UN 4B CERRAR EL MES?' : 'CAN A 4B CLOSE THE MONTH?'}</div>
            <div className="score-row">
              <span>OUTPUT</span>
              <b>3.9/5</b>
            </div>
            <div className="bars">
              <div className="bar">
                5 <i style={{ width: '30%' }} />
              </div>
              <div className="bar">
                4 <i style={{ width: '78%' }} />
              </div>
              <div className="bar">
                3 <i style={{ width: '42%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">OPTION B</div>
            <div>QWEN · GEMMA 2B/4B</div>
            <div className="big">GRATIS</div>
            <div className="mini-cam" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DiagramRouter({ local, cloud }: { local: string; cloud: string }) {
  return (
    <div className="diagram">
      <div className="flow">
        <div className="node filled">Request</div>
        <div className="arrow">▼</div>
        <div className="node">Router</div>
        <div className="arrow">▼</div>
        <div className="row3">
          <div className="node soft">
            Local LLM
            <div className="label">{local}</div>
          </div>
          <div className="arrow">/</div>
          <div className="node soft">
            GPT
            <div className="label">{cloud}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DiagramFinal() {
  return (
    <div className="diagram">
      <div className="flow">
        <div className="node filled">User</div>
        <div className="arrow">▼</div>
        <div className="node">WhatsApp / API</div>
        <div className="arrow">▼</div>
        <div className="node">Local Backend</div>
        <div className="arrow">▼</div>
        <div className="row3" style={{ gridTemplateColumns: '1fr 1fr 1fr', width: 'min(520px, 100%)' }}>
          <div className="node soft">Local DB</div>
          <div className="node soft">Local LLM</div>
          <div className="node soft">API Hooks</div>
        </div>
      </div>
    </div>
  )
}

function SlideShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`slide ${className}`.trim()}>{children}</section>
}

export default function App() {
  const [lang, setLang] = useState<Lang>('es')
  const [active, setActive] = useState<ChapterId>('home')
  const [present, setPresent] = useState(false)
  const [copied, setCopied] = useState(false)
  const t = copy[lang]
  const index = chapterIds.indexOf(active)
  const isFirst = index <= 0
  const isLast = index >= chapterIds.length - 1

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const labels = useMemo(
    () => Object.fromEntries(chapters.map((c) => [c.id, c[lang]])) as Record<ChapterId, string>,
    [lang],
  )

  function goTo(id: ChapterId) {
    setActive(id)
  }

  function jump(delta: number) {
    const next = chapterIds[Math.min(chapterIds.length - 1, Math.max(0, index + delta))]
    if (next) setActive(next)
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return
      if (
        e.key === 'j' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowRight' ||
        e.key === 'PageDown' ||
        e.key === ' '
      ) {
        e.preventDefault()
        jump(1)
      } else if (e.key === 'k' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        jump(-1)
      } else if (e.key === 'p' || e.key === 'P') {
        setPresent((v) => !v)
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo('home')
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo('tesis')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  async function copyQuote(e?: MouseEvent) {
    e?.stopPropagation()
    try {
      await navigator.clipboard.writeText(t.quote)
    } catch {
      const input = document.createElement('textarea')
      input.value = t.quote
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  function onStageClick(e: MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement
    if (target.closest('button, a, input, textarea, [data-no-nav]')) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    if (x < rect.width * 0.32) {
      if (!isFirst) jump(-1)
    } else {
      if (!isLast) jump(1)
    }
  }

  const s = t.sections
  const slideNum = `${String(index + 1).padStart(2, '0')} / ${String(chapterIds.length).padStart(2, '0')}`

  let slide: ReactNode = null

  if (active === 'home') {
    slide = (
      <SlideShell className="slide-home">
        <div className="hero">
          <div className="hero-copy">
            <div className="kicker">{t.kicker}</div>
            <h1>{t.heroTitle}</h1>
            <div className="hero-actions">
              <button
                className="cta"
                onClick={(e) => {
                  e.stopPropagation()
                  goTo('openai')
                }}
              >
                {t.heroCta} <span aria-hidden>→</span>
              </button>
              <div className="hero-meta">
                {t.heroMetaA}
                <br />
                {t.heroMetaB}
              </div>
            </div>
          </div>
          <Collage lang={lang} />
        </div>
        <div className="action">
          <div>
            <h2>{t.inAction}</h2>
            <div className="split">
              <div>
                <div className="col-label">{t.cookbooks}</div>
                <div className="card-list">
                  {t.cookCards.map((card) => (
                    <article key={card.title}>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <div className="col-label">{t.demos}</div>
                <div className="card-list">
                  {t.breakCards.map((card) => (
                    <article key={card.title}>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <aside className="thesis" data-no-nav>
            <div className="thesis-head">
              <h2>{t.thesisTitle}</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goTo('tesis')
                }}
              >
                {t.thesisLink} ↗
              </button>
            </div>
            <div className="quote-box">
              <strong>{t.quote}</strong>
              {lang === 'es'
                ? 'No llegué a los LLM locales porque quisiera una IA local. Llegué por costos, escala y seguridad.'
                : 'I did not get to local LLMs because I wanted local AI. I got there through cost, scale, and security.'}
            </div>
            <button className="copy-btn" onClick={copyQuote}>
              {copied ? t.copied : t.copyQuote}
            </button>
            <p className="hint">{t.presentHint}</p>
          </aside>
        </div>
      </SlideShell>
    )
  } else if (active === 'openai') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.openai.kicker}</div>
        <h2>{s.openai.title}</h2>
        <p className="lead">{s.openai.lead}</p>
        <p>{s.openai.body}</p>
      </SlideShell>
    )
  } else if (active === 'agente') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.agente.kicker}</div>
        <h2>{s.agente.title}</h2>
        <p className="lead">{s.agente.lead}</p>
        <div className="pills">
          {s.agente.pills.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <p>{s.agente.body}</p>
        <div className="formula">{s.agente.formula}</div>
        <p>{s.agente.closer}</p>
      </SlideShell>
    )
  } else if (active === 'modelo') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.modelo.kicker}</div>
        <h2>{s.modelo.title}</h2>
        <p className="callout">{s.modelo.quote}</p>
        <div className="tasks">
          {s.modelo.tasks.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <p>{s.modelo.body}</p>
      </SlideShell>
    )
  } else if (active === 'qwen') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.qwen.kicker}</div>
        <h2>{s.qwen.title}</h2>
        <div className="two">
          {s.qwen.cards.map((card) => (
            <article className="panel" key={card.title}>
              <div className="meta">{card.meta}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </SlideShell>
    )
  } else if (active === 'router') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.router.kicker}</div>
        <h2>{s.router.title}</h2>
        <p className="lead">{s.router.lead}</p>
        <DiagramRouter local={s.router.local} cloud={s.router.cloud} />
        <p>{s.router.body}</p>
      </SlideShell>
    )
  } else if (active === 'invierno') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.invierno.kicker}</div>
        <h2>{s.invierno.title}</h2>
        <p className="lead">{s.invierno.lead}</p>
        <div className="stats">
          <div className="stat">
            <b>+</b>
            <span>{lang === 'es' ? 'Usuarios' : 'Users'}</span>
          </div>
          <div className="stat">
            <b>+</b>
            <span>{lang === 'es' ? 'Mensajes' : 'Messages'}</span>
          </div>
          <div className="stat">
            <b>+</b>
            <span>{lang === 'es' ? 'Procesos' : 'Processes'}</span>
          </div>
        </div>
        <p>{s.invierno.body}</p>
        <p style={{ marginTop: 12 }}>{s.invierno.closer}</p>
      </SlideShell>
    )
  } else if (active === 'escala') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.escala.kicker}</div>
        <h2>{s.escala.title}</h2>
        <p className="lead">{s.escala.lead}</p>
        {s.escala.incidents.map((inc) => (
          <article className="incident alert" key={inc.title}>
            <h3>{inc.title}</h3>
            <p>{inc.body}</p>
          </article>
        ))}
        <p className="shift">{s.escala.shift}</p>
        <div className="concerns">
          {s.escala.concerns.map((c) => (
            <span className="pill" key={c}>
              {c}
            </span>
          ))}
        </div>
      </SlideShell>
    )
  } else if (active === 'apague') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.apague.kicker}</div>
        <h2>{s.apague.title}</h2>
        <p className="lead">{s.apague.lead}</p>
        <p>{s.apague.body}</p>
      </SlideShell>
    )
  } else if (active === 'ingenieria') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.ingenieria.kicker}</div>
        <h2>{s.ingenieria.title}</h2>
        <div className="swap">
          <div className="swap-card from">
            <small>FROM</small>
            {s.ingenieria.from}
          </div>
          <div className="arrow">→</div>
          <div className="swap-card to">
            <small>TO</small>
            {s.ingenieria.to}
          </div>
        </div>
        <div className="pills">
          {s.ingenieria.allowed.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <p>{s.ingenieria.body}</p>
      </SlideShell>
    )
  } else if (active === 'arquitectura') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.arquitectura.kicker}</div>
        <h2>{s.arquitectura.title}</h2>
        <p className="lead">{s.arquitectura.lead}</p>
        <DiagramFinal />
        <p>{s.arquitectura.closer}</p>
      </SlideShell>
    )
  } else if (active === 'aprendido') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.aprendido.kicker}</div>
        <h2>{s.aprendido.title}</h2>
        <p className="lead">{s.aprendido.lead}</p>
        <div className="lessons">
          {s.aprendido.lessons.map((lesson, i) => (
            <article className="lesson" key={lesson.title}>
              <b>0{i + 1}</b>
              <div>
                <h3>{lesson.title}</h3>
                <p>{lesson.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SlideShell>
    )
  } else {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.tesis.kicker}</div>
        <h2>{s.tesis.title}</h2>
        <div className="timeline">
          {s.tesis.timeline.map((item) => (
            <div className="tl" key={item}>
              <i />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p>{s.tesis.body}</p>
        <p className="need">{s.tesis.need}</p>
        <p>{s.tesis.closer}</p>
      </SlideShell>
    )
  }

  return (
    <div className={present ? 'app present' : 'app'}>
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">LL</div>
          <div className="brand-copy">
            <strong>{t.brand}</strong>
            <span>{t.brandSub}</span>
          </div>
        </div>
        <nav className="nav" aria-label="Capítulos">
          {chapters.map((c) => (
            <button
              key={c.id}
              className={active === c.id ? 'active' : undefined}
              onClick={() => goTo(c.id)}
            >
              {c.id === 'home' ? (
                <span className="home-ico">
                  <IconHome />
                </span>
              ) : (
                <span className="nav-num">{c.num}</span>
              )}
              {labels[c.id]}
            </button>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="speaker">
            <div className="avatar">TB</div>
            <div>
              <strong>{t.speaker}</strong>
              <span>{t.speakerOrg}</span>
            </div>
          </div>
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === 'es' ? 'on' : undefined} onClick={() => setLang('es')}>
              ES
            </button>
            <button className={lang === 'en' ? 'on' : undefined} onClick={() => setLang('en')}>
              EN
            </button>
          </div>
        </div>
      </aside>

      <main
        className="stage"
        onClick={onStageClick}
        role="presentation"
        aria-label={lang === 'es' ? 'Diapositiva' : 'Slide'}
      >
        <div key={active} className="slide-frame">
          {slide}
        </div>

        <div className="slide-chrome" data-no-nav>
          <span className="slide-counter">{slideNum}</span>
          <div className="slide-controls">
            <button
              type="button"
              aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
              disabled={isFirst}
              onClick={(e) => {
                e.stopPropagation()
                jump(-1)
              }}
            >
              ←
            </button>
            <button
              type="button"
              aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
              disabled={isLast}
              onClick={(e) => {
                e.stopPropagation()
                jump(1)
              }}
            >
              →
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        {t.footer.map((item, i) => (
          <button key={item.id} onClick={() => goTo(item.id as ChapterId)}>
            <span className="foot-ico">
              <FooterIcon i={i} />
            </span>
            <span>
              <strong>{item.label}</strong>
              <span>{item.hint}</span>
            </span>
          </button>
        ))}
      </footer>

      <button className="present-fab" onClick={() => setPresent((v) => !v)}>
        {present ? (lang === 'es' ? 'Salir' : 'Exit') : lang === 'es' ? 'Escenario' : 'Stage'} · P
      </button>
    </div>
  )
}
