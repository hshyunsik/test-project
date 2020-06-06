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
    const imageContainer = wrapper.find('#id');
    expect(imageContainer.exists()).toBeTruthy();
  });
  it('Creates a div when mouseover image', async () => {
    const image = wrapper.find('.image--full');
    image.trigger('mouseenter');
    await wrapper.vm.$nextTick();
    console.log(wrapper.html());
    const zoomImage = wrapper.find('.image_zoom_container');
    expect(zoomImage.exists()).toBeTruthy();
  });
  it('Zoom div contains im', async () => {
    const image = wrapper.find('.image--full');
  });
  it('Creates a div when mouseover image', async () => {
    const image = wrapper.find('.image--full');
  });
  it('Creates a div when mouseover image', async () => {
    const image = wrapper.find('.image--full');
  });
});
