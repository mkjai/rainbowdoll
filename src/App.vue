<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import MenuOverlay from './components/MenuOverlay.vue'
import LoadingScreen from './components/LoadingScreen.vue'

const menuOpen = ref(false)
const loading = ref(true)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1600)
})
</script>

<template>
  <Transition name="loader-fade">
    <LoadingScreen v-if="loading" />
  </Transition>

  <Navbar :menu-open="menuOpen" @toggle-menu="toggleMenu" />
  <MenuOverlay :open="menuOpen" @close="menuOpen = false" />

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
