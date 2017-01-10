import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement){
      if(confirm("Sure you want to delete this announcement?")){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
