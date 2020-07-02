import SkillRating from '../index.vue';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
describe('SkillRating.vue', () => {
  let wrapper: Wrapper<any>;
  let vuetify;
  const localVue = createLocalVue();

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SkillRating, {
      localVue,
      vuetify
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('Title passed to props matches title in html', async () => {
    wrapper.setProps({
      title: 'Front End Stack'
    });
    await wrapper.vm.$nextTick();
    const stackTitle = wrapper.find('.stackTitle');
    expect(stackTitle.html()).toContain('Front End Stack');
  });
  it('Number of skills passed in props matches number of rendered skills', async () => {
    wrapper.setProps({
      skills: [
        { name: 'html', rating: 1 },
        { name: 'css', rating: 3 }
      ]
    });
    await wrapper.vm.$nextTick();

    const skillItems = wrapper.findAll('.item');
    expect(skillItems.length).toBe(2);
  });
  it('Number of rating passed in skill decides number of elements in skill with colored icon', async () => {
    wrapper.setProps({
      skills: [
        { name: 'html', rating: 1 },
        { name: 'css', rating: 3 }
      ]
    });
    await wrapper.vm.$nextTick();

    const skillItems = wrapper.findAll('.item');
    expect(skillItems.at(0).findAll('.star--checked').length).toBe(1);
    expect(skillItems.at(1).findAll('.star--checked').length).toBe(3);
  });
});
