import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'app-footer',
})


class AppFooter extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  languages = [{ name: 'English (US)', isLanguageActive: true }, { name: 'Français (France)', isLanguageActive: false }, { name: 'Español', isLanguageActive: false },
  { name: 'Bahasa Indonesia', isLanguageActive: false }, { name: 'Italiano', isLanguageActive: false }, { name: 'Deutsch', isLanguageActive: false }, { name: 'Português (Brasil)', isLanguageActive: false },
  { name: '中文(简体)', isLanguageActive: false }, { name: 'العربية', isLanguageActive: false }, { name: 'हिन्दी', isLanguageActive: false }, { name: '日本語', isLanguageActive: false },]
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
  AppFooter as default,
  AppFooter,
};
