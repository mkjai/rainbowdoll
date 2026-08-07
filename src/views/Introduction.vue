<script setup></script>

<template>
  <main class="page">
    <!-- Hero -->
    <section class="section intro-hero">
      <div class="eyebrow">Global Clothing Manufacturer &amp; Sourcing Agent</div>
      <h1 class="section-title">Rainbow Doll</h1>
      <p class="section-text">
        We connect brands with dedicated garment factories across Southern China, specializing in
        knits, sweaters, and denim — backed by sourcing offices in the US and Asia, and a team with
        over 20 years of production experience.
      </p>
      <div class="photo-placeholder intro-hero-photo">
        Photo: fabric / knitwear close-up
        <!-- Suggested Unsplash search: "knitwear texture" or "fabric rolls" -->
      </div>
    </section>

    <!-- About Us -->
    <section class="section">
      <div class="two-col">
        <div class="photo-placeholder">
          Photo: sourcing office / team at work
          <!-- Suggested Unsplash search: "office team textile design" -->
        </div>
        <div>
          <div class="eyebrow">About Us</div>
          <h2 class="section-title">A vertically integrated sourcing partner</h2>
          <p class="section-text">
            Rainbow Doll is a vertical clothing manufacturer with direct factory relationships
            across Southern China. From first sample to final shipment, our team manages sourcing,
            production, and quality control end-to-end — so clients get a single point of contact
            instead of juggling multiple vendors.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section">
      <div class="eyebrow">Why Choose Us</div>
      <h2 class="section-title">Built for reliable, efficient production</h2>
      <div class="card-grid intro-why-grid">
        <div class="card">
          <h3 class="card-title">Vertical &amp; Direct Sourcing</h3>
          <p class="section-text">
            We work directly with factories, cutting out middlemen for better pricing and faster
            turnaround.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">Global Sourcing Offices</h3>
          <p class="section-text">
            With teams in the US and Asia, communication stays clear and support is available around
            the clock.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">20+ Years of Experience</h3>
          <p class="section-text">
            Every member of our team brings deep, hands-on knowledge of clothing production.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">Competitive Pricing</h3>
          <p class="section-text">
            Direct factory access and efficient operations keep costs down without cutting corners.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">24/7 Production Monitoring</h3>
          <p class="section-text">
            Our QA and production teams track every order continuously, from cutting to packing.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">Dedicated Factories per Category</h3>
          <p class="section-text">
            Woven, denim, and sweater production each run through factories specialized in that
            craft.
          </p>
        </div>
      </div>
    </section>

    <!-- Locations teaser -->
    <section class="section">
      <div class="two-col">
        <div>
          <div class="eyebrow">Locations</div>
          <h2 class="section-title">Offices in the US, Hong Kong &amp; China</h2>
          <p class="section-text">
            Our factories are based in Southern China, with sourcing offices in the US, Hong Kong,
            and mainland China keeping production close to the ground and communication close to our
            clients.
          </p>
        </div>
        <div class="photo-placeholder">
          Photo: factory floor / production line
          <!-- Suggested Unsplash search: "garment factory sewing" -->
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section intro-cta">
      <h2 class="section-title">Ready to start production?</h2>
      <p class="section-text">Tell us what you need and we'll put together a quote.</p>
      <RouterLink to="/quote" class="submit-btn">Request a Quote</RouterLink>
    </section>
  </main>
</template>
