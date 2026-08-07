<script setup>
defineProps({
  menuOpen: Boolean,
})
defineEmits(['toggle-menu'])
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="navbar-logo">Rainbow<span>Doll</span></RouterLink>
    <button class="menu-btn" aria-label="Open menu" @click="$emit('toggle-menu')">
      <span class="menu-btn-bar top"></span>
      <span class="menu-btn-bar bottom"></span>
    </button>
  </header>
</template>
