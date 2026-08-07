<script setup>
defineProps({
  menuOpen: Boolean,
})
defineEmits(['toggle-menu'])
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="navbar-logo" aria-label="Rainbow Doll home">LOGO</RouterLink>
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
