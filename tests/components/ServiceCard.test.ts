import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServiceCard from '~/components/ui/ServiceCard.vue'

describe('ServiceCard', () => {
  it('renders title and description', () => {
    const wrapper = mount(ServiceCard, {
      props: {
        title: 'Exterior Wash',
        description: 'Full exterior hand wash.',
        icon: '🚗',
      },
    })
    expect(wrapper.text()).toContain('Exterior Wash')
    expect(wrapper.text()).toContain('Full exterior hand wash.')
    expect(wrapper.text()).toContain('🚗')
  })

  it('has hover border class', () => {
    const wrapper = mount(ServiceCard, {
      props: { title: 'X', description: 'Y', icon: '🔧' },
    })
    expect(wrapper.html()).toContain('hover:border-accent')
  })
})
