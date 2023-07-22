import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'right-side-panel',
})


class RightSidePanel extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  friends = [{ name: 'John Cena', hasDp: true, profilePic: require('@/assets/friends/cena.jpg'), online: true },
  { name: 'Johnny Depth', hasDp: true, profilePic: require('@/assets/friends/johnny.jpg'), online: false },
  { name: 'Kevin Hart', hasDp: true, profilePic: require('@/assets/friends/kev.jpg'), online: true },
  { name: 'Morgan Freeman', hasDp: true, profilePic: require('@/assets/friends/morgan.jpg'), online: true },
  { name: 'Randy Ortan', hasDp: true, profilePic: require('@/assets/friends/randy.jpg'), online: false },
  { name: 'Dwayne Johnson', hasDp: true, profilePic: require('@/assets/friends/rock.jpg'), online: true },
  { name: 'Shark Boy', hasDp: true, profilePic: require('@/assets/friends/shark.jpg'), online: true },
  { name: 'Konaye West', hasDp: true, profilePic: require('@/assets/friends/west.jpg'), online: false },
  { name: 'Wil Smith', hasDp: true, profilePic: require('@/assets/friends/wil.jpg'), online: true },
  { name: 'zendenya', hasDp: true, profilePic: require('@/assets/friends/zen.jpg'), online: true },
  ]
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
  RightSidePanel as default,
  RightSidePanel,
};
