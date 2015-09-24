import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      // comments: this.store.query('comment', {filter: {post: params.post_id}})
    })
  },

  actions: {
    submit(params) {
      var comment = this.store.createRecord('comment', params);
      comment.save();
      this.transitionTo('post');
    },
    destroyComment(comment) {
      comment.destroyRecord().then(function() {
        post.save();
      });
      this.transitionTo('post')
    }
  }
});
