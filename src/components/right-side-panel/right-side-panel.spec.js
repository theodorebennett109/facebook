import { shallowMount } from '@vue/test-utils';
import RightSidePanel from './right-side-panel.vue';

describe('RightSidePanel.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(RightSidePanel);

    expect(wrapper.exists()).toEqual(true);
  });
});
