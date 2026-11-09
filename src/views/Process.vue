<script setup>
const steps = [
  {
    title: 'Sourcing',
    text: 'Fabrics, trims, and washes approved with you.',
  },
  {
    title: 'Cutting',
    text: 'Fabric cut to pattern for the sewing lines.',
  },
  {
    title: 'Sewing',
    text: 'Eight lines, backed by a 28-person sample room.',
  },
  {
    title: 'Embroidery & Print',
    text: 'In-house embroidery and print decoration.',
  },
  {
    title: 'Inspection',
    text: 'Construction, measurements, and finish checked.',
  },
  {
    title: 'Packing',
    text: 'Folded, labeled, and packed to spec.',
  },
  {
    title: 'Shipping',
    text: 'Out from our finished goods warehouse.',
  },
]

const stats = [
  { value: '10,000', unit: 'm²', label: 'Factory floor' },
  { value: '400+', label: 'Production employees' },
  { value: '8', label: 'Sewing production lines' },
  { value: '210K', label: 'Pieces produced monthly' },
  { value: '28', label: 'Sample room specialists' },
  { value: '2,000', label: 'Sample pieces per month' },
]
</script>

<template>
  <main class="page">
    <section class="section">
      <div class="eyebrow">Process</div>
      <h1 class="section-title">From Fabric to Finished Garment</h1>
      <p class="section-text">
        Every order moves through one factory under one roof — from raw fabric to packed, inspected
        garments ready to ship. Keeping each step in-house means tighter quality control, clearer
        communication, and shorter lead times for your production.
      </p>

      <ol class="process-steps">
        <li v-for="(step, i) in steps" :key="step.title" class="process-step">
          <h3 class="process-step-title">{{ i + 1 }}. {{ step.title }}</h3>
          <p class="process-step-text">{{ step.text }}</p>
        </li>
      </ol>
    </section>

    <section class="section process-section-line">
      <div class="eyebrow">Our Factory</div>
      <h2 class="section-title">Factory at a Glance</h2>
      <div class="stat-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <div class="stat-value" :class="{ 'stat-value-one': stat.value.startsWith('1') }">
            {{ stat.value }}<span v-if="stat.unit" class="stat-unit">{{ stat.unit }}</span>
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>
  </main>
</template>
