import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        postTitle: this.get('postTitle'),
        author: this.get('author'),
        image: this.get('image'),
        date: this.get('date'),
        story: this.get('story'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
