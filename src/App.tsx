import { useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { chapters, copy, type ChapterId, type Lang } from './content'

type ChatMessage = { role: 'human' | 'agent'; text: string }
type SheetRow = { unit: string; concept: string; amount: string; highlight?: boolean }
type Conversation = {
  label: string
  messages: readonly ChatMessage[]
  sheetRows: readonly SheetRow[]
}

type SheetPhase = 'idle' | 'writing' | 'done'

function AgenteDemo({
  examplesLabel,
  chatPlaceholder,
  humanLabel,
  agentLabel,
  thinkingLabel,
  sheetsWriting,
  sheetsDone,
  sheetHeaders,
  conversations,
}: {
  examplesLabel: string
  chatPlaceholder: string
  humanLabel: string
  agentLabel: string
  thinkingLabel: string
  sheetsWriting: string
  sheetsDone: string
  sheetHeaders: readonly string[]
  conversations: readonly Conversation[]
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [visible, setVisible] = useState<ChatMessage[]>([])
  const [thinking, setThinking] = useState(false)
  const [sheetPhase, setSheetPhase] = useState<SheetPhase>('idle')
  const [sheetRowsShown, setSheetRowsShown] = useState(0)
  const timers = useRef<number[]>([])
  const runId = useRef(0)

  function clearTimers() {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }

  function schedule(fn: () => void, ms: number) {
    timers.current.push(window.setTimeout(fn, ms))
  }

  useEffect(() => {
    runId.current += 1
    clearTimers()
    setActiveIdx(null)
    setVisible([])
    setThinking(false)
    setSheetPhase('idle')
    setSheetRowsShown(0)
    return () => clearTimers()
  }, [conversations])

  function play(index: number) {
    const convo = conversations[index]
    if (!convo) return
    const id = ++runId.current
    clearTimers()
    setActiveIdx(index)
    setVisible([])
    setThinking(false)
    setSheetPhase('idle')
    setSheetRowsShown(0)

    let at = 200
    convo.messages.forEach((msg) => {
      if (msg.role === 'agent') {
        schedule(() => {
          if (runId.current !== id) return
          setThinking(true)
        }, at)
        at += 520
        schedule(() => {
          if (runId.current !== id) return
          setThinking(false)
          setVisible((prev) => [...prev, msg])
        }, at)
        at += 700
      } else {
        schedule(() => {
          if (runId.current !== id) return
          setThinking(false)
          setVisible((prev) => [...prev, msg])
        }, at)
        at += 520
      }
    })

    schedule(() => {
      if (runId.current !== id) return
      setSheetPhase('writing')
      setSheetRowsShown(0)
    }, at + 280)

    convo.sheetRows.forEach((_, i) => {
      schedule(() => {
        if (runId.current !== id) return
        setSheetRowsShown(i + 1)
      }, at + 280 + 380 * (i + 1))
    })

    schedule(() => {
      if (runId.current !== id) return
      setSheetPhase('done')
    }, at + 280 + 380 * (convo.sheetRows.length + 1) + 200)
  }

  const active = activeIdx !== null ? conversations[activeIdx] : null
  const idle = visible.length === 0 && !thinking && sheetPhase === 'idle'

  return (
    <div className="agente-demo" data-no-nav>
      <div className="agente-examples">
        <div className="agente-examples-label">{examplesLabel}</div>
        <div className="agente-example-list">
          {conversations.map((c, i) => (
            <button
              key={c.label}
              type="button"
              className={`agente-example${activeIdx === i ? ' active' : ''}`}
              onClick={() => play(i)}
            >
              <span className="agente-example-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="agente-example-text">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="agente-stage">
        {idle ? <p className="agente-hint">{chatPlaceholder}</p> : null}

        <div className="float-stream">
          {visible.map((m, j) => (
            <div className={`float-line ${m.role} float-in`} key={`${activeIdx}-${j}`}>
              <span className="float-who">{m.role === 'human' ? humanLabel : agentLabel}</span>
              <p className="float-text">{m.text}</p>
            </div>
          ))}
          {thinking ? (
            <div className="float-line agent float-in thinking">
              <span className="float-who">{agentLabel}</span>
              <p className="float-text float-thinking">
                {thinkingLabel}
                <span className="float-dots" aria-hidden>
                  <span />
                  <span />
                  <span />
                </span>
              </p>
            </div>
          ) : null}
        </div>

        {sheetPhase !== 'idle' && active ? (
          <div className={`sheet-flow float-in${sheetPhase === 'done' ? ' done' : ''}`}>
            <div className="sheet-flow-status">
              <span className="sheet-flow-dot" />
              {sheetPhase === 'writing' ? sheetsWriting : sheetsDone}
            </div>
            <div className="sheet-card">
              <div className="sheet-card-bar">
                <span className="sheet-card-icon" aria-hidden />
                <span>Google Sheets</span>
                <span className="sheet-card-tab">cobros</span>
              </div>
              <table className="sheet-table">
                <thead>
                  <tr>
                    {sheetHeaders.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {active.sheetRows.slice(0, sheetRowsShown).map((row, i) => (
                    <tr
                      key={`${row.unit}-${row.concept}-${i}`}
                      className={`sheet-row float-in${row.highlight ? ' highlight' : ''}`}
                    >
                      <td>{row.unit}</td>
                      <td>{row.concept}</td>
                      <td>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

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
            <div className="label">OPENCLAW ON MAC</div>
            <h3>{es ? 'SCARY' : 'SCARY'}</h3>
            <div className="receipt-line">
              <span>Internet</span>
              <span>ON</span>
            </div>
            <div className="receipt-line">
              <span>{es ? 'Archivos' : 'Files'}</span>
              <span>FULL</span>
            </div>
            <div className="receipt-line">
              <span>Shell</span>
              <span>ROOT-ish</span>
            </div>
            <div className="receipt-line">
              <span>TOTAL</span>
              <b>{es ? 'MI MAC' : 'MY MAC'}</b>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">WALLET</div>
            <div>{es ? 'TOKENS 24/7' : 'TOKENS 24/7'}</div>
            <div className="big" style={{ marginTop: 8 }}>
              KILL
            </div>
          </div>
          <div className="tile dark grow">
            <div className="label">HARDWARE</div>
            <div>MAC MINI</div>
            <div className="big">32 GB</div>
          </div>
        </div>

        <div className="holo tile">
          <div className="blob" />
        </div>

        <div className="col">
          <div className="tile wash grow">
            <div className="label">MODEL</div>
            <div>QWEN 9B</div>
            <div className="choice-grid">
              {[1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0].map((on, i) => (
                <div key={i} className={on ? 'cell on' : 'cell'} />
              ))}
            </div>
            <div className="label" style={{ marginTop: 8 }}>
              LOCAL · FITS
            </div>
          </div>
          <div className="tile grow" style={{ background: '#fff4ee' }}>
            <div className="label">CHANNEL</div>
            <div>{es ? 'WHATSAPP' : 'WHATSAPP'}</div>
            <div className="big" style={{ color: '#c2410c' }}>
              BLOCK
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">WIN</div>
            <div>{es ? 'INMOBILIARIA' : 'AGENCY'}</div>
            <div className="score-row">
              <span>SHEETS</span>
              <b>OK</b>
            </div>
            <div className="bars">
              <div className="bar">
                5 <i style={{ width: '40%' }} />
              </div>
              <div className="bar">
                4 <i style={{ width: '82%' }} />
              </div>
              <div className="bar">
                3 <i style={{ width: '55%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">NEXT</div>
            <div>GEMMA 4</div>
            <div className="big">JUMP</div>
            <div className="mini-cam" />
          </div>
        </div>
      </div>
    </div>
  )
}

function TokenScaleCharts({
  charts,
}: {
  charts: (typeof copy)[Lang]['sections']['tokens']['charts']
}) {
  const heights = [18, 32, 48, 72, 100]
  const spark = [8, 14, 18, 28, 36, 48, 62, 78, 88, 100]

  return (
    <div className="token-scale" aria-hidden data-no-nav>
      <div className="token-scale-track">
        <div className="col wide">
          <div className="tile paper grow">
            <div className="label">{charts.usageLabel}</div>
            <h3>{charts.usageTitle}</h3>
            <div className="token-bars">
              {heights.map((h, i) => (
                <div className="token-bar-col" key={charts.months[i]}>
                  <div className="token-bar-track">
                    <i style={{ height: `${h}%` }} />
                  </div>
                  <span>{charts.months[i]}</span>
                </div>
              ))}
            </div>
            <div className="label" style={{ marginTop: 10 }}>
              +∞ IF ALWAYS ON
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile grow">
            <div className="label">{charts.billLabel}</div>
            <h3>{charts.billTitle}</h3>
            {charts.billLines.map((line) => (
              <div className="receipt-line" key={line.name}>
                <span>{line.name}</span>
                <span>{line.value}</span>
              </div>
            ))}
            <div className="receipt-line">
              <span>TOTAL</span>
              <b>{charts.billTotal}</b>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="tile dark grow">
            <div className="label">{charts.rateLabel}</div>
            <div>{charts.rateTitle}</div>
            <div className="big" style={{ marginTop: 8 }}>
              {charts.rateValue}
            </div>
            <div className="token-spark">
              {spark.map((v, i) => (
                <i key={i} style={{ height: `${v}%` }} />
              ))}
            </div>
            <div className="label" style={{ marginTop: 8 }}>
              {charts.rateSub}
            </div>
          </div>
          <div className="tile grow" style={{ background: '#fff4ee' }}>
            <div className="label">{charts.limitLabel}</div>
            <div>{charts.limitTitle}</div>
            <div className="big" style={{ color: '#c2410c' }}>
              {charts.limitValue}
            </div>
            <div className="label" style={{ marginTop: 6 }}>
              {charts.limitSub}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FearGrid({
  title,
  fears,
}: {
  title: string
  fears: readonly { label: string; body: string }[]
}) {
  return (
    <div className="fear-grid" data-no-nav>
      <div className="fear-grid-label">{title}</div>
      <div className="fear-grid-cards">
        {fears.map((f) => (
          <article className="fear-card" key={f.label}>
            <div className="meta">{f.label}</div>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function SpecGrid({ specs }: { specs: readonly { label: string; value: string }[] }) {
  return (
    <div className="spec-grid" data-no-nav>
      {specs.map((s) => (
        <div className="spec-cell" key={s.label}>
          <div className="meta">{s.label}</div>
          <div className="spec-value">{s.value}</div>
        </div>
      ))}
    </div>
  )
}

function NineBVisual({
  paramsTitle,
  paramsBody,
  contextTitle,
  contextBody,
  compare,
}: {
  paramsTitle: string
  paramsBody: string
  contextTitle: string
  contextBody: string
  compare: readonly { label: string; small: string; big: string; note: string }[]
}) {
  return (
    <div className="nineb" data-no-nav>
      <div className="nineb-row">
        <article className="panel nineb-panel">
          <div className="meta">PARAMETERS</div>
          <h3>{paramsTitle}</h3>
          <p>{paramsBody}</p>
          <div className="nineb-bars" aria-hidden>
            <div className="nineb-bar">
              <span>9B</span>
              <i style={{ width: '28%' }} />
            </div>
            <div className="nineb-bar">
              <span>70B</span>
              <i style={{ width: '78%' }} />
            </div>
            <div className="nineb-bar">
              <span>400B+</span>
              <i style={{ width: '100%' }} />
            </div>
          </div>
        </article>
        <article className="panel nineb-panel">
          <div className="meta">CONTEXT</div>
          <h3>{contextTitle}</h3>
          <p>{contextBody}</p>
          <div className="context-window" aria-hidden>
            <div className="context-slot used">prompt</div>
            <div className="context-slot used">history</div>
            <div className="context-slot used">tools</div>
            <div className="context-slot">reply</div>
            <div className="context-slot empty">···</div>
          </div>
        </article>
      </div>
      <div className="nineb-compare">
        {compare.map((c) => (
          <div className="nineb-compare-item" key={c.label}>
            <div className="meta">{c.label}</div>
            <div className="nineb-compare-vals">
              <span>{c.small}</span>
              <span aria-hidden>→</span>
              <b>{c.big}</b>
            </div>
            <div className="label">{c.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="step-list">
      {steps.map((step, i) => (
        <li key={step}>
          <b>{String(i + 1).padStart(2, '0')}</b>
          <span>{step}</span>
        </li>
      ))}
    </ol>
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
                  goTo('openclaw')
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
                ? 'No empecé queriendo IA local. Empecé porque OpenClaw en mi Mac me asustó, y la nube 24/7 me quemó la wallet.'
                : 'I did not start wanting local AI. I started because OpenClaw on my Mac scared me, and cloud 24/7 burned the wallet.'}
            </div>
            <button className="copy-btn" onClick={copyQuote}>
              {copied ? t.copied : t.copyQuote}
            </button>
            <p className="hint">{t.presentHint}</p>
          </aside>
        </div>
      </SlideShell>
    )
  } else if (active === 'openclaw') {
    slide = (
      <SlideShell className="chapter chapter-wide">
        <div className="kicker">{s.openclaw.kicker}</div>
        <h2>{s.openclaw.title}</h2>
        <p className="lead">{s.openclaw.lead}</p>
        <FearGrid title={s.openclaw.fearTitle} fears={s.openclaw.fears} />
        <p>{s.openclaw.closer}</p>
      </SlideShell>
    )
  } else if (active === 'servidor') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.servidor.kicker}</div>
        <h2>{s.servidor.title}</h2>
        <p className="lead">{s.servidor.lead}</p>
        <div className="two">
          {s.servidor.options.map((card) => (
            <article className="panel" key={card.title}>
              <div className="meta">{card.meta}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <p>{s.servidor.closer}</p>
      </SlideShell>
    )
  } else if (active === 'tokens') {
    slide = (
      <SlideShell className="chapter chapter-wide chapter-openai">
        <div className="openai-layout">
          <div className="openai-copy">
            <div className="kicker">{s.tokens.kicker}</div>
            <h2>{s.tokens.title}</h2>
            <p className="lead">{s.tokens.lead}</p>
            <p>{s.tokens.closer}</p>
          </div>
          <TokenScaleCharts charts={s.tokens.charts} />
        </div>
      </SlideShell>
    )
  } else if (active === 'local') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.local.kicker}</div>
        <h2>{s.local.title}</h2>
        <p className="lead">{s.local.lead}</p>
        <StepList steps={s.local.steps} />
        <p>{s.local.closer}</p>
      </SlideShell>
    )
  } else if (active === 'macmini') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.macmini.kicker}</div>
        <h2>{s.macmini.title}</h2>
        <p className="lead">{s.macmini.lead}</p>
        <SpecGrid specs={s.macmini.specs} />
        <p>{s.macmini.closer}</p>
      </SlideShell>
    )
  } else if (active === 'glm') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.glm.kicker}</div>
        <h2>{s.glm.title}</h2>
        <p className="lead">{s.glm.lead}</p>
        <p className="callout glm-verdict">{s.glm.verdict}</p>
        <div className="tasks">
          {s.glm.points.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <p>{s.glm.closer}</p>
      </SlideShell>
    )
  } else if (active === 'nueveb') {
    slide = (
      <SlideShell className="chapter chapter-wide">
        <div className="kicker">{s.nueveb.kicker}</div>
        <h2>{s.nueveb.title}</h2>
        <p className="lead">{s.nueveb.lead}</p>
        <NineBVisual
          paramsTitle={s.nueveb.paramsTitle}
          paramsBody={s.nueveb.paramsBody}
          contextTitle={s.nueveb.contextTitle}
          contextBody={s.nueveb.contextBody}
          compare={s.nueveb.compare}
        />
        <p className="shift">{s.nueveb.insight}</p>
      </SlideShell>
    )
  } else if (active === 'lmstudio') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.lmstudio.kicker}</div>
        <h2>{s.lmstudio.title}</h2>
        <p className="lead">{s.lmstudio.lead}</p>
        <div className="pills">
          {s.lmstudio.pills.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <p>{s.lmstudio.closer}</p>
      </SlideShell>
    )
  } else if (active === 'agente') {
    slide = (
      <SlideShell className="chapter chapter-wide">
        <div className="kicker">{s.agente.kicker}</div>
        <h2>{s.agente.title}</h2>
        <p className="lead">{s.agente.lead}</p>
        <AgenteDemo
          examplesLabel={s.agente.examplesLabel}
          chatPlaceholder={s.agente.chatPlaceholder}
          humanLabel={s.agente.humanLabel}
          agentLabel={s.agente.agentLabel}
          thinkingLabel={s.agente.thinkingLabel}
          sheetsWriting={s.agente.sheetsWriting}
          sheetsDone={s.agente.sheetsDone}
          sheetHeaders={s.agente.sheetHeaders}
          conversations={s.agente.conversations}
        />
        <div className="formula">{s.agente.formula}</div>
        <p>{s.agente.closer}</p>
      </SlideShell>
    )
  } else if (active === 'gemma') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.gemma.kicker}</div>
        <h2>{s.gemma.title}</h2>
        <p className="lead">{s.gemma.lead}</p>
        <div className="lessons">
          {s.gemma.points.map((lesson, i) => (
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
  } else if (active === 'next') {
    slide = (
      <SlideShell className="chapter">
        <div className="kicker">{s.next.kicker}</div>
        <h2>{s.next.title}</h2>
        <p className="lead">{s.next.lead}</p>
        <div className="two">
          {s.next.ideas.map((card) => (
            <article className="panel" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <article className="incident alert">
          <h3>{s.next.block.title}</h3>
          <p>{s.next.block.body}</p>
        </article>
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
          <div className="brand-mark">BJ</div>
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
