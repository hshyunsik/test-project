import ImageViewer from '../index.vue';
import { mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

describe('ImageZoom.vue on desktop screen', () => {
  let wrapper: Wrapper<any>;
  let vuetify;

  beforeEach(() => {
    // const div = document.createElement('div');
    // div.setAttribute('id', 'id');
    // document.body.appendChild(div);
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 1000,
      writable: true
    });
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
    // Test initial lensImage
    const lensImage = wrapper.find('.image_zoom_lens');
    expect(lensImage.attributes().class).toBe('image_zoom_lens no_display');

    // Trigger
    wrapper.find('.image--full').trigger('touchmove');
    await wrapper.vm.$nextTick();

    // Test new lensImage
    expect(lensImage.attributes().class).toBe('image_zoom_lens');
  });
  it('Lens disappears when leaving lens with mouse', async () => {
    // show lens
    wrapper.setData({ showDiv: true });
    await wrapper.vm.$nextTick();

    // test lens
    const lensImage = wrapper.find('.image_zoom_lens');
    expect(lensImage.attributes().class).toBe('image_zoom_lens');

    // Trigger mouseleave
    lensImage.trigger('mouseleave');
    await wrapper.vm.$nextTick();

    // Test new lens
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

describe('ImageZoom.vue on mobile screen', () => {
  let wrapper: Wrapper<any>;
  let vuetify;

  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 300
    });
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

  it('Lens shows not when touchmove image', async () => {
    // Test initial lensimage
    const lensImage = wrapper.find('.image_zoom_lens');
    expect(lensImage.attributes().class).toBe('image_zoom_lens no_display');

    // Trigger mousemove
    wrapper.find('.image--full').trigger('touchmove');
    await wrapper.vm.$nextTick();

    // Expect lensimage not to have changed
    expect(lensImage.attributes().class).toBe('image_zoom_lens no_display');
  });
});
