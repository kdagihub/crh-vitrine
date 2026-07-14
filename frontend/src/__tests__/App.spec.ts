import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the active public route', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
