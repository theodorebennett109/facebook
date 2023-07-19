import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'sidebar',
})


class Sidebar extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------


  iconList = [
    { heading: 'Home', isActive: true, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-house', image: '' },
    { heading: 'Theodore Bennett', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/icon/theoicon.jpg') },
    { heading: 'Home', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-house', image: '' },
    { heading: 'Home', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-house', image: '' },
    { heading: 'Home', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-house', image: '' },
    { heading: 'Home', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-house', image: '' },
    { heading: 'Home', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-house', image: '' },

  ]

  selectIcon(selectedIcon: { heading: string; isActive: boolean; hasImage: boolean; hasIconBg: boolean; icon: string; image: any; }) {
    this.iconList.forEach(icon => {
      icon.isActive = icon === selectedIcon;
    });
  }

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

  created() {
    // Set 'Home' as active by default
    this.selectIcon(this.iconList[0]);
  }
}

export {
  Sidebar as default,
  Sidebar,
};
