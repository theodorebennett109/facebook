import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import Titlebar from '@/components/titlebar';
import Sidebar from '@/components/sidebar';
import RightSidePanel from '@/components/right-side-panel';

@Component({
  components: {
    Titlebar, Sidebar, RightSidePanel
  },
  name: 'dashboard',
})
class Dashboard extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  public async navigate(path: string, params?: Dictionary<string>) {
    await this.$router.push({ path, params });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Dashboard as default,
  Dashboard,
};
