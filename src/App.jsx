import { useEffect, useState } from "react";
import { profile, skills, services, projects, timeline } from "./data.js";

const NAV = [
  ["Sobre mí", "#sobre"],
  ["Stack", "#stack"],
  ["Proyectos", "#proyectos"],
  ["Trayectoria", "#trayectoria"],
  ["Contacto", "#contacto"],
];

function Avatar() {
  const [ok, setOk] = useState(true);
  return (
    <div className="avatar">
      {ok ? (
        <img src={profile.photo} alt={`Foto de ${profile.name}`} onError={() => setOk(false)} />
      ) : (
        <span aria-hidden="true">DA</span>
      )}
    </div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">DA</a>
      <nav aria-label="Principal">
        {NAV.map(([t, h]) => (
          <a key={h} href={h}>{t}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const lines = [
    ["nombre", profile.name],
    ["rol", profile.role],
    ["stack", "JavaScript, TypeScript, Python"],
    ["base", "PostgreSQL, MySQL"],
    ["estado", "disponible para proyectos"],
  ];
  return (
    <section className="hero" id="top">
      <div className="floor" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <h1 className="title">
            <span>{profile.name.split(" ")[0]}</span>
            <span className="glow">{profile.name.split(" ")[1]}</span>
          </h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.tagline}</p>
          <div className="cta">
            <a className="btn primary" href="#contacto">Hablemos de tu proyecto</a>
            <a className="btn" href={profile.cv} download>Descargar CV en PDF</a>
          </div>
        </div>
        <aside className="console" aria-label="Resumen del perfil">
          <div className="console-top">
            <Avatar />
            <div>
              <strong>{profile.name}</strong>
              <small>{profile.location}</small>
            </div>
          </div>
          <ul>
            {lines.map(([k, v], i) => (
              <li key={k} style={{ "--i": i }}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </li>
            ))}
            <li style={{ "--i": lines.length }}><span className="caret" /></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const move = (e) => {
      const r = document.documentElement.style;
      r.setProperty("--mx", e.clientX + "px");
      r.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const links = Object.entries(profile.links).filter(([, v]) => v);

  return (
    <>
      <div className="aura" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />

        <Section id="sobre" title="Sobre mí">
          <div className="about">
            <p>{profile.about}</p>
            <div className="services">
              {services.map(([t, d]) => (
                <article key={t} className="card">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="stack" title="Stack">
          <div className="stack">
            {skills.map((g) => (
              <div key={g.group} className="stack-row">
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proyectos" title="Proyectos">
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="card project">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <p className="muted">Proyectos hechos durante mi formación. Los nuevos aparecerán aquí.</p>
        </Section>

        <Section id="trayectoria" title="Trayectoria">
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title}>
                <time>{t.when}</time>
                <h3>{t.title}</h3>
                <small>{t.where}</small>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contacto" title="Contacto">
          <div className="contact card">
            <p>¿Tienes una idea o un error que no se deja arreglar? Cuéntame y lo revisamos.</p>
            <div className="cta">
              {links.map(([name, href], i) => (
                <a key={name} className={"btn" + (i === 0 ? " primary" : "")} href={href} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
