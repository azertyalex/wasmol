import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GallerySection from '~/components/sections/GallerySection.vue'

describe('GallerySection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(GallerySection)
    expect(wrapper.text()).toContain('Gallery')
  })

  it('renders 6 placeholder tiles', () => {
    const wrapper = mount(GallerySection)
    const tiles = wrapper.findAll('.aspect-square')
    expect(tiles.length).toBe(6)
  })
})
