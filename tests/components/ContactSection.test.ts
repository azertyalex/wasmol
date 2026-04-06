import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '~/components/sections/ContactSection.vue'

describe('ContactSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.text()).toContain('Contact')
  })

  it('renders a WhatsApp link', () => {
    const wrapper = mount(ContactSection)
    const link = wrapper.find('a[href^="https://wa.me/"]')
    expect(link.exists()).toBe(true)
  })

  it('renders an email link', () => {
    const wrapper = mount(ContactSection)
    const link = wrapper.find('a[href^="mailto:"]')
    expect(link.exists()).toBe(true)
  })
})
