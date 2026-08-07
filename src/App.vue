<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import MenuOverlay from './components/MenuOverlay.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <Navbar :menu-open="menuOpen" @toggle-menu="toggleMenu" />
  <MenuOverlay :open="menuOpen" @close="menuOpen = false" />

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>