import { shallowMount } from '@vue/test-utils';
import Login from './login.vue';

describe('Login.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Login);

    expect(wrapper.exists()).toEqual(true);
  });
});
