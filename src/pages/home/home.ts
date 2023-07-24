import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {},
  name: 'home',
})
class Home extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------


  topics: Topic[] = [{
    name: 'Stories', isActive: true, pics: [
      require('@/assets/reelsStory/theograd.jpg'),
      require('@/assets/reelsStory/jachie.jpg'),
      require('@/assets/reelsStory/kevin.jpg'),
      require('@/assets/reelsStory/randy.jpg'),], icon: "fa-solid fa-book-open"
  },
  {
    name: 'Reels', isActive: false, pics: [
      require('@/assets/reelsStory/morgan.jpg'),
      require('@/assets/reelsStory/obama.jpg'),
      require('@/assets/reelsStory/smithchris.jpg'),
      require('@/assets/reelsStory/trump.jpg'),], icon: "fa-solid fa-clapperboard"
  }]

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

  setActive(selectedTopic: Topic) {
    this.topics.forEach(topic => {
      if (topic === selectedTopic) {
        topic.isActive = true;
      } else {
        topic.isActive = false;
      }
    });
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
  Home as default,
  Home,
};
