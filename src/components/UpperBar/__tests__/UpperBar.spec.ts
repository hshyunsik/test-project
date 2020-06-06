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
    toggleDrawer: jest.fn()
  };
  const store = new Vuex.Store({
    state: {
      drawer: false
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
    const titleElement = wrapper.find('.nav:nth-child(2)');
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

  it('Clicking on the menu toggler triggers toggleDrawer action', async () => {
    const homeElement = wrapper.find('button');
    homeElement.trigger('click');
    expect(actions.toggleDrawer).toHaveBeenCalled();
  });
});
