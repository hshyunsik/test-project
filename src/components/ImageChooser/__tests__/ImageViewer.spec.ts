import ImageViewer from '../index.vue'
import { mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { Image } from '../types'

describe.skip('ImageViewer.vue', () => {
  let wrapper: Wrapper<any>
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    wrapper = mount(ImageViewer, {
      vuetify,
      data() {
        return {
          main: '1'
        }
      },
      props: {
        images: () => [
          { src: '@/components/assets/Hyunsik.jpg', alt: '1', id: 'test' },
          { src: '@/components/assets/Hyunsik_1.jpg', alt: '2', id: 'test' },
          { src: '@/components/assets/Hyunsik_2.jpg', alt: '3', id: 'test' }
        ]
      }
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })

  it('Number of photo in photo series equals photos passed in props', async () => {
    // wrapper.setProps({
    //   images: [
    //     { src: '@/components/assets/Hyunsik.jpg', id: '1', alt: 'test' },
    //     { src: '@/components/assets/Hyunsik_1.jpg', id: '2', alt: 'test' },
    //     { src: '@/components/assets/Hyunsik_2.jpg', id: '3', alt: 'test' }
    //   ]
    // })
    // await wrapper.vm.$nextTick()
    // console.log(wrapper.vm.$props.images)
    // const imagePreview = wrapper.findAll('.image--full')
    // expect(imagePreview.length).toBe(3)
  })
  it('Left button changes picture focus to previous in series', async () => {
    // wrapper.setProps({
    //   images: [
    //     { src: '@/components/assets/Hyunsik.jpg', id: '1', alt: 'test' },
    //     { src: '@/components/assets/Hyunsik_1.jpg', id: '2', alt: 'test' },
    //     { src: '@/components/assets/Hyunsik_2.jpg', id: '3', alt: 'test' }
    //   ]
    // })
    // await wrapper.vm.$nextTick()
    // const imagePreview = wrapper.findAll('.image-preview--low')
  })
  it('Right button changes picture focus to next in series', async () => {})
  it('Mouseover triggers image zoom', async () => {})
  it('Clicking on preview makes it main focus of series', async () => {})
})
