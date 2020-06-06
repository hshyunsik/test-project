import ImageViewer from '../index.vue';
import { mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import { ImageSrc } from '../types';

describe.skip('ImageViewer.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(ImageViewer, {
      vuetify,
      data() {
        return {
          main: '1'
        };
      },
      propsData: {
        chosenImage: {
          src: '@/components/assets/Hyunsik.jpg',
          id: 'testid',
          alt: 'test'
        }
      }
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('image id is photo id in passed prop', async () => {
    const imagePreview = wrapper.find('#testid');
    expect(imagePreview.exists()).toBeTruthy();
  });
  it('Clicking on left and right buttons emits left and right respectively', async () => {
    const left = wrapper.find('.item--left');
    left.trigger('click');
    left.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('left').length).toBe(2);

    const right = wrapper.find('.item--right');
    right.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('right').length).toBe(1);
  });
  it('Creates a magic bitch when mouse over ImageZoom??', async () => {});
});
