<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const specOpen = ref(route.path === '/specialization')

watch(
  () => route.path,
  (path) => {
    if (path === '/specialization') specOpen.value = true
  },
)
</script>

<template>
  <nav class="side-nav" aria-label="Main navigation">
    <RouterLink to="/" class="side-link">Introduction</RouterLink>

    <div>
      <div class="side-item-row">
        <RouterLink to="/specialization" class="side-link">Specialization</RouterLink>
        <button
          class="side-caret-btn"
          :aria-label="specOpen ? 'Collapse specialization list' : 'Expand specialization list'"
          @click="specOpen = !specOpen"
        >
          <span class="menu-caret" :class="{ open: specOpen }">&darr;</span>
        </button>
      </div>
      <div v-if="specOpen" class="side-sub">
        <RouterLink :to="{ path: '/specialization', hash: '#knits' }" class="side-sub-link"
          >Knits</RouterLink
        >
        <RouterLink :to="{ path: '/specialization', hash: '#sweater' }" class="side-sub-link"
          >Sweater</RouterLink
        >
        <RouterLink :to="{ path: '/specialization', hash: '#denim' }" class="side-sub-link"
          >Denim</RouterLink
        >
        <RouterLink
          :to="{ path: '/specialization', hash: '#garment-dye' }"
          class="side-sub-link side-sub-link-nested"
          >Garment Dye</RouterLink
        >
      </div>
    </div>

    <RouterLink to="/factory" class="side-link">Process</RouterLink>
    <RouterLink to="/quote" class="side-link">Contact</RouterLink>
  </nav>
</template>
