import React from 'react';
import Data from './data/projects.json';
import './styles/certifications.css';

const groups = [
  { title: 'Enterprise engineering', items: ['Oracle APEX', 'PL/SQL', 'SQL', 'Oracle Database', 'ORDS', 'REST APIs', 'Financial software'] },
  { title: 'AI engineering', items: ['Generative AI', 'LLMs', 'AI agents', 'Tool calling', 'RAG', 'Vector search', 'Semantic search', 'OpenAI API', 'OCI AI', 'Ollama'] },
  { title: 'Product development', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Cypress', 'Jenkins', 'Git', 'CI/CD', 'MCP'] },
];

const experience = [
  { role: 'Software Developer', company: 'Virtual Trader', dates: 'Nov 2021 — Present', location: 'Coventry, United Kingdom', text: 'Building enterprise financial applications and practical AI capabilities across Oracle APEX, PL/SQL, SQL, JavaScript, React, and REST services.' },
  { role: 'Website Developer', company: 'Acqua Nera LTD', dates: 'Feb 2021 — Nov 2021', location: 'Birmingham, United Kingdom', text: 'Developed and maintained responsive Shopify storefronts, custom Liquid themes, integrations, and SEO improvements.' },
];

const credentials = [
  { name: 'Oracle Fusion AI Agent Studio Certified Foundations Associate', issuer: 'Oracle · Feb 2026', href: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=3B304ACAD656B8B2BE82273C05DFFBAA9E5798A6B3E65675A484C9490B90F7FE' },
  { name: 'AI_devs 3 — Agents Reloaded', issuer: 'AI_devs · Jun 2025', href: 'https://credsverse.com/credentials/f82b8184-3c2a-446a-ab39-2f1e435d1054' },
  { name: 'Oracle AI Vector Search Certified Professional', issuer: 'Oracle · Apr 2025 · Valid to Apr 2027', href: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=345F2F34C641D3E2816422886D456894CDB738E00A12A7A9D6523CFCB64D55F2' },
  { name: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional', issuer: 'Oracle · Jun 2024 · Expired Jun 2026', href: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9208982C13C83A5651556E40DFF80B3FDAD601DE47CF76F6FAF886357EB48556' },
  { name: 'Postman: The Complete Guide — REST API Testing', issuer: 'Udemy · Mar 2024', href: 'https://www.udemy.com/certificate/UC-f9d3b003-6eb5-4552-ab1d-5aa2aabd3a14/' },
  { name: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate', issuer: 'Oracle · Dec 2023 · Expired Dec 2025', href: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=7A35E04DB27881B5480C0CEDCA6EB354C53396DC8FA135AEE9FEC159E0CBE52C' },
  { name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate', issuer: 'Oracle · Jul 2023 · Expired Jul 2025', href: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=64459BA4EE5783552D284EE5622B137ADB2301CCA8D60E8C2117433559DE8480' },
  { name: 'Oracle APEX Cloud Developer Certified Professional', issuer: 'Oracle · Jul 2023' },
  { name: 'Oracle APEX: Foundations', issuer: 'Oracle · Oct 2022' },
];

const privateWork = [
  { title: 'Enterprise financial applications', text: 'Contributing to accounting workflows, intercompany settlements, transfer pricing, reconciliation, and financial reporting.' },
  { title: 'Financial dashboards', text: 'Building interactive reporting experiences that connect React interfaces with Oracle APEX and SQL services.' },
  { title: 'Applied AI in enterprise software', text: 'Exploring LLM integrations, AI agents, semantic search, and context-aware workflows across hosted and local models.' },
  { title: 'Automation and engineering workflows', text: 'Developing automated testing and AI-assisted workflows with Cypress, Jenkins, GitHub, and MCP tools.' },
];

function App() {
  const projects = Data;
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Konrad Szymanski home">konrad<span>.dev</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#writing">Writing</a><a href="#contact">Contact</a>
        </nav>
        <a className="top-cta" href="https://www.linkedin.com/in/konrad-szymanski-92790311a/" target="_blank" rel="noreferrer">Let’s connect <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · UNITED KINGDOM</p>
            <h1>Building enterprise software with <em>intelligence.</em></h1>
            <p className="hero-lede">I’m Konrad — an engineer working across Oracle APEX, financial applications, and applied AI. I turn complex workflows into useful, reliable software.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a className="text-link" href="https://www.linkedin.com/in/konrad-szymanski-92790311a/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div>
          </div>
          <aside className="hero-aside" aria-label="Professional focus">
            <span className="aside-label">CURRENTLY FOCUSED ON</span>
            <p>Enterprise applications<br />Applied AI &amp; LLMs<br />Intelligent automation</p>
            <div className="aside-rule" />
            <span className="aside-label">EXPERIENCE</span><strong>5 years</strong><small>Building software since 2021</small>
          </aside>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker"><span>01</span><span>ABOUT</span></div>
          <div className="intro-content">
            <h2>From business workflows to thoughtful software.</h2>
            <p>I’m a UK-based Software Engineer with around five years of experience developing enterprise financial applications. At Virtual Trader, I work with Oracle APEX, PL/SQL, SQL, JavaScript, and React to build applications, dashboards, REST integrations, automated tests, and AI-powered features.</p>
            <p>My current interests include generative AI, LLM applications, agents, retrieval-augmented generation, semantic search, and using coding agents to improve how software gets built. I’m an Oracle-certified developer, and I enjoy sharing what I learn along the way.</p>
            <div className="facts"><div><strong>01</strong><span>Enterprise<br />applications</span></div><div><strong>02</strong><span>Applied AI<br />engineering</span></div><div><strong>03</strong><span>Automation<br />&amp; tooling</span></div></div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-kicker"><span>02</span><span>SELECTED WORK</span></div>
          <div className="section-heading"><div><h2>Solving real problems,<br /><em>one system at a time.</em></h2></div><p>A selection of public projects and high-level engineering work. Employer examples are intentionally kept general.</p></div>
          <div className="private-grid">{privateWork.map((item, i) => <article className="private-card" key={item.title}><span className="card-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-tags">ENGINEERING · AUTOMATION</span></article>)}</div>
          <div className="personal-heading"><span>PERSONAL PROJECTS</span><span className="heading-line" /></div>
          <div className="project-grid">{projects.slice(0, 6).map((project) => <article className="project-card" key={project.title}>
            <a className="project-image" href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><img src={`/${project.img}`} alt={`${project.title} preview`} loading="lazy" /><span className="project-open" aria-hidden="true">↗</span></a>
            <div className="project-meta"><span>{project.type?.replace(/^#/, '') || 'Personal project'}</span><span>↗</span></div><h3><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></h3><p>{project.description}</p>
          </article>)}</div>
        </section>

        <section className="writing section-wrap" id="writing">
          <div className="section-kicker"><span>03</span><span>WRITING &amp; IDEAS</span></div>
          <div className="writing-card"><div><span className="eyebrow">LOW CODE · AUTOMATION · ENGINEERING</span><h2>Notes from the<br /><em>things I build.</em></h2><p>Practical writing on Oracle APEX, low-code development, automation, and real-world engineering lessons.</p><a className="button button-primary" href="https://konradlogs.hashnode.dev/" target="_blank" rel="noreferrer">Read Konrad Logs <span aria-hidden="true">↗</span></a></div><div className="writing-visual" aria-hidden="true"><span>01</span><span>SELECT ideas<br />FROM experience;</span><span>↑ KEEP LEARNING</span></div></div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-kicker"><span>04</span><span>EXPERIENCE</span></div>
          <h2>Where I’ve been<br /><em>putting it into practice.</em></h2>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-date">{item.dates}</div><div className="timeline-copy"><h3>{item.role}</h3><div className="timeline-company">{item.company} <span>·</span> {item.location}</div><p>{item.text}</p></div></article>)}</div>
          <p className="earlier-note">Earlier experience in gaming operations and team leadership shaped how I approach collaboration, responsibility, and solving problems under pressure.</p>
        </section>

        <section className="skills section-wrap">
          <div className="section-kicker"><span>05</span><span>TOOLKIT</span></div><h2>Tools I use to<br /><em>make things work.</em></h2>
          <div className="skill-groups">{groups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>

        <section className="credentials section-wrap">
          <div className="section-kicker"><span>06</span><span>CERTIFICATIONS</span></div><h2>Learning that<br /><em>keeps moving.</em></h2>
          <ul className="credential-list">{credentials.map((credential) => <li key={credential.name}>{credential.href ? <a className="credential-name" href={credential.href} target="_blank" rel="noreferrer">{credential.name}<span aria-hidden="true">↗</span></a> : <span>{credential.name}</span>}<small>{credential.issuer}</small></li>)}</ul>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker"><span>07</span><span>CONTACT</span></div><p className="eyebrow">HAVE A GOOD PROBLEM TO SOLVE?</p><h2>Let’s build something<br /><em>that matters.</em></h2>
          <div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/konrad-szymanski-92790311a/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a><a className="button button-quiet" href="https://github.com/konradszymanski" target="_blank" rel="noreferrer">Explore GitHub <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#home">konrad<span>.dev</span></a><span>Designed &amp; built by Konrad Szymanski · 2026</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;

