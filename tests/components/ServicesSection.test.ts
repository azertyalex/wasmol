import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServicesSection from '~/components/sections/ServicesSection.vue'

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(ServicesSection)
    expect(wrapper.text()).toContain('Services')
  })

  it('renders all three service cards', () => {
    const wrapper = mount(ServicesSection)
    expect(wrapper.text()).toContain('Exterior Wash')
    expect(wrapper.text()).toContain('Interior Clean')
    expect(wrapper.text()).toContain('Tire & Rim Treatment')
  })
})
