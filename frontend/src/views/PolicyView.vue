<script setup lang="ts">
import ContentHero from '@/components/ContentHero.vue'
import PndNotice from '@/components/PndNotice.vue'
import { policySections } from '@/data/pnd'
</script>

<template>
  <ContentHero eyebrow="Agir pour le Hambol" title="Actions publiques" description="Les perspectives du PND 2026–2030 pour produire, apprendre, se soigner et mieux relier les territoires.">
    <nav class="section-nav" aria-label="Domaines d’intervention">
      <a v-for="section in policySections" :key="section.id" :href="`#${section.id}`">{{ section.eyebrow }}</a>
    </nav>
  </ContentHero>
  <div class="container"><PndNotice /></div>
  <section v-for="section in policySections" :id="section.id" :key="section.id" class="section content-section">
    <div class="container">
      <p class="eyebrow">{{ section.eyebrow }}</p>
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-copy">{{ section.description }}</p>
      <div class="metric-grid">
        <article v-for="metric in section.metrics" :key="metric.label" class="metric-card">
          <strong>{{ metric.value }}</strong><h3>{{ metric.label }}</h3><p>{{ metric.detail }}</p>
        </article>
      </div>
      <div class="project-grid">
        <article v-for="group in section.groups" :key="group.title" class="project-card">
          <h3>{{ group.title }}</h3>
          <ul><li v-for="item in group.items" :key="item">{{ item }}</li></ul>
        </article>
      </div>
    </div>
  </section>
  <section class="section"><div class="container related-panel"><div><p class="eyebrow">Services essentiels</p><h2>Eau, énergie et cadre de vie</h2><p>Découvrez les projets qui concernent le quotidien des populations.</p></div><RouterLink class="button button-orange" to="/cadre-de-vie">Découvrir le cadre de vie</RouterLink></div></section>
</template>
