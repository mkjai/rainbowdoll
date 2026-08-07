<script setup>
import { ref } from 'vue'

defineProps({
  open: Boolean,
})
const emit = defineEmits(['close'])

const specOpen = ref(false)

function closeAll() {
  specOpen.value = false
  emit('close')
}
</script>

<template>
  <Transition name="menu-fade">
    <div v-if="open" class="menu-overlay">
      <nav class="menu-overlay-body">
        <RouterLink to="/" class="menu-link" @click="closeAll">Introduction</RouterLink>

        <div>
          <div class="menu-item-row menu-link" @click="specOpen = !specOpen">
            <span>Specialization</span>
            <span class="menu-caret" :class="{ open: specOpen }">&darr;</span>
          </div>
          <div v-if="specOpen" class="menu-sub">
            <a href="/specialization#knits" class="menu-sub-link" @click="closeAll">Knits</a>
            <a href="/specialization#sweater" class="menu-sub-link" @click="closeAll">Sweater</a>
            <a href="/specialization#denim" class="menu-sub-link" @click="closeAll">Denim</a>
          </div>
        </div>

        <RouterLink to="/factory" class="menu-link" @click="closeAll">Factory</RouterLink>
        <RouterLink to="/quote" class="menu-link" @click="closeAll">Quote</RouterLink>
      </nav>
    </div>
  </Transition>
</template>
