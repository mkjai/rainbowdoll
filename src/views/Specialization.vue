<script setup></script>

<template>
  <main class="page">
    <section class="section">
      <div class="eyebrow">Specialization</div>
      <h1 class="section-title">What We Manufacture</h1>
      <p class="section-text">
        Rainbow Doll runs dedicated factories for each garment category, so every piece is made by a
        team that specializes in it.
      </p>
      <div class="card-grid intro-why-grid">
        <RouterLink to="/specialization/knits" class="card">
          <h3 class="card-title">Knits</h3>
          <p class="section-text">
            Precision knitwear production, from fine gauge to chunky knits.
          </p>
        </RouterLink>
        <RouterLink to="/specialization/sweater" class="card">
          <h3 class="card-title">Sweater</h3>
          <p class="section-text">Quality sweater manufacturing built on decades of craft.</p>
        </RouterLink>
        <RouterLink to="/specialization/denim" class="card">
          <h3 class="card-title">Denim</h3>
          <p class="section-text">
            Full-service denim production, from raw fabric to finished wash.
          </p>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
