import SideBar from '../index.vue';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
describe('SideBar.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;
  const localVue = createLocalVue();
  localVue.use(VueRouter);

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

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SideBar, {
      localVue,
      router,
      vuetify
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('First menu item text contains name of menuItems prop item', async () => {
    wrapper.setProps({
      menuItems: [
        { name: 'First', path: '/' },
        { name: 'Second', path: '/second' }
      ]
    });
    await wrapper.vm.$nextTick();
    const firstItem = wrapper.find('.item');
    expect(firstItem.html()).toContain('First');
  });
  it('Clicking on first item text pushes first prop link', async () => {
    wrapper.setProps({
      menuItems: [
        { name: 'First', path: '/' },
        { name: 'Second', path: '/second' }
      ]
    });
    await wrapper.vm.$nextTick();
    const firstItem = wrapper.findAll('.item').at(1);
    firstItem.trigger('click');
    expect(wrapper.vm.$route.path).toBe('/second');
  });
  it('Bar appears only if prop drawer is not null', async () => {
    wrapper.setProps({
      value: false,
      menuItems: [
        { name: 'First', path: '/' },
        { name: 'Second', path: '/second' }
      ]
    });
    await wrapper.vm.$nextTick();
    const closeWrapper = wrapper.find('.v-navigation-drawer--close');
    expect(closeWrapper.exists()).toBeTruthy();
    wrapper.setProps({
      value: true
    });
    await wrapper.vm.$nextTick();
    const openWrapper = wrapper.find('.v-navigation-drawer--close');
    expect(openWrapper.exists()).toBeFalsy();
  });
});
