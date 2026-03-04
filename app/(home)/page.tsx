import React from 'react'

export default function Page() {
  return (
    <section className="hero">
      <h1>Welcome — August White</h1>
      <p className="muted">A simple starter site built with Next.js App Router.</p>
      <div style={{marginTop:18}}>
        <a href="#about" style={{color:'var(--accent)',textDecoration:'none'}}>Learn more →</a>
      </div>
    </section>
  )
}