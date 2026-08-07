<script setup>
import Knits from '../components/specialization/Knits.vue'
import Sweater from '../components/specialization/Sweater.vue'
import Denim from '../components/specialization/Denim.vue'
</script>

<template>
  <main class="page">
    <section class="section">
      <div class="eyebrow">Specialization</div>
      <h1 class="section-title">What We Manufacture</h1>
      <p class="section-text">
        Rainbow Doll runs dedicated factories for each garment category, so every piece is made by a
        team that specializes in it. Jump to a category below.
      </p>
      <nav class="spec-jumpnav">
        <a href="#knits" class="spec-jump-btn">Knits</a>
        <a href="#sweater" class="spec-jump-btn">Sweater</a>
        <a href="#denim" class="spec-jump-btn">Denim</a>
      </nav>
    </section>

    <Knits />
    <Sweater />
    <Denim />
  </main>
</template>
