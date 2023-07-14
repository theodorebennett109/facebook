import { shallowMount } from '@vue/test-utils';
import Registration from './registration.vue';

describe('Registration.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Registration);

    expect(wrapper.exists()).toEqual(true);
  });
});
