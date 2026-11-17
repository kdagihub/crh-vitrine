<script setup lang="ts">
import { Droplets, Zap, Recycle, HeartHandshake } from 'lucide-vue-next'
import ContentHero from '@/components/ContentHero.vue'
import PndNotice from '@/components/PndNotice.vue'
import { livingSections } from '@/data/pnd'
const icons = [Droplets, Zap, Recycle, HeartHandshake]
const metrics = [
  { value: '515', label: 'pompes à réparer', detail: '60 à remplacer et 104 à entretenir' },
  { value: '4', label: 'localités à électrifier', detail: 'Objectif annoncé : 100 % de couverture' },
  { value: '12 villes', label: 'concernées par l’eau potable', detail: 'Poursuite du programme, dont Katiola' },
]
</script>

<template>
  <ContentHero eyebrow="Bien vivre dans le Hambol" title="Mieux vivre et accéder aux services" description="Eau potable, énergie, assainissement, inclusion et justice : les perspectives du PND 2026–2030 pour le cadre de vie.">
    <nav class="section-nav" aria-label="Thématiques du cadre de vie"><a v-for="section in livingSections" :key="section.id" :href="`#${section.id}`">{{ section.title }}</a></nav>
  </ContentHero>
  <section class="section"><div class="container">
    <p class="eyebrow">Perspectives 2026–2030</p><h2 class="section-title">Des services au plus près des habitants.</h2>
    <div class="metric-grid"><article v-for="metric in metrics" :key="metric.label" class="metric-card"><strong>{{ metric.value }}</strong><h3>{{ metric.label }}</h3><p>{{ metric.detail }}</p></article></div>
    <PndNotice />
    <div class="project-grid living-grid"><article v-for="(section, index) in livingSections" :id="section.id" :key="section.id" class="project-card"><component :is="icons[index]" class="project-icon" :size="30" aria-hidden="true" /><h2>{{ section.title }}</h2><ul><li v-for="item in section.items" :key="item">{{ item }}</li></ul></article></div>
  </div></section>
</template>
