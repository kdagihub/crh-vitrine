<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowLeft, ArrowRight, MapPin, Pause, Play, Quote, School, Stethoscope, Droplets } from 'lucide-vue-next'
import PndNotice from '@/components/PndNotice.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import { highlights } from '@/data/pnd'
import groupPhoto from '@/assets/img/2024-1024x827.jpg'
import presidentEvent from '@/assets/img/ikk-en-cache-nez.jpg'
import presidentPhoto from '@/assets/img/ikk3.jpg'

const slides = [
  { image: groupPhoto, eyebrow: 'Une institution de proximité', title: 'Le Hambol avance avec ses territoires.', text: 'Le Conseil régional agit aux côtés des populations de Katiola, Dabakala et Niakara.', position: 'center 42%' },
  { image: presidentEvent, eyebrow: 'Gouvernance territoriale', title: 'Écouter, décider et agir ensemble.', text: 'Une action publique construite au plus près des réalités et des priorités locales.', position: 'center' },
  { image: presidentPhoto, eyebrow: 'Au service des populations', title: 'Construire un développement durable.', text: 'Des investissements utiles pour améliorer durablement le cadre de vie dans toute la région.', position: 'center 35%' },
]
const activeSlide = ref(0)
const paused = ref(false)
let timer: number | undefined
const currentSlide = computed(() => slides[activeSlide.value]!)
const selectSlide = (index: number) => { activeSlide.value = (index + slides.length) % slides.length }
const startTimer = () => { stopTimer(); if (!paused.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = window.setInterval(() => selectSlide(activeSlide.value + 1), 6500) }
const stopTimer = () => { if (timer) window.clearInterval(timer) }
const togglePause = () => { paused.value = !paused.value; startTimer() }
onMounted(startTimer)
onBeforeUnmount(stopTimer)

const stats = [
  { value: '19 122', unit: 'km²', label: 'de superficie' },
  { value: '3', unit: '', label: 'départements' },
  { value: '19', unit: '', label: 'sous-préfectures' },
  { value: '696 394', unit: '', label: 'habitants estimés en 2025' },
]
const actions = [
  { icon: School, title: 'Éducation', text: 'Écoles, salles de classe et équipements pour améliorer les conditions d’apprentissage.' },
  { icon: Stethoscope, title: 'Santé', text: 'Des infrastructures sanitaires plus proches et plus accessibles aux populations.' },
  { icon: Droplets, title: 'Eau et cadre de vie', text: 'Hydraulique, assainissement et services essentiels pour les localités du Hambol.' },
]

</script>

<template>
  <div>
    <section class="hero" aria-roledescription="carousel" aria-label="Actualités principales" @mouseenter="stopTimer" @mouseleave="startTimer" @focusin="stopTimer" @focusout="startTimer">
      <Transition name="fade" mode="out-in">
        <img :key="currentSlide.image" class="hero-image" :src="currentSlide.image" :alt="currentSlide.title" :style="{ objectPosition: currentSlide.position }" />
      </Transition>
      <div class="hero-shade"></div>
      <div class="container hero-content">
        <p>{{ currentSlide.eyebrow }}</p><h1>{{ currentSlide.title }}</h1><span>{{ currentSlide.text }}</span>
        <div class="hero-actions"><RouterLink class="button button-orange" to="/la-region">Découvrir la région <ArrowRight :size="18" /></RouterLink><a class="button button-outline" href="https://gestion.crh-ci.org">Accéder au SIGPT</a></div>
      </div>
      <div class="container slider-controls">
        <button type="button" aria-label="Image précédente" @click="selectSlide(activeSlide - 1)"><ArrowLeft :size="19" /></button>
        <div class="slider-dots"><button v-for="(_, index) in slides" :key="index" type="button" :class="{ active: index === activeSlide }" :aria-label="`Afficher l’image ${index + 1}`" :aria-current="index === activeSlide ? 'true' : undefined" @click="selectSlide(index)"></button></div>
        <button type="button" :aria-label="paused ? 'Reprendre le diaporama' : 'Mettre le diaporama en pause'" @click="togglePause"><Play v-if="paused" :size="17" /><Pause v-else :size="17" /></button>
        <button type="button" aria-label="Image suivante" @click="selectSlide(activeSlide + 1)"><ArrowRight :size="19" /></button>
      </div>
    </section>

    <section class="stats" aria-label="Le Hambol en chiffres"><div class="container stats-grid"><article v-for="stat in stats" :key="stat.label"><strong>{{ stat.value }} <small>{{ stat.unit }}</small></strong><span>{{ stat.label }}</span></article></div></section>

    <section class="section president-section"><div class="container president-grid">
      <div class="president-picture"><img :src="presidentPhoto" alt="Ibrahim Kalil Konaté, président du Conseil régional du Hambol" /><span>Président du Conseil régional</span></div>
      <div class="president-copy"><p class="eyebrow">Mot du président</p><Quote :size="38" aria-hidden="true" /><h2 class="section-title">Faire du Hambol une région d’opportunités et de progrès partagé.</h2><p class="section-copy">Plusieurs défis attendent notre région. Avec les conseillers régionaux et l’ensemble de nos partenaires, nous agissons pour améliorer le bien-être des populations et faire avancer des projets concrets dans chaque territoire.</p><p class="signature">Ibrahim Kalil Konaté <span>Président du Conseil régional du Hambol</span></p><RouterLink class="text-link" to="/equipe">Découvrir l’équipe régionale <ArrowRight :size="17" /></RouterLink></div>
    </div></section>

    <section class="section region-intro"><div class="container region-grid"><div><p class="eyebrow">Notre territoire</p><h2 class="section-title">Une région au cœur du Centre-Nord ivoirien.</h2><p class="section-copy">Avec Katiola pour chef-lieu, le Hambol rassemble les départements de Katiola, Dabakala et Niakara. Son patrimoine, ses terres agricoles et ses ressources humaines constituent les fondations de son développement.</p><RouterLink class="button region-button" to="/la-region">Explorer le Hambol <MapPin :size="17" /></RouterLink></div><aside><strong>3</strong><span>Départements complémentaires, un même projet régional.</span><div><b>Katiola</b><b>Dabakala</b><b>Niakara</b></div></aside></div></section>

    <section class="section action-section"><div class="container"><p class="eyebrow">Priorités régionales</p><h2 class="section-title">Agir sur les besoins essentiels.</h2><div class="action-grid"><article v-for="action in actions" :key="action.title"><span><component :is="action.icon" :size="24" /></span><h3>{{ action.title }}</h3><p>{{ action.text }}</p></article></div></div></section>

    <section class="section perspectives-section"><div class="container"><div class="section-header"><div><p class="eyebrow">Perspectives 2026–2030</p><h2 class="section-title">Ce qui est prévu dans le Hambol.</h2></div><RouterLink class="text-link" to="/actions-publiques">Découvrir les projets <ArrowRight :size="17" /></RouterLink></div><div class="metric-grid"><article v-for="item in highlights" :key="item.label" class="metric-card"><strong>{{ item.value }}</strong><h3>{{ item.label }}</h3><p>{{ item.detail }}</p><RouterLink :to="item.to">En savoir plus <ArrowRight :size="15" aria-hidden="true" /></RouterLink></article></div><PndNotice /></div></section>

    <PhotoGallery show-media-link />

    <section class="sigpt-cta"><div class="container"><div><p>Plateforme de pilotage régional</p><h2>Suivez les programmes et projets du Hambol.</h2></div><a class="button sigpt-button" href="https://gestion.crh-ci.org">Accéder au SIGPT <ArrowRight :size="18" /></a></div></section>
  </div>
</template>

<style scoped>
.hero{position:relative;height:clamp(37rem,72vh,48rem);overflow:hidden;color:#fff;background:#26372f}.hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-shade{position:absolute;inset:0;background:rgb(13 29 22 / 62%)}.hero-content{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;height:100%;padding-bottom:3rem}.hero-content>p{margin-bottom:1rem;color:#ffb36d;font-size:.75rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.hero h1{max-width:13ch;margin-bottom:1.2rem;font-size:clamp(2.8rem,6vw,5.8rem);line-height:.98;letter-spacing:-.055em}.hero-content>span{max-width:41rem;color:#e8eeea;font-size:clamp(.98rem,2vw,1.16rem);line-height:1.65}.hero-actions{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:2rem}.slider-controls{position:absolute;z-index:3;right:0;bottom:2rem;left:0;display:flex;align-items:center;justify-content:flex-end;gap:.5rem}.slider-controls>button{display:grid;place-items:center;width:2.55rem;height:2.55rem;border:1px solid rgb(255 255 255 / 65%);border-radius:50%;color:#fff;background:transparent;cursor:pointer}.slider-dots{display:flex;gap:.35rem;margin-inline:.4rem}.slider-dots button{width:.55rem;height:.55rem;padding:0;border:0;border-radius:50%;background:rgb(255 255 255 / 48%);cursor:pointer}.slider-dots button.active{width:1.8rem;border-radius:1rem;background:var(--orange)}.fade-enter-active,.fade-leave-active{transition:opacity .45s ease}.fade-enter-from,.fade-leave-to{opacity:0}
.stats{position:relative;z-index:4;border-bottom:1px solid var(--line);background:#fff}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr)}.stats article{display:grid;justify-items:center;padding:2rem 1rem;border-right:1px solid var(--line);text-align:center}.stats article:first-child{border-left:1px solid var(--line)}.stats strong{color:var(--orange);font-family:'Manrope';font-size:clamp(1.75rem,3vw,2.6rem);line-height:1}.stats strong small{font-size:.75em}.stats span{margin-top:.5rem;color:var(--muted);font-size:.76rem;font-weight:700;text-transform:uppercase}
.president-grid{display:grid;grid-template-columns:minmax(20rem,.8fr) minmax(28rem,1.2fr);align-items:center;gap:clamp(3rem,8vw,7rem)}.president-picture{position:relative}.president-picture::before{content:'';position:absolute;top:-1rem;right:1rem;bottom:1rem;left:-1rem;z-index:-1;background:var(--orange)}.president-picture img{width:100%;aspect-ratio:.95;object-fit:cover;object-position:center}.president-picture>span{position:absolute;right:-1rem;bottom:-1rem;padding:.7rem .85rem;color:#fff;background:var(--green);font-size:.72rem;font-weight:800;text-transform:uppercase}.president-copy>svg{margin-bottom:.8rem;color:var(--orange)}.president-copy .signature{display:grid;margin:1.6rem 0;color:var(--ink);font-family:'Manrope';font-weight:800}.signature span{margin-top:.25rem;color:var(--green);font-family:'DM Sans';font-size:.75rem;font-weight:700}.text-link{display:inline-flex;align-items:center;gap:.4rem;color:var(--orange-dark);font-size:.82rem;font-weight:800;text-decoration:none}
.region-intro{color:#fff;background:var(--green)}.region-intro .eyebrow{color:#ffb36d}.region-intro .section-copy{color:#dcebe3}.region-grid{display:grid;grid-template-columns:1.25fr .75fr;align-items:center;gap:6rem}.region-button{margin-top:1.5rem;color:var(--green);background:#fff}.region-grid aside{padding:2.4rem;border-left:1px solid rgb(255 255 255 / 35%)}.region-grid aside>strong{display:block;color:#ffac5e;font-family:'Manrope';font-size:5rem;line-height:1}.region-grid aside>span{display:block;max-width:25ch;margin:.7rem 0 1.4rem;font-size:1.15rem;font-weight:700;line-height:1.4}.region-grid aside>div{display:flex;flex-wrap:wrap;gap:.4rem}.region-grid aside b{padding:.4rem .6rem;border:1px solid rgb(255 255 255 / 35%);font-size:.7rem}
.action-section{background:var(--surface)}.action-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2.5rem}.action-grid article{padding:2rem;border:1px solid var(--line);background:#fff}.action-grid article>span{display:grid;place-items:center;width:3rem;height:3rem;margin-bottom:1.4rem;color:var(--green);background:var(--green-soft)}.action-grid h3{font-size:1.05rem}.action-grid p{margin:0;color:var(--muted);font-size:.84rem;line-height:1.65}
.section-header{display:flex;align-items:end;justify-content:space-between;gap:2rem}
.sigpt-cta{padding-block:3rem;color:#fff;background:var(--orange)}.sigpt-cta .container{display:flex;align-items:center;justify-content:space-between;gap:2rem}.sigpt-cta p{margin-bottom:.4rem;font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.sigpt-cta h2{max-width:24ch;margin:0;font-size:clamp(1.5rem,3vw,2.35rem)}.sigpt-button{color:var(--ink);background:#fff}
@media(max-width:850px){.stats-grid{grid-template-columns:1fr 1fr}.president-grid,.region-grid{grid-template-columns:1fr;gap:3rem}.president-picture{max-width:30rem}.action-grid{grid-template-columns:1fr}.sigpt-cta .container{align-items:flex-start;flex-direction:column}}@media(max-width:560px){.hero{height:40rem}.hero h1{font-size:2.65rem}.slider-controls{justify-content:center}.stats article{padding:1.5rem .6rem}.stats span{font-size:.62rem}.president-grid{grid-template-columns:minmax(0,1fr)}.president-picture>span{right:0}.section-header{align-items:flex-start;flex-direction:column}.sigpt-cta{padding-block:2.5rem}}
</style>
