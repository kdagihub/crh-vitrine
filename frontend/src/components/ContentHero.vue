<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description: string }>()
</script>

<template>
  <section class="content-hero">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="content-lead">{{ description }}</p>
      <slot />
    </div>
  </section>
</template>
