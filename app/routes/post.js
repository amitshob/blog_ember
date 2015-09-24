import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    submit(params) {
      var comment = this.store.createRecord('comment', params);
      comment.save();
      this.transitionTo('post');
    }
  }
});
