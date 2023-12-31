import { AppStore } from '@/store/app';
import { Component, Vue } from 'vue-property-decorator';
const Login = () => import('@/components/login')
const Registration = () => import('@/components/registration')

@Component({
  components: { Login, Registration },
  name: 'landing',
})
class Landing extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------



  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  get isRegistractionModalActive() {
    return AppStore.getIsRegistractionModalActive
  }

  toggleRegistrationModal(isActive: boolean) {
    AppStore.toggleRegistrationModal(isActive)
  }
  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  Landing as default,
  Landing,
};
