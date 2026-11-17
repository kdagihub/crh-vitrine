<script setup lang="ts">
import { Download, FileText, ArrowUpRight } from 'lucide-vue-next'
import ContentHero from '@/components/ContentHero.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import { pndDocumentUrl } from '@/data/pnd'
</script>

<template>
  <ContentHero eyebrow="Images et ressources" title="Médiathèque" description="Les publications et documents publics pour découvrir le Hambol et ses perspectives de développement." />
  <section class="section"><div class="container"><p class="eyebrow">Publications</p><h2 class="section-title">Le Hambol à l’horizon 2030.</h2>
    <article class="publication-card">
      <div class="publication-cover"><FileText :size="52" aria-hidden="true" /><span>Région du Hambol</span><strong>PND<span class="publication-years">2026–2030</span></strong><span>Projets et perspectives de développement</span></div>
      <div class="publication-copy"><p class="eyebrow">Fiche territoriale · PDF · 8 pages · 2,8 Mo</p><h3>Projets et perspectives de développement du Hambol</h3><p>Portrait du territoire, économie, capital humain, infrastructures routières et numériques, eau, énergie et services essentiels : retrouvez les projets programmés pour la région au titre du PND 2026–2030.</p><p class="document-caption">Ministère du Plan et du Développement<br />Mise à jour indiquée dans le document : septembre 2026.</p><div class="publication-actions"><a class="button button-orange" :href="pndDocumentUrl" target="_blank" rel="noopener">Consulter le PDF <ArrowUpRight :size="18" aria-hidden="true" /><span class="sr-only"> (nouvel onglet)</span></a><a class="button button-document" :href="pndDocumentUrl" download="Hambol-PND-2026-2030.pdf">Télécharger <Download :size="18" aria-hidden="true" /></a></div></div>
    </article>
  </div></section>
  <PhotoGallery />
</template>
