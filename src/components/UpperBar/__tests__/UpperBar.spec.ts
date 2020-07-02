import UpperBar from '../index.vue';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

describe('UpperBar.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);

  const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'first'
      },
      {
        path: '/about',
        name: 'second'
      }
    ]
  });

  const actions = {
    toggleLeftMenu: jest.fn()
  };
  const store = new Vuex.Store({
    state: {
      leftMenu: false
    },
    actions
  });

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(UpperBar, {
      localVue,
      router,
      store,
      vuetify
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('Title contains title', async () => {
    wrapper.setProps({
      title: 'Title'
    });
    await wrapper.vm.$nextTick();
    const titleElement = wrapper.find('.nav:nth-child(1)');
    expect(titleElement.html()).toContain('Title');
  });

  it('Clicking on a link pushes it to the router', async () => {
    wrapper.setProps({
      navigationItems: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    });
    await wrapper.vm.$nextTick();
    const homeElement = wrapper.findAll('button').at(2);
    homeElement.trigger('click');
    expect(wrapper.vm.$route.path).toBe('/about');
  });
  it('Clicking on a link with a section pushes the hash as well to the router', async () => {
    wrapper.setProps({
      navigationItems: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about',
          sectionId: 'firstSection'
        }
      ]
    });
    await wrapper.vm.$nextTick();
    const homeElement = wrapper.findAll('button').at(2);
    homeElement.trigger('click');
    expect(wrapper.vm.$route.hash).toBe('#firstSection');
  });

  it('Clicking on active leftMenu toggler emits toggleLeftMenu', async () => {
    wrapper.setProps({
      firstMenu: true
    });
    await wrapper.vm.$nextTick();
    const homeElement = wrapper.find('#left_menu');
    homeElement.trigger('click');
    expect(wrapper.emitted('toggleLeftMenu')[0]).toEqual([]);
  });
  it('Clicking on rightMenu toggler toggler emits toggleRightMenu', async () => {
    const homeElement = wrapper.find('#right_menu');
    homeElement.trigger('click');
    expect(wrapper.emitted('toggleRightMenu')[0]).toEqual([]);
  });
});
