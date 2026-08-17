import React from 'react'

const phone = '08341632413'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Sagar+Plywood+Glass+Hardware+Mothi+Nagar+Hyderabad'

function Arrow() { return <span aria-hidden="true">↗</span> }

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="notice">Open today until 9:00 PM <span>•</span> Borabanda, Hyderabad</div>
      <header>
        <a className="brand" href="#top" aria-label="Sagar home">
          <span className="brand-mark">S</span>
          <span>SAGAR <small>PLYWOOD • GLASS • HARDWARE</small></span>
        </a>
        <nav aria-label="Main navigation">
          <button onClick={() => scrollTo('products')}>Products</button>
          <button onClick={() => scrollTo('about')}>Why Sagar</button>
          <button onClick={() => scrollTo('visit')}>Visit us</button>
        </nav>
        <a className="header-call" href={`tel:${phone}`}>Call the store <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">YOUR TRUSTED MATERIAL PARTNER</p>
            <h1>Built for every <em>good idea.</em></h1>
            <p className="intro">From a small repair to your dream interior, find dependable plywood, glass, hardware and straightforward advice under one roof.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={`tel:${phone}`}>Call 083416 32413 <Arrow /></a>
              <button className="text-button" onClick={() => scrollTo('products')}>Explore our range <span>↓</span></button>
            </div>
            <div className="rating"><strong>3.7</strong><span className="stars">★★★★<i>★</i></span><span>Rated by local customers</span></div>
          </div>
          <div className="hero-image" role="img" aria-label="Warm wooden interior materials">
            <div className="image-tag"><span>01</span><b>QUALITY THAT<br />HOLDS UP</b></div>
          </div>
        </section>

        <section className="marquee" aria-label="Shop categories"><span>PLYWOOD</span><i>✦</i><span>GLASS</span><i>✦</i><span>HARDWARE</span><i>✦</i><span>DELIVERY AVAILABLE</span></section>

        <section className="products section" id="products">
          <div className="section-title"><p className="eyebrow">WHAT WE STOCK</p><h2>Everything your project needs.</h2></div>
          <div className="product-grid">
            <article className="product-card wood"><div className="product-number">01</div><h3>Plywood & boards</h3><p>Strong sheets and board materials for furniture, interiors and everyday builds.</p><a href={`tel:${phone}`}>Ask about availability <Arrow /></a></article>
            <article className="product-card glass"><div className="product-number">02</div><h3>Glass solutions</h3><p>Practical glass options for homes, offices, cabinets and custom installations.</p><a href={`tel:${phone}`}>Ask about availability <Arrow /></a></article>
            <article className="product-card hardware"><div className="product-number">03</div><h3>Hardware essentials</h3><p>The fittings, fasteners and finishing touches that bring your work together.</p><a href={`tel:${phone}`}>Ask about availability <Arrow /></a></article>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-photo" role="img" aria-label="Detailed wood grain"></div>
          <div className="about-copy"><p className="eyebrow">LOCAL. HELPFUL. RELIABLE.</p><h2>Good materials begin with good service.</h2><p>Whether you know exactly what you need or want a second opinion, we are here to make sourcing materials simple. Stop by our store in Mothi Nagar or call ahead to check stock.</p><div className="service-points"><span>✓ In-store shopping</span><span>✓ In-store pick-up</span><span>✓ Delivery available</span></div></div>
        </section>

        <section className="visit" id="visit">
          <div><p className="eyebrow">COME SAY HELLO</p><h2>Let’s get your<br /><em>project moving.</em></h2></div>
          <div className="visit-details"><p><b>Shop address</b><br />Shop No. 1-116, 116, No 10 Rd,<br />Mothi Nagar, Rama Rao Nagar,<br />Borabanda, Hyderabad, Telangana 500114</p><a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <Arrow /></a></div>
        </section>
      </main>

      <footer><a className="brand" href="#top"><span className="brand-mark">S</span><span>SAGAR <small>PLYWOOD • GLASS • HARDWARE</small></span></a><p>Open daily · Closes 9:00 PM</p><a href={`tel:${phone}`}>083416 32413</a></footer>
    </>
  )
}

export default App
