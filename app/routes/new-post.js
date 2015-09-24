import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save3(params) {
      debugger;
      var newPost = this.store.createRecord('post', params);
       newPost.save();
       this.transitionTo('index');
    }
  }
});
