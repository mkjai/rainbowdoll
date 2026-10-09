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
      <div class="photo-masonry">
        <img
          src="https://images.unsplash.com/photo-1602706294170-1fed8eecd9f9?auto=format&amp;fit=crop&amp;w=900&amp;q=80"
          alt="Close-up of knit textile fabric"
        />
        <img
          src="https://images.unsplash.com/photo-1459792323369-14e51bb68de0?auto=format&amp;fit=crop&amp;w=900&amp;q=80"
          alt="Assorted colorful thread spools"
        />
        <img
          src="https://images.unsplash.com/photo-1670764732222-e787bccd934f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"
          alt="Macro close-up of cream wool yarn"
        />
      </div>
    </section>

    <!-- About Us -->
    <section class="section">
      <div class="two-col">
        <img
          class="section-photo"
          src="https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
          alt="Sourcing and design team collaborating in a studio"
        />
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
        <img
          class="section-photo"
          src="https://images.unsplash.com/photo-1742280923627-d7558b7bb1d5?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
          alt="Garment factory workers on the production line"
        />
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
