import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppStore } from '@/store/app';

@Component({
  components: {},
  name: 'registration',
})


class Registration extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  firstName: string = ''
  lastName: string = ''
  numOrEmail: string = ''
  password: string = ''

  pronoun: string | null = null
  optionalGender: string | null = null
  gender: string | null = null
  selectedDay = new Date().getDate()
  selectedMonth = new Date().getMonth()
  selectedYear = new Date().getFullYear()
  days = Array.from({ length: 31 }, (_, index) => index + 1)
  months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ]
  years = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index)
  // --------------------------------------------------------------------------
  // Props
  // --------------------------------------------------------------------------
  @Prop({ default: 'default' }) public customProp!: string;
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
  Registration as default,
  Registration,
};
