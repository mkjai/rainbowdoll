<script setup>
import logo from '../assets/logo.png'
</script>

<template>
  <div class="loading-screen">
    <img :src="logo" alt="Rainbow Doll logo" class="loading-logo-img" />
    <div class="loading-bar-track">
      <div class="loading-bar-fill"></div>
    </div>
  </div>
</template>
