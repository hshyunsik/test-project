import ImageViewer from '../index.vue';
import { mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import { ImageSrc } from '../types';

describe('ImageViewer.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(ImageViewer, {
      vuetify,
      propsData: {
        chosenImage: {
          src: '@/components/assets/Hyunsik.jpg',
          id: '2',
          alt: 'test'
        },
        images: [
          { src: 'Hyunsik_0.jpg', alt: '1', id: 'one1' },
          { src: 'Hyunsik_1.jpg', alt: '2', id: 'one2' },
          { src: 'Hyunsik_2.jpg', alt: '3', id: 'one3' }
        ]
      },
      stubs: ['ImageZoom', 'ImageChooser']
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('Clicking on left and right buttons emits left and right respectively', async () => {
    const left = wrapper.find('.item--left');
    left.trigger('click');
    left.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('setPrevious').length).toBe(2);

    const right = wrapper.find('.item--right');
    right.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('setNext').length).toBe(1);
  });
  it('Getting @setChosenId from imageChooser triggers setChosenId', async () => {
    const imageChooser = wrapper.find('.margin--top');
    imageChooser.vm.$emit('setChosenId');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('setChosenId').length).toBe(1);
  });
});
