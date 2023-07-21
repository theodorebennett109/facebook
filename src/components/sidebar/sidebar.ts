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
    { heading: 'Video', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-video', image: '' },
    { heading: 'Gaming', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-gamepad', image: '' },
    { heading: 'See All', isActive: false, hasImage: false, hasIconBg: false, icon: 'fa-solid fa-grip-vertical', image: '' },
    { heading: 'Japan', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/Japan.jpg') },
    { heading: 'Bird Watching', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/birdwatch.jpg') },
    { heading: 'Flowers', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/flowers.jpg') },
    { heading: 'Dandy Lion', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/dandy.jpg') },
    { heading: 'Art', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/art.jpg') },
    { heading: 'Moon Watch', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/moonWatch.jpg') },
    { heading: 'Nature', isActive: false, hasImage: true, hasIconBg: false, icon: '', image: require('@/assets/sidebar/waterfall.jpg') },

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
