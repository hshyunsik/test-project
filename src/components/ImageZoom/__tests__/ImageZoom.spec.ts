import ImageViewer from '../index.vue';
import { mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('ImageZoom.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;

  beforeEach(() => {
    // const div = document.createElement('div');
    // div.setAttribute('id', 'id');
    // document.body.appendChild(div);
    vuetify = new Vuetify();
    wrapper = mount(ImageViewer, {
      attachToDocument: true,
      vuetify,
      data() {
        return {
          showDiv: false
        };
      },
      propsData: {
        chosenImage: {
          src: '@/components/assets/Hyunsik_0.jpg',
          id: 'testid',
          alt: 'test'
        }
      }
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('Src image is displayed', async () => {
    const imageContainer = wrapper.find('#image');
    expect(imageContainer.exists()).toBeTruthy();
  });
  it('Lens shows when touchmove image', async () => {
    const lensImage = wrapper.find('.image_zoom_lens');
    expect(lensImage.attributes().class).toBe('image_zoom_lens no_display');
    wrapper.find('.image--full').trigger('mousemove');
    await wrapper.vm.$nextTick();
    expect(lensImage.attributes().class).toBe('image_zoom_lens');
  });
  it('Lens disappears when leaving lens with mouse', async () => {
    wrapper.setData({ showDiv: true });
    await wrapper.vm.$nextTick();
    const lensImage = wrapper.find('.image_zoom_lens');
    expect(lensImage.attributes().class).toBe('image_zoom_lens');
    lensImage.trigger('mouseleave');
    await wrapper.vm.$nextTick();
    expect(lensImage.attributes().class).toBe('image_zoom_lens no_display');
  });
  it('BackgroundPosition of ZoomResult is in proportion to lens position', async () => {
    wrapper.setData({ showDiv: true });
    await wrapper.vm.$nextTick();

    // set lens Width/Height
    const lensImage = wrapper.find('.image_zoom_lens');

    // set result width/height

    // mousemove with coordinates {0,0}

    // mousemove with coordinates {300, 400}

    wrapper.find('#lens').trigger('mousemove', {});
    await wrapper.vm.$nextTick();
  });
});
