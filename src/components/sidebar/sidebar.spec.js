import { shallowMount } from '@vue/test-utils';
import Sidebar from './sidebar.vue';

describe('Sidebar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Sidebar);

    expect(wrapper.exists()).toEqual(true);
  });
});
