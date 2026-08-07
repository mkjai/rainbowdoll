<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import MenuOverlay from './components/MenuOverlay.vue'

const menuOpen = ref(false)
</script>

<template>
  <Navbar :menu-open="menuOpen" @toggle-menu="menuOpen = true" />
  <MenuOverlay :open="menuOpen" @close="menuOpen = false" />

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>