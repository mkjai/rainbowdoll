<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logo from '../assets/logo.png'

defineProps({
  menuOpen: Boolean,
})
defineEmits(['toggle-menu'])

// On mobile the logo starts large and shrinks once the page is scrolled.
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="navbar" :class="{ scrolled, 'menu-open': menuOpen }">
    <RouterLink to="/" class="navbar-logo" aria-label="Rainbow Doll home">
      <img :src="logo" alt="Rainbow Doll logo" class="navbar-logo-img" />
    </RouterLink>
    <button
      class="menu-btn"
      :class="{ open: menuOpen }"
      :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      @click="$emit('toggle-menu')"
    >
      <span class="menu-btn-bar"></span>
      <span class="menu-btn-bar"></span>
      <span class="menu-btn-bar"></span>
    </button>
  </header>
</template>
