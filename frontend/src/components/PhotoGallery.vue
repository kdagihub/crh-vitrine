<script setup lang="ts">
import { ArrowRight, Expand } from 'lucide-vue-next'
import groupPhoto from '@/assets/img/2024-1024x827.jpg'
import presidentPhoto from '@/assets/img/ikk3.jpg'
import presidentEvent from '@/assets/img/ikk-en-cache-nez.jpg'

defineProps<{ showMediaLink?: boolean }>()

const photos = [
  { image: groupPhoto, category: 'Institution', title: 'Rencontre à la préfecture de Katiola', alt: 'Photo de groupe devant la préfecture de Katiola.' },
  { image: presidentPhoto, category: 'Conseil régional', title: 'Prise de parole du président', alt: 'Le président du Conseil régional s’exprime au micro lors d’une réunion.' },
  { image: presidentEvent, category: 'Terrain', title: 'Un moment d’échanges avec les acteurs locaux', alt: 'Le président du Conseil régional applaudit, assis parmi les participants à une rencontre.' },
]
</script>

<template>
  <section id="galerie" class="section photo-section">
    <div class="container">
      <div class="photo-section-heading">
        <div><p class="eyebrow">En images</p><h2 class="section-title">La vie du Conseil régional.</h2></div>
        <RouterLink v-if="showMediaLink" class="photo-media-link" to="/mediatheque#galerie">Voir la médiathèque <ArrowRight :size="17" aria-hidden="true" /></RouterLink>
      </div>
      <div class="photo-grid">
        <figure v-for="photo in photos" :key="photo.image" class="photo-card">
          <a :href="photo.image" target="_blank" rel="noopener" :aria-label="`${photo.title} : ouvrir la photo dans un nouvel onglet`">
            <img :src="photo.image" :alt="photo.alt" loading="lazy" width="640" height="420" />
            <span class="photo-expand"><Expand :size="18" aria-hidden="true" /></span>
          </a>
          <figcaption><p>{{ photo.category }}</p><h3>{{ photo.title }}</h3></figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photo-section { background: var(--surface); }
.photo-section-heading { display: flex; justify-content: space-between; align-items: end; gap: 1.5rem; margin-bottom: 2rem; }
.photo-media-link { display: inline-flex; align-items: center; gap: .4rem; flex-shrink: 0; color: var(--orange-dark); font-size: .85rem; font-weight: 800; text-decoration: none; }
.photo-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
.photo-card { min-width: 0; margin: 0; overflow: hidden; border: 1px solid var(--line); background: #fff; }
.photo-card > a { position: relative; display: block; }
.photo-card img { width: 100%; height: auto; aspect-ratio: 1.53; object-fit: cover; }
.photo-expand { position: absolute; right: .75rem; bottom: .75rem; display: grid; place-items: center; width: 2.2rem; height: 2.2rem; border-radius: .3rem; color: var(--green-dark); background: #fff; }
.photo-card a:hover .photo-expand { color: #fff; background: var(--green-dark); }
.photo-card figcaption { padding: 1.3rem; }
.photo-card figcaption p { margin-bottom: .7rem; color: var(--green); font-size: .7rem; font-weight: 800; text-transform: uppercase; }
.photo-card h3 { margin: 0; font-size: 1rem; line-height: 1.5; }
@media (max-width: 850px) { .photo-grid { grid-template-columns: 1fr; }.photo-section-heading { align-items: flex-start; flex-direction: column; } }
</style>
