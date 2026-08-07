<script setup>
import logo from '../assets/logo.png'

defineProps({
  menuOpen: Boolean,
})
defineEmits(['toggle-menu'])
</script>

<template>
  <header class="navbar">
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
