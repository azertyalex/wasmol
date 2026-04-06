import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GalleryPlaceholder from '~/components/ui/GalleryPlaceholder.vue'

describe('GalleryPlaceholder', () => {
  it('renders coming soon text', () => {
    const wrapper = mount(GalleryPlaceholder)
    expect(wrapper.text()).toContain('Coming soon')
  })

  it('has an aspect-ratio class for consistent sizing', () => {
    const wrapper = mount(GalleryPlaceholder)
    expect(wrapper.html()).toContain('aspect-square')
  })
})
