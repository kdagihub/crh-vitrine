import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import publicRouter from '../router'

describe('App', () => {
  it.each([
    ['/la-region', 'La région du Hambol'],
    ['/actions-publiques', 'Actions publiques'],
    ['/cadre-de-vie', 'Mieux vivre et accéder aux services'],
    ['/mediatheque', 'Médiathèque'],
  ])('renders the public page %s', async (path, title) => {
    const router = createRouter({ history: createMemoryHistory(), routes: publicRouter.options.routes })
    await router.push(path)
    await router.isReady()
    const wrapper = mount(App, { global: { plugins: [router] } })
    expect(wrapper.get('h1').text()).toBe(title)
    expect(wrapper.get('nav[aria-label="Navigation principale"]').text()).toContain('Cadre de vie')
    if (path === '/mediatheque') {
      expect(wrapper.get('a[download]').attributes('href')).toBe('/documents/hambol-pnd-2026-2030.pdf')
    }
    wrapper.unmount()
  })
})
