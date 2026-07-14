<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ExternalLink, Mail, MapPin, Phone } from 'lucide-vue-next'
import logoHambol from '@/assets/img/logo_hambol.png'

const menuOpen = ref(false)
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'La région', to: '/la-region' },
  { label: 'Agenda', to: '/agenda' },
  { label: 'Actions publiques', to: '/actions-publiques' },
  { label: 'Médiathèque', to: '/mediatheque' },
  { label: "L'équipe", to: '/equipe' },
]
</script>

<template>
  <a class="skip-link" href="#main-content">Passer au contenu principal</a>
  <div class="topbar">
    <div class="container topbar-inner">
      <span><MapPin :size="14" /> Katiola, Région du Hambol</span>
      <div><a href="tel:+22520215029"><Phone :size="14" /> +225 20 21 50 29</a><a href="mailto:crhinfos@crh-ci.org"><Mail :size="14" /> crhinfos@crh-ci.org</a></div>
    </div>
  </div>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" @click="menuOpen = false">
        <img class="brand-logo" :src="logoHambol" alt="" /><span><strong>Conseil régional</strong><small>du Hambol</small></span>
      </RouterLink>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="public-navigation" :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'" @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="24" /><Menu v-else :size="24" />
      </button>
      <nav id="public-navigation" class="navigation" :class="{ open: menuOpen }" aria-label="Navigation principale">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="menuOpen = false">{{ link.label }}</RouterLink>
        <a class="sigpt-link" href="https://gestion.crh-ci.org">Accès SIGPT <ExternalLink :size="14" /></a>
      </nav>
    </div>
  </header>
  <main id="main-content"><RouterView /></main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div><div class="brand footer-brand"><img class="brand-logo" :src="logoHambol" alt="" /><span><strong>Conseil régional</strong><small>du Hambol</small></span></div><p>Une institution au service du développement territorial et du bien-être des populations du Hambol.</p></div>
      <div><h2>Navigation</h2><RouterLink v-for="link in links.slice(1)" :key="link.to" :to="link.to">{{ link.label }}</RouterLink></div>
      <div><h2>Coordonnées</h2><p>Katiola, Côte d’Ivoire</p><a href="tel:+22520215029">+225 20 21 50 29</a><a href="mailto:crhinfos@crh-ci.org">crhinfos@crh-ci.org</a></div>
    </div>
    <div class="container footer-bottom"><span>© {{ new Date().getFullYear() }} Conseil régional du Hambol. Tous droits réservés.</span><a href="https://ciacems.net" target="_blank" rel="noopener">Développé par CIACEMS IT <ExternalLink :size="12" /></a></div>
  </footer>
</template>

<style scoped>
.topbar{color:#fff;background:var(--green);font-size:.74rem}.topbar-inner,.topbar-inner>div,.topbar span,.topbar a{display:flex;align-items:center;gap:.4rem}.topbar-inner{justify-content:space-between;min-height:2.25rem}.topbar-inner>div{gap:1.2rem}.topbar a{text-decoration:none}.site-header{position:sticky;z-index:100;top:0;border-bottom:1px solid var(--line);background:#fff}.header-inner{display:flex;align-items:center;justify-content:space-between;min-height:5.25rem}.brand{display:flex;align-items:center;gap:.65rem;text-decoration:none}.brand-logo{width:3.5rem;height:3.25rem;object-fit:contain}.brand>span:last-child{display:grid;line-height:1.05}.brand strong{font-size:.93rem;text-transform:uppercase}.brand small{margin-top:.25rem;color:var(--green);font-size:.78rem;font-weight:700}.navigation{display:flex;align-items:center;gap:1.35rem}.navigation a{position:relative;color:#34434c;font-size:.79rem;font-weight:700;text-decoration:none}.navigation a.router-link-exact-active:not(.sigpt-link){color:var(--orange)}.navigation a.router-link-exact-active:not(.sigpt-link)::after{content:'';position:absolute;right:0;bottom:-.55rem;left:0;height:2px;background:var(--orange)}.navigation .sigpt-link{display:flex;align-items:center;gap:.4rem;padding:.7rem .8rem;border-radius:.4rem;color:#fff;background:var(--orange)}.menu-button{display:none;border:0;background:transparent}.site-footer{padding-top:4rem;color:#dce5df;background:#173127}.footer-grid{display:grid;grid-template-columns:1.4fr .7fr .8fr;gap:5rem;padding-bottom:3rem}.footer-grid h2{margin-bottom:1rem;color:#fff;font-size:.9rem}.footer-grid p{max-width:36ch;color:#b8c7be;font-size:.82rem;line-height:1.7}.footer-grid>div:not(:first-child){display:flex;flex-direction:column;align-items:flex-start;gap:.65rem}.footer-grid a{color:#dce5df;font-size:.8rem;text-decoration:none}.footer-brand{margin-bottom:1rem;color:#fff}.footer-brand .brand-logo{width:4rem;height:3.6rem;padding:.25rem;border-radius:.35rem;background:#fff}.footer-brand small{color:#f4a45c}.footer-bottom{display:flex;justify-content:space-between;gap:1rem;padding-block:1.15rem;border-top:1px solid #375044;color:#9fb0a6;font-size:.68rem}.footer-bottom a{display:flex;align-items:center;gap:.3rem;text-decoration:none}
@media(max-width:1000px){.menu-button{display:grid;place-items:center;cursor:pointer}.navigation{position:absolute;top:100%;right:0;left:0;display:none;align-items:stretch;padding:1rem 1.25rem 1.4rem;border-bottom:1px solid var(--line);background:#fff}.navigation.open{display:flex;flex-direction:column}.navigation a{padding:.65rem 0}.navigation a::after{display:none}.navigation .sigpt-link{justify-content:center}.footer-grid{grid-template-columns:1fr 1fr;gap:2.5rem}.footer-grid>div:first-child{grid-column:1/-1}}@media(max-width:620px){.topbar-inner>span,.topbar-inner a:first-child{display:none}.topbar-inner{justify-content:flex-end}.header-inner{min-height:4.5rem}.footer-grid{grid-template-columns:1fr}.footer-grid>div:first-child{grid-column:auto}.footer-bottom{flex-direction:column}}
</style>
