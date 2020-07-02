import Example from '../index.vue'
import { mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'

describe('Example.vue (copy of ImageViewer)', () => {
  let wrapper: Wrapper<any>
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    wrapper = mount(Example, {
      vuetify
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })

  it('Left button changes picture focus to previous in series', async () => {
    wrapper.setProps({
      images: [
        { src: '@/components/assets/Hyunsik.jpg' },
        { src: '@/components/assets/Hyunsik_1.jpg' },
        { src: '@/components/assets/Hyunsik_2.jpg' }
      ]
    })
    await wrapper.vm.$nextTick()
    const imagePreview = wrapper.findAll('.image-preview--low')
  })
})

describe.skip('To define the tests', () => {
  it('Right button changes picture focus to next in series', async () => {})
  it('Mouseover triggers image zoom', async () => {})
  it('Clicking on preview makes it main focus of series', async () => {})
})
