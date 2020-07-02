import ImageChooser from '../index.vue';
import { mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import { Image } from '../types';

describe('ImageChooser.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(ImageChooser, {
      vuetify,
      propsData: {
        images: [
          { src: '@/components/assets/Hyunsik.jpg', alt: '1', id: '1' },
          { src: '@/components/assets/Hyunsik_1.jpg', alt: '2', id: '2' },
          { src: '@/components/assets/Hyunsik_2.jpg', alt: '3', id: '3' }
        ],
        chosenId: '1'
      }
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('Number of photo in photo series equals photos passed in props', async () => {
    const imagePreview = wrapper.findAll('.image--full');
    expect(imagePreview.length).toBe(3);
  });
  it('Clicking on preview emits setChosenId with the preview id', async () => {
    const item2 = wrapper.findAll('.item_2');
    item2.trigger('click');
    expect(wrapper.emitted('setChosenId')[0]).toStrictEqual(['2']);
  });
});
