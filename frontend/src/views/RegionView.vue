<script setup lang="ts">
import ContentHero from '@/components/ContentHero.vue'
import { regionMapUrl, regionLocationMapUrl } from '@/data/pnd'
const sectors = [
  { title: 'Anacarde', text: 'Une filière agricole mise en avant dans les perspectives de transformation locale.' },
  { title: 'Manioc', text: 'Des perspectives de production, de multiplication de boutures et de transformation.' },
  { title: 'Élevage', text: 'Une vocation pastorale et des projets d’appui aux activités d’élevage.' },
  { title: 'Artisanat', text: 'Des savoir-faire locaux, dont la poterie de Katiola, à transmettre et à valoriser.' },
]
</script>

<template>
  <ContentHero eyebrow="Découvrir le territoire" title="La région du Hambol" description="Un territoire pastoral et artisanal au cœur du Centre-Nord ivoirien, avec Katiola pour chef-lieu." />
  <section class="section"><div class="container">
    <div class="metric-grid"><article class="metric-card"><strong>696 394</strong><h2>habitants estimés en 2025</h2><p>Estimation présentée dans la fiche territoriale du PND.</p></article><article class="metric-card"><strong>3</strong><h2>départements</h2><p>Katiola, Dabakala et Niakaramadougou.</p></article><article class="metric-card"><strong>Katiola</strong><h2>chef-lieu de région</h2><p>Centre administratif et commercial du territoire.</p></article></div>
    <section class="region-location" aria-labelledby="region-location-title">
      <p class="eyebrow">Situation géographique</p>
      <h2 id="region-location-title" class="section-title">Le Hambol en Côte d’Ivoire.</h2>
      <p class="section-copy">Situé dans le Centre-Nord du pays, le Hambol réunit les départements de Katiola, Dabakala et Niakaramadougou.</p>
      <div class="region-map-grid">
        <figure class="territory-map region-map-card">
          <h3>À l’échelle du pays</h3>
          <img :src="regionLocationMapUrl" width="730" height="660" alt="Carte de la Côte d’Ivoire : la région du Hambol est mise en évidence en orange dans le Centre-Nord du pays." loading="lazy" />

        </figure>
      <figure class="territory-map region-map-card"><h3>Les départements du Hambol</h3><img :src="regionMapUrl" width="690" height="620" alt="Carte du Hambol : Niakaramadougou au nord-ouest, Katiola au sud-ouest et Dabakala à l’est, avec leurs localités et limites administratives." /></figure>
      </div>
    </section>
    <div class="territory-portrait"><p class="eyebrow">Portrait du territoire</p><h2 class="section-title">Entre savane et forêt claire.</h2><p class="section-copy">Situé dans le Centre-Nord, le Hambol marque la transition entre savane soudanienne et forêt claire. Le Bandama traverse la région et structure ses activités agropastorales.</p><p class="section-copy">Ancien poste colonial devenu carrefour routier, Katiola joue un rôle de centre administratif et commercial.</p><aside class="heritage-panel"><h3>Katiola, la ville des potières</h3><p>Le savoir-faire artisanal féminin de la poterie constitue un patrimoine vivant, aujourd’hui valorisé par des circuits touristiques. Le PND prévoit notamment la réhabilitation de la Maison des poteries de Katiola.</p></aside></div>
  </div></section>
  <section class="section content-section"><div class="container"><p class="eyebrow">Les moteurs de l’économie</p><h2 class="section-title">Des ressources et des savoir-faire.</h2><div class="project-grid sector-grid"><article v-for="sector in sectors" :key="sector.title" class="project-card"><h3>{{ sector.title }}</h3><p>{{ sector.text }}</p></article></div><RouterLink class="button button-orange" to="/actions-publiques#economie">Découvrir les perspectives économiques</RouterLink><p class="document-caption">D’après la fiche territoriale du Hambol, PND 2026–2030 · Mise à jour indiquée : septembre 2026.</p></div></section>
</template>
