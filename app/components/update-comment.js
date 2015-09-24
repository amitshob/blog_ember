import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
      },
    update(comment) {
      var params = {
        username: this.get('username'),
        date: this.get('author'),
        comment: this.get('comment'),
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
