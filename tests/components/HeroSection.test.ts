import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '~/components/sections/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the brand name', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Wasmol')
  })

  it('renders the tagline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Your car, spotless.')
  })

  it('renders a CTA link to the contact section', () => {
    const wrapper = mount(HeroSection)
    const cta = wrapper.find('a[href="#contact"]')
    expect(cta.exists()).toBe(true)
    expect(cta.text()).toContain('Get in touch')
  })
})
