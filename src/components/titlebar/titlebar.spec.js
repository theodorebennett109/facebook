import { shallowMount } from '@vue/test-utils';
import Titlebar from './titlebar.vue';

describe('Titlebar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Titlebar);

    expect(wrapper.exists()).toEqual(true);
  });
});
