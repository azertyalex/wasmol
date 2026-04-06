import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from '~/components/sections/AboutSection.vue'

describe('AboutSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.text()).toContain('About')
  })

  it('mentions the name origin story', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.text().toLowerCase()).toContain('mol')
    expect(wrapper.text().toLowerCase()).toContain('wash')
  })
})
